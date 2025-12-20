import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Palette, ChevronDown, Layout, BarChart, FileText } from 'lucide-react';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "The Right Home",
      description: "A data-driven web application helping users explore top-rated neighborhoods based on school quality and affordability metrics using census tract data.",
      tags: ["React", "Data Visualization", "UI/UX", "Census Data"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      github: "https://github.com/washu-cse2004-fl2025-1/final-project-liviakaufman",
      live: "https://washu-cse2004-fl2025-1.github.io/final-project-liviakaufman/",
      category: "web"
    },
    {
      id: 2,
      title: "React Todo App",
      description: "A functional task management application built with React, featuring state management for adding, completing, and deleting tasks with a clean user interface.",
      tags: ["React", "State Management", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      github: "https://github.com/washu-cse2004-fl2025-1/todo-react-liviakaufman",
      live: "https://washu-cse2004-fl2025-1.github.io/todo-react-liviakaufman/",
      category: "web"
    },
    {
      id: 3,
      title: "Brand Redesign",
      description: "A comprehensive visual identity project focused on reimagining brand aesthetics through modern design principles, typography, and color theory.",
      tags: ["Branding", "UI/UX", "Visual Design", "Typography"],
      image: "truck.jpg",
      github: "https://github.com/washu-cse2004-fl2025-1/brand-redesign-liviakaufman",
      live: "https://washu-cse2004-fl2025-1.github.io/brand-redesign-liviakaufman/",
      category: "web"
    },
    {
      id: 4,
      title: "Interactive Image Gallery",
      description: "A dynamic gallery featuring responsive layouts, hover effects, and a focus on sleek UI/UX for browsing visual content.",
      tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
      image: "frames.jpg",
      github: "https://github.com/washu-cse2004-fl2025-1/image-gallery-liviakaufman",
      live: "https://washu-cse2004-fl2025-1.github.io/image-gallery-liviakaufman/",
      category: "web"
    },
    {
      id: 5,
      title: "Retro Instagram Clone",
      description: "A fully responsive social media interface featuring a horizontal story tray, interactive like/save functionality, and dynamic commenting logic.",
      tags: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      github: "https://github.com/washu-cse2004-fl2025-1/retro-instagram-clone-liviakaufman",
      live: "https://washu-cse2004-fl2025-1.github.io/retro-instagram-clone-liviakaufman/",
      category: "web"
    },
    {
      id: 6,
      title: "Cosmos Exploration Branding",
      description: "A complete visual identity system featuring custom logo design, a space-themed color palette, and responsive iconography.",
      tags: ["Branding", "UI/UX Design", "Iconography", "Style Guide"],
      image: "/cosmos-logo.png",
      designLink: ["/cosmos-logo.png", "/cosmos-logo2.png"],
      category: "design"
    },
    {
      id: 7,
      title: "MIMIC-III Sepsis Prediction",
      description: "An ensemble ML model (Random Forest, Gradient Boosting, Logistic Regression) predicting sepsis in ICU patients with 95% confidence intervals and 3-tier risk stratification.",
      tags: ["BigQuery", "SQL", "Scikit-Learn", "Medical AI"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", // Medical/Hospital image
      github: "https://github.com/liviakaufman/sepsis-prediction-mimic",
      category: "data"
    },
    {
      id: 8,
      title: "ML Tennis Winner Prediction",
      description: "Research project utilizing Logistic Regression, Random Forest, and Keras Deep Learning to predict Grand Slam outcomes with 98.3% surface accuracy and 74.6% winner accuracy.",
      tags: ["Machine Learning", "Python", "Keras", "Data Analysis"],
      image: "tennis.jpg", // High-quality Tennis/Data image
      github: "https://github.com/liviakaufman/tennis-ml-prediction", 
      category: "data"
    },
    {
      id: 9,
      title: "Enhanced Predictive Modeling & Stratification",
      description: "A high-performance ensemble model featuring 3-tier risk stratification and demographic subgroup analysis. Achieved significant F1 score improvements using Bootstrap validation and custom feature engineering.",
      tags: ["Predictive Analytics", "Ensemble Methods", "Bootstrap CI", "Python"],
      image: "modeling.jpg", // Recommended: Screenshot of your 'Sepsis Rate by Risk Tier' or 'Feature Importance' chart
      github: "https://github.com/liviakaufman/predictive-risk-modeling",
      category: "data"
    },
    {
      id: 10,
      title: "Interactive Web Calculator",
      description: "A clean, responsive calculator built with vanilla JavaScript and CSS. Features a modern UI and handles complex arithmetic operations with precise state management.",
      tags: ["JavaScript", "HTML5", "CSS3", "Logic"],
      image: "calc.jpg", // Use a screenshot of your calculator UI
      github: "https://github.com/liviakaufman/calculator",
      category: "web"
    },
  ];

  const skills = [
    { name: "JavaScript/React", icon: <Code className="w-5 h-5" /> },
    { name: "Python & R", icon: <Code className="w-5 h-5" /> },
    { name: "SQL & Data Analysis", icon: <Database className="w-5 h-5" /> },
    { name: "Tableau", icon: <BarChart className="w-5 h-5" /> },
    { name: "Figma & UI/UX", icon: <Layout className="w-5 h-5" /> },
    { name: "HTML & CSS", icon: <Code className="w-5 h-5" /> },
    { name: "Adobe Suite", icon: <Palette className="w-5 h-5" /> },
    { name: "Microsoft Suite", icon: <FileText className="w-5 h-5" /> },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <nav className="relative container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">LK</h1>
          <div className="flex gap-4">
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">👋 Welcome to my portfolio</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Livia Kaufman</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Computer Science Student at Washington University in St. Louis
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Building data-driven applications and creative solutions. Passionate about user experience, 
            data visualization, and creating meaningful digital experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition transform hover:scale-105">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium backdrop-blur transition">
              Get in Touch
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="https://github.com/liviakaufman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/liviakaufman" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:liviak7@gmail.com" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition text-center">
              <div className="text-purple-400 mb-3 flex justify-center">{skill.icon}</div>
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Check out some of my recent work</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition ${activeFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('web')}
            className={`px-6 py-2 rounded-lg font-medium transition ${activeFilter === 'web' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setActiveFilter('design')}
            className={`px-6 py-2 rounded-lg font-medium transition ${activeFilter === 'design' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
          >
            Design
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.designLink && Array.isArray(project.designLink) ? (
                    <>
                      <a href={project.designLink[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition text-sm">
                        <Palette className="w-4 h-4" />
                        Logo
                      </a>
                      <a href={project.designLink[1]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition text-sm">
                        <Palette className="w-4 h-4" />
                        Pattern
                      </a>
                    </>
                  ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 text-lg mb-6">
            Hi! My name is Livia Kaufman, and I’m a senior in the McKelvey School of Engineering at WashU studying Computer Science. I’m passionate about how technology can bring people together, whether that’s through artificial intelligence, human-computer interaction, or creative applications of product design.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center bg-white/5 backdrop-blur rounded-2xl p-12 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:liviak7@gmail.com" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition transform hover:scale-105">
              Send Me an Email
            </a>
            <a href="https://www.linkedin.com/in/livia-kaufman/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium backdrop-blur transition">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Livia Kaufman. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;