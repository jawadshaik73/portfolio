import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGO_URI;

// MongoDB Connection with Mongoose
async function connectDB() {
  try {
    if (!dbURI) {
      throw new Error('MONGO_URI is not defined in .env file');
    }

    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(dbURI);
    console.log('✅ Connected to MongoDB Atlas');

    // Verification ping as requested
    if (mongoose.connection.db) {
      await mongoose.connection.db.admin().command({ ping: 1 });
      console.log('📡 Database ping successful');
    }
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    if (err.name === 'MongooseServerSelectionError') {
      console.error('🔍 Hint: Check your IP whitelist in MongoDB Atlas and ensure the password is correct.');
    }
    process.exit(1);
  }
}

connectDB();

// Define the Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);


// Transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    // 1. Save to MongoDB
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    console.log(`💾 Saved contact from: ${name}`);

    // 2. Send Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #6366f1; border-radius: 10px;">
          <h2 style="color: #6366f1;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr />
          <p style="font-size: 0.8rem; color: #64748b;">This message was stored in MongoDB and sent via your Node.js backend.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent for: ${name}`);
    
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ Error handling contact request:', err);
    res.status(500).json({ error: 'Failed to process your request' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});