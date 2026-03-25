/**
 * Carousel3D Examples & Configurations
 * 
 * This file demonstrates various ways to use the Carousel3D component
 * with different data sources and configurations.
 */

// ==========================================
// Example 1: Portfolio Projects Carousel
// ==========================================
export const portfolioExamples = [
  {
    image: "/certificates/C1.png",
  },
  {
    image: "/certificates/C2.jpeg",
  },
  {
    image: "/certificates/C3.jpeg",
  },
  {
    image: "/certificates/C4.jpeg",
  },
  {
    image: "/certificates/C5.jpeg",
  },
  {
    image: "/certificates/C6.jpeg",
  }
];

// ==========================================
// Example 2: Technology Stack Carousel
// ==========================================
export const techStackCarousel = [
  {
    title: "Frontend Development",
    description: "Modern web interfaces with React & Vue",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["React", "Vue.js", "Next.js", "Vite"]
  },
  {
    title: "Backend Systems",
    description: "Scalable server architecture",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["Node.js", "Express", "Python", "FastAPI"]
  },
  {
    title: "Database Design",
    description: "SQL & NoSQL database optimization",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
  },
  {
    title: "DevOps & Cloud",
    description: "Deployment, scaling, and infrastructure",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["AWS", "Docker", "CI/CD", "Kubernetes"]
  },
  {
    title: "AI & Machine Learning",
    description: "AI-powered solutions and ML models",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "LLMs"]
  },
  {
    title: "Security & Testing",
    description: "Secure code practices and QA",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["Jest", "Selenium", "OWASP", "Penetration"]
  }
];

// ==========================================
// Example 3: Design Inspiration Carousel
// ==========================================
export const designInspirationCarousel = [
  {
    title: "Glassmorphism Design",
    description: "Modern glass-like UI components",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    tags: ["Glass Effect", "Backdrop Blur", "Modern UI"]
  },
  {
    title: "3D Interactions",
    description: "Interactive 3D web experiences",
    image: "https://images.unsplash.com/photo-1629904853893-c2c409efd308?w=400&h=300&fit=crop",
    tags: ["Three.js", "3D CSS", "WebGL"]
  },
  {
    title: "Motion Design",
    description: "Smooth animations and transitions",
    image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=300&fit=crop",
    tags: ["Framer Motion", "GSAP", "Anime.js"]
  },
  {
    title: "Typography",
    description: "Beautiful text and font combinations",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    tags: ["Font Design", "Web Fonts", "Typography"]
  },
  {
    title: "Color Theory",
    description: "Harmonious color palettes",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    tags: ["Gradient", "Harmony", "Accessibility"]
  },
  {
    title: "Responsive Design",
    description: "Mobile-first responsive layouts",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    tags: ["Responsive", "Mobile", "Adaptive"]
  }
];

// ==========================================
// Reusable Carousel Component Template
// ==========================================
export const createCarouselData = (projects) => {
  return projects.map((project) => ({
    title: project.name || project.title,
    description: project.description || project.summary,
    image: project.imageUrl || project.thumbnail || "https://via.placeholder.com/400x300",
    tags: project.technologies || project.tools || []
  }));
};

// ==========================================
// Usage in Component:
// ==========================================
/*

import Carousel3D from './components/Carousel3D';
import {
  portfolioExamples,
  techStackCarousel,
  designInspirationCarousel
} from './Carousel3DExamples';

// Usage 1: Portfolio Projects
<section>
  <h2>My Projects</h2>
  <Carousel3D items={portfolioExamples} />
</section>

// Usage 2: Technology Stack
<section>
  <h2>Tech Stack I Work With</h2>
  <Carousel3D items={techStackCarousel} />
</section>

// Usage 3: Design Inspiration
<section>
  <h2>Design Inspiration</h2>
  <Carousel3D items={designInspirationCarousel} />
</section>

// Usage 4: Dynamic Data from API
const [projects, setProjects] = useState([]);

useEffect(() => {
  fetchProjects().then(data => {
    const carouselData = createCarouselData(data);
    setProjects(carouselData);
  });
}, []);

<Carousel3D items={projects} />

*/

// ==========================================
// Styling Customization Guide
// ==========================================
/*

EASING FUNCTIONS FOR SMOOTH ANIMATIONS:
- cubic-bezier(0.34, 1.56, 0.64, 1) - Custom spring ease (current)
- cubic-bezier(0.25, 0.46, 0.45, 0.94) - Standard ease
- cubic-bezier(0.43, 0.13, 0.23, 0.96) - Back ease
- cubic-bezier(0.175, 0.885, 0.32, 1.275) - Elastic ease

MOTION BLUR TIMING:
- Fast: 1s (energetic)
- Medium: 2s (default - smooth)
- Slow: 3s (elegant)

CYLINDER SIZE ADJUSTMENTS:
- Desktop: width: 500px, height: 500px, translateZ: 400px
- Tablet: width: 350px, height: 350px, translateZ: 280px
- Mobile: width: 250px, height: 250px, translateZ: 200px

GLASSMORPHISM INTENSITY:
- Light: rgba(255, 255, 255, 0.05), blur(10px)
- Medium: rgba(255, 255, 255, 0.1), blur(15px) - current
- Heavy: rgba(255, 255, 255, 0.2), blur(25px)

*/
