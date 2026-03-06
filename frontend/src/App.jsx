import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Database, Code, Cpu, Globe, Mail, Phone, MapPin, Award, ExternalLink, Github, Linkedin, Server, Layers, Briefcase, User } from 'lucide-react';
import './App.css';

import heroIllustration from './assets/hero_illustration.png';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const engineer = {
    name: 'Shaik Jawadh',
    stack: ['MERN', 'Python'],
    focus: 'Scalable Systems',
    status: 'Ready to Build'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Mocking the backend call for now since we are in a frontend focus
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="app-container">
      <BackgroundCanvas />

      <nav className="glass-nav">
        <div className="nav-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="logo"
          >
            <span className="logo-box">SJ</span> Shaik Jawadh
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="nav-links"
          >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </motion.div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text-side"
            >
              <motion.div 
                className="profile-badge"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Available for Hire
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Shaik <br /> Jawadh
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="typing-text"
              >
                {"Software Engineer & MERN Developer".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.8 + (index * 0.05),
                      ease: "easeIn"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="description"
              >
                Building scalable SaaS platforms and decentralized systems with modern MERN stack architecture.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="btn-group"
              >
                <a href="#contact" className="btn-main">Get In Touch <Send size={18} /></a>
                <a href="#projects" className="btn-secondary">View My Work <ExternalLink size={18} /></a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero-visual-side"
            >
              <div className="visual-wrapper">
                <img src={heroIllustration} alt="Tech Visualization" className="hero-img" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About & Education Section */}
        <section id="about" className="content-section">
          <div className="section-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Professional Background
            </motion.h2>
            <div className="about-grid">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="about-text glass-card"
              >
                <h3>Summary</h3>
                <p>
                  Software Engineer and B.Tech Graduate specializing in <strong>MERN stack development</strong> and high-performance web architecture. Proficient in architecting scalable SaaS platforms and decentralized systems using modern JavaScript frameworks.
                </p>
                <p>
                  Expert in <strong>Object-Oriented Programming (OOP)</strong> with a proven track record of delivering end-to-end technical solutions within the Software Development Life Cycle (SDLC).
                </p>
                <div className="info-bar">
                  <div className="info-item"><MapPin size={18} /> Khammam, India</div>
                  <div className="info-item"><Briefcase size={18} /> B.Tech Software Engineering</div>
                  <div className="info-item"><Award size={18} /> CGPA: 7.0/10.0</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="education-card glass-card"
              >
                <h3>Education</h3>
                <div className="edu-item">
                  <div className="edu-header">
                    <h4>ACE Engineering College</h4>
                    <span>2021 – 2025</span>
                  </div>
                  <p className="edu-degree">Bachelor of Technology in Software Engineering</p>
                  <p className="edu-location">Hyderabad, India</p>
                  <div className="edu-badge">GPA: 7.0/10.0</div>
                </div>
                
                <div className="certifications-mini">
                  <h4>Certifications</h4>
                  <div className="cert-tags">
                    {["CCNA v7", "Salesforce Cloud", "TCS iON Career Edge"].map((cert, i) => (
                      <span key={i} className="cert-tag">{cert}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="grid-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Comprehensive expertise in modern development tools and methodologies.</p>
          </motion.div>
          <div className="bento-grid">
            {[
              { icon: <Code />, title: "Languages", desc: "Python, Java, JavaScript (ES6+), HTML5, CSS3, SQL" },
              { icon: <Cpu />, title: "Web & Frameworks", desc: "React.js, Node.js, Express.js, Bootstrap, Responsive Web Design" },
              { icon: <Database />, title: "Databases", desc: "MongoDB, MySQL, PostgreSQL, NoSQL Architectures" },
              { icon: <Globe />, title: "Tools & Cloud", desc: "Git, GitHub, Vercel, Render, Selenium IDE, Docker, Truffle, Ganache" },
              { icon: <Layers />, title: "Core Competencies", desc: "OOP, SDLC, REST APIs, Technical Team Leadership" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard icon={skill.icon} title={skill.title} desc={skill.desc} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Projects Section */}
        <section id="projects" className="grid-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Technical Projects</h2>
            <p className="section-subtitle">Real-world applications built with cutting-edge technology.</p>
          </motion.div>
          <div className="projects-grid-wide">
            {[
              {
                title: "AI-Gen Service",
                role: "Full Stack Developer",
                duration: "Oct 2024 – Present",
                desc: [
                  "Engineered a full-stack SaaS platform utilizing the MERN stack for high-performance image and text generation.",
                  "Implemented secure user authentication and a dynamic dashboard for efficient management of digital assets.",
                  "Architected MongoDB schemas to support asynchronous data processing and real-time content storage."
                ],
                tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
                github: "https://github.com/jawadshaik73/AI-Service",
                live: "https://ai-service-umber.vercel.app/"
              },
              {
                title: "Student Speaking Assistant",
                role: "Frontend Developer",
                duration: "May 2024 – Sept 2024",
                desc: [
                  "Developed a real-time EdTech application featuring audio processing and automated pronunciation feedback.",
                  "Leveraged React hooks and state management to ensure low-latency UI updates and seamless navigation.",
                  "Optimized frontend performance, increasing cross-platform accessibility across mobile environments."
                ],
                tech: ['React.js', 'JavaScript (ES6+)', 'CSS3', 'Audio APIs'],
                github: "https://github.com/jawadshaik73/student-speaking",
                live: "https://student-speaking.vercel.app/"
              },
              {
                title: "Decentralized Voting System",
                role: "Software Engineer",
                duration: "March 2024 – Aug 2024",
                desc: [
                  "Designed a decentralized architecture ensuring data immutability and voter privacy through smart contracts.",
                  "Led a technical team of 4 through the full SDLC, from ideation to successful deployment.",
                  "Conducted rigorous testing using Ganache to ensure 100% system integrity and stability."
                ],
                tech: ['Node.js', 'Truffle', 'Ganache', 'Smart Contracts', 'MySQL'],
                github: "https://github.com/jawadshaik73/Digital_Voting_using_Blockchain_Technology"
              },
              {
                title: "Light RAG: Retrieval-Augmented Generation",
                role: "Software Developer",
                duration: "July 2024",
                desc: [
                  "Designed a RAG-based module integrating LLMs with automated data pipelines to improve response accuracy.",
                  "Authored modular, well-documented code for automated data fetching and intelligent query resolution."
                ],
                tech: ['Python', 'LLM Integration', 'Data Pipelines', 'RAG'],
                github: "https://github.com/jawadshaik73/Rag-pipeline"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="full-project-card glass-card"
              >
                <div className="project-header">
                  <div className="title-group">
                    <h3>{project.title}</h3>
                    <span className="project-role">{project.role}</span>
                  </div>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <div className="project-content">
                  <ul>
                    {project.desc.map((bullet, i) => <li key={i}>{bullet}</li>)}
                  </ul>
                  <div className="tech-stack-row">
                    {project.tech.map((t, i) => <span key={i} className="tech-tag-premium">{t}</span>)}
                  </div>
                  <div className="project-links-group">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      <Github size={16} /> Source Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-main">
                        <Globe size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h2>Let's Architect Something Great </h2>
              <p>Ready to discuss scalable systems, modern web architecture, or technical leadership opportunities.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Direct Email</h4>
                    <p>jawadshaik73@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone Line</h4>
                    <p>+91 9966271774</p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <h4>Current Location</h4>
                    <p>Khammam, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form-glass"
            >
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label>Service Inquiry</label>
                  <input 
                    type="text" 
                    placeholder="Subject of discussion" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="input-group">
                  <label>Professional Email</label>
                  <input 
                    type="email" 
                    placeholder="How can I reach you back?" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
                <div className="input-group">
                  <label>Message Content</label>
                  <textarea 
                    placeholder="Briefly describe your requirements or query..." 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn-main" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Processing...' : 'Send Inquiry'}
                  <Send size={18} />
                </button>
                {status === 'success' && <p className="success">Message dispatched successfully! 🚀</p>}
                {status === 'error' && <p className="error">Transmission failed. Please check your connection.</p>}
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-box">SJ</span> Shaik Jawadh
            </div>
            <p>Building the future of webpages with MERN stack.</p>
          </div>
          <div className="footer-nav">
            <h4>Navigation</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/in/shaik-jawad-723201287/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://github.com/jawadshaik73" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={18}/> GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shaik Jawadh. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="skill-card-modern"
  >
    <div className="icon-box">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const ProjectCard = ({ title, desc, tech, link }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="project-card"
  >
    <div className="project-content">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tech-stack">
        {tech.map((techItem, index) => (
          <span key={index} className="tech-tag">{techItem}</span>
        ))}
      </div>
      <a href={link} className="project-link">View Details <ExternalLink size={14} /></a>
    </div>
  </motion.div>
);

const BackgroundCanvas = () => {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: 0, y: 0 });
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#020617');
      gradient.addColorStop(1, '#083344');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${p.opacity})`;
        ctx.fill();
        
        // Draw lines between nearby particles
        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 210, 255, ${0.15 * (1 - dist/150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-canvas" />;
};

export default App;
