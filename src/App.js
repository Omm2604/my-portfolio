import profilePhoto from './assets/iamomm.jpg';
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, MapPin, Send, ExternalLink, Cloud, MessageSquare, Database, Server } from 'lucide-react';
import './App.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  const skills = [
    { name: 'Python', icon: '🐍', color: 'skill-python' },
    { name: 'Node.js', icon: '📗', color: 'skill-node' },
    { name: 'AWS', icon: <Cloud className="skill-icon-svg" />, color: 'skill-aws' },
    { name: 'Docker', icon: '🐳', color: 'skill-docker' },
    { name: 'TensorFlow', icon: '🧠', color: 'skill-tensorflow' },
    { name: 'PyTorch', icon: '🔥', color: 'skill-pytorch' },
    { name: 'NLP', icon: <MessageSquare className="skill-icon-svg" />, color: 'skill-nlp' },
    { name: 'MongoDB', icon: <Database className="skill-icon-svg" />, color: 'skill-mongodb' },
    { name: 'PostgreSQL', icon: '🐘', color: 'skill-postgresql' },
    { name: 'FastAPI', icon: <Server className="skill-icon-svg" />, color: 'skill-fastapi' },
    { name: 'Lambda', icon: 'λ', color: 'skill-lambda' },
    { name: 'Transformers', icon: '🤖', color: 'skill-transformers' },
  ];

  const projects = [
    {
      title: 'Intelligent Document Analyzer',
      description: 'NLP-powered document analysis system using BERT and spaCy for entity extraction, sentiment analysis, and content classification. Deployed on AWS Lambda with S3 integration.',
      tech: ['Python', 'BERT', 'AWS Lambda', 'S3', 'spaCy'],
      liveLink: 'https://doc-analyzer-demo.com',
      gradient: 'project-gradient-1'
    },
    {
      title: 'Real-time Chat Analytics Platform',
      description: 'Scalable backend system processing millions of messages with sentiment analysis and topic modeling. Built with Node.js, deployed on AWS ECS with auto-scaling.',
      tech: ['Node.js', 'AWS ECS', 'Redis', 'TensorFlow.js', 'WebSocket'],
      liveLink: 'https://chat-analytics-demo.com',
      gradient: 'project-gradient-2'
    },
    {
      title: 'ML Model Deployment Pipeline',
      description: 'Automated CI/CD pipeline for ML models with A/B testing capabilities. Utilizes AWS SageMaker, Docker, and custom monitoring dashboards for model performance tracking.',
      tech: ['Python', 'AWS SageMaker', 'Docker', 'FastAPI', 'CloudWatch'],
      liveLink: 'https://ml-pipeline-demo.com',
      gradient: 'project-gradient-3'
    },
    {
      title: 'Smart Recommendation Engine',
      description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches using PyTorch. Processes user behavior in real-time with 95% accuracy.',
      tech: ['PyTorch', 'PostgreSQL', 'Redis', 'AWS EC2', 'Scikit-learn'],
      liveLink: 'https://recommender-demo.com',
      gradient: 'project-gradient-4'
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="navbar-logo">Portfolio</div>

            {/* Desktop Menu */}
            <div className="navbar-menu-desktop">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="navbar-link"
                >
                  {item === 'about' ? 'About Me' : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle & Mobile Menu Button */}
            <div className="navbar-actions">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle"
              >
                {darkMode ? <Sun className="icon" /> : <Moon className="icon" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-button"
              >
                {mobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="mobile-menu-link"
              >
                {item === 'about' ? 'About Me' : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name">Omm Prakash Sahu</h1>
              <div className="hero-title">
                Web Developer | Cloud Architect | ML Enthusiast
              </div>
              <p className="hero-description">
                Crafting scalable backend systems and intelligent ML solutions on AWS. Passionate 
                about building robust APIs, deploying cloud-native applications, 
                and leveraging NLP to solve real-world problems.
              </p>
              <div className="hero-buttons">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="btn btn-primary"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-secondary"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <div className="hero-image-glow"></div>
                <img
                src={profilePhoto}
                alt="iamomm"
                className="hero-image"
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate software engineer specializing in backend development, cloud architecture, 
              and machine learning. With extensive experience in AWS cloud services, I design and deploy 
              scalable, high-performance systems that handle millions of requests.
            </p>
            <p>
              My expertise spans across building RESTful APIs, microservices architectures, and serverless 
              applications. I'm particularly enthusiastic about natural language processing and leveraging 
              deep learning models to extract insights from text data.
            </p>
            <p>
              When I'm not coding, I contribute to open-source projects, write technical blogs about ML 
              deployment best practices, and explore the latest advancements in transformer models and 
              cloud-native technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className={`skill-card ${skill.color}`}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${project.gradient}`}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink className="icon" />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-intro">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>ommprakash2604@email.com</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <span>Odisha, India</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="form-input"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="4"
                className="form-textarea"
              />
              <button type="submit" className="btn btn-primary btn-full">
                <Send className="icon" />
                <span>Send Message</span>
              </button>
              {formStatus && (
                <p className="form-status">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">© 2026 Omm Prakash Sahu. All rights reserved.</p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/omm-prakash-sahu-b4200630a"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
