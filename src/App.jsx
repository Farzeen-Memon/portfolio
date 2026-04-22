import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, ExternalLink, Send,
  Code, Cpu, Terminal, Menu, X, Layout, Box,
  Database, FileText, Download, GraduationCap,
  Briefcase, Award, ChevronRight, Globe, Users
} from 'lucide-react'
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaPython, FaBrain } from 'react-icons/fa'
import { SiMongodb, SiTensorflow, SiOpenai, SiFastapi, SiScikitlearn, SiPostgresql, SiLangchain } from 'react-icons/si'
import profilePic from './assets/profile.jpg'
import ttsLogo from './assets/ttsnashik_logo.jpg'
import sumagoLogo from './assets/sumago.png'
import hanokImg from './assets/hanok_grill.png'
import nexoImg from './assets/nexo_platform.png'
import resumeBuilderImg from './assets/ai_resume_builder.png'

const HeroCanvas = React.lazy(() => import('./components/HeroCanvas'))

const LINKEDIN = 'https://www.linkedin.com/in/farzeen-memon-web-aiml/'
const GITHUB   = 'https://github.com/Farzeen-Memon'
const EMAIL    = 'farzeenmemonn@gmail.com'
const RESUME_URL = '/resume.pdf'

// ─── Navbar ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { name: 'Home',      href: '#home'     },
    { name: 'Projects',  href: '#projects' },
    { name: 'Skills',    href: '#skills'   },
    { name: 'Experience',href: '#journey'  },
    { name: 'Contact',   href: '#contact'  },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-logo">FARZEEN<span>.</span></a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.name}><a href={l.href}>{l.name}</a></li>
          ))}
        </ul>

        <div className="nav-right">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={`mailto:${EMAIL}`} className="social-icon" title="Email">
            <FaEnvelope size={20} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
          >
            {links.map(l => (
              <a key={l.name} href={l.href} className="mobile-menu-link" onClick={() => setIsOpen(false)}>
                {l.name} <ChevronRight size={14} />
              </a>
            ))}
            <div className="mobile-menu-socials">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={20} /></a>
              <a href={GITHUB}   target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={20} /></a>
              <a href={`mailto:${EMAIL}`} className="social-icon"><FaEnvelope size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Page 1: Hero ─────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-canvas" />

    <div className="hero-grid container">

      {/* Left: Text */}
      <motion.div
        className="hero-text-col"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.15 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.42 }}
        >
          Fullstack
          <span className="hero-title-accent">Engineer</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56 }}
        >
          Full Stack Engineer specialized in <span className="hero-text-highlight">AI</span> and <span className="hero-text-highlight">MERN stack</span> development, building scalable web applications, 
          intelligent systems, and high-performance backend architectures. Focused on solving real-world 
          problems through clean code, modern technologies, and impactful product engineering.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <div className="hero-social-wrap">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right: Profile image */}
      <motion.div
        className="hero-image-col"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.25 }}
      >
        <div className="hero-img-wrap">
          <div className="hero-img-border" />
          <div className="hero-img-inner">
            <img src={profilePic} alt="Farzeen Memon" />
            <div className="hero-img-gradient" />
          </div>
        </div>
      </motion.div>

    </div>

  </section>
)

// ─── Page 2: Skills ───────────────────────────────────────────────────────────
const SKILL_DATA = [
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI']
  },
  {
    category: 'AI / ML',
    skills: ['Machine Learning', 'TensorFlow', 'Computer Vision', 'Prompt Engineering']
  },
  {
    category: 'Tools',
    skills: ['Git / GitHub', 'VS Code', 'Docker', 'Postman']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section skill-aesthetic-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Expertise</div>
          <h2>
            What I Work{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
              With
            </span>
          </h2>
        </div>

        <div className="skills-aesthetic-grid">
          {SKILL_DATA.map((item) => (
            <div key={item.category} className="skill-glass-card">
              <h3 className="skill-glass-title">{item.category}</h3>
              <div className="skill-glass-tags">
                {item.skills.map((s) => (
                  <span key={s} className="skill-glass-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page 3: Journey / Timeline ───────────────────────────────────────────────
const TIMELINE = [
  {
    year: 'Nov 2025 – Feb 2026',
    icon: <img src={ttsLogo} alt="Technokraft" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    hasLogo: true,
    type: 'project',
    title: 'Full Stack Intern',
    org: 'Technokraft Training & Solution Pvt. Ltd.',
    desc: 'Developed robust full-stack applications and architected scalable backend APIs using the MERN stack.',
    tags: ['MERN Stack', 'APIs', 'Web Development'],
  },
  {
    year: 'Jan 2026 – Feb 2026',
    icon: <img src={sumagoLogo} alt="Sumago" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />,
    hasLogo: true,
    type: 'project',
    title: 'AIML & Data Science Intern',
    org: 'Sumago Infotech Pvt. Ltd.',
    desc: 'Optimized machine learning models and refined data preprocessing pipelines for enterprise-level applications.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
  },
]

const typeColors = {
  education: '#5c8aff',
  project: '#c9a882',
  achievement: '#f0c060',
  learning: '#4ade80',
}

const TimelineItem = ({ item, index }) => (
  <motion.div
    className="h-timeline-item"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div className="h-timeline-dot-wrap">
      <div className="h-timeline-dot" style={{ background: typeColors[item.type] }} />
      <div className="h-timeline-connector" />
    </div>
    
    <div className="h-timeline-content">
      <div className="h-timeline-year">{item.year}</div>
      <div className="h-timeline-card">
        <div className="h-timeline-card-icon" style={{ 
          background: item.hasLogo ? '#fff' : `${typeColors[item.type]}20`, 
          color: typeColors[item.type],
          padding: item.hasLogo ? '6px' : '0'
        }}>
          {item.icon}
        </div>
        <div className="h-timeline-body">
          <h3 className="h-timeline-title">{item.title}</h3>
          <div className="h-timeline-org">{item.org}</div>
          <p className="h-timeline-desc">{item.desc}</p>
          <div className="h-timeline-tags">
            {item.tags.map(t => (
              <span key={t} className="h-timeline-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)


const Journey = () => (
  <section id="journey" className="section h-timeline-section">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="section-label">Experience</div>
        <h2>
          Work{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
            Timeline
          </span>
        </h2>
        <p className="section-subtitle">
          My professional growth and internships in the AI and Web ecosystem.
        </p>
      </motion.div>

      <div className="h-timeline-wrapper">
        <div className="h-timeline-items">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
)


// ─── Marquee ──────────────────────────────────────────────────────────────────
const TECH = [
  { icon: <FaReact />,          label: 'React'             },
  { icon: <FaNodeJs />,         label: 'Node.js'           },
  { icon: <FaPython />,         label: 'Python'            },
  { icon: <SiMongodb />,        label: 'MongoDB'           },
  { icon: <SiFastapi />,        label: 'FastAPI'           },
  { icon: <SiTensorflow />,     label: 'TensorFlow'        },
  { icon: <SiOpenai />,         label: 'Prompt Engineering'},
  { icon: <Cpu size={14}/>,     label: 'Agentic AI'        },
  { icon: <FaBrain size={14}/>, label: 'Data Science'      },
  { icon: <Database size={14}/>,label: 'Databases'         },
  { icon: <Code size={14}/>,    label: 'LangChain'         },
  { icon: <Layout size={14}/>,  label: 'MERN Stack'        },
]

const MarqueeSection = () => {
  const doubled = [...TECH, ...TECH]
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            <span style={{ color: 'var(--primary-color)', display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </span>
            {item.label}
            <div className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: 'NEXO (AI Orchestration)',
    description: 'Autonomous Agent Manager that replaces PM with a "Neural Layer" of 4 agents: Planner, Matcher, Team Selection, and self-healing Replanning.',
    tech: ['Python', 'FastAPI', 'Agentic AI', 'MongoDB', 'LangChain'],
    image: nexoImg,
    demo: '#', source: 'https://github.com/Farzeen-Memon/Autonomous-AI-Agent-Manager',
  },
  {
    title: 'AI Resume Builder',
    description: 'Advanced resume optimizer using LLMs to extract achievements and tailor content for job roles with real-time feedback and enhancement.',
    tech: ['Python', 'Gemini AI', 'React', 'FastAPI'],
    image: resumeBuilderImg,
    demo: '#', source: GITHUB,
  },
  {
    title: 'E-Waste Platform',
    description: 'AI classifier identifying electronic waste types linked to certified recyclers, with a MERN stack logistics layer.',
    tech: ['TensorFlow', 'Node.js', 'React Native', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    demo: 'https://phone-zone-e-waste.vercel.app/', source: 'https://github.com/Farzeen-Memon/PhoneZone-E-Waste',
  },
  {
    title: 'Hanok Grill (AI-Powered)',
    description: 'High-end Korean restaurant platform with an AI recommendation engine (FastAPI) for personalized dish suggestions. Features Razorpay, reservations, and real-time emails.',
    tech: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'Razorpay'],
    image: hanokImg,
    demo: '#', source: 'https://github.com/Farzeen-Memon/Hanok-Grill',
  },
  {
    title: 'Prompt Compiler',
    description: 'A specialized tool for optimizing LLM prompts using a custom compiler architecture, reducing token usage while improving accuracy.',
    tech: ['Prompt Engineering', 'Python', 'LLMs', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    demo: '#', source: GITHUB,
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
  >
    <div className="project-image">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="project-image-overlay" />
    </div>
    <div className="project-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech-tags">
        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
      <div className="project-actions">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-primary">
          <ExternalLink size={13} /> Live Demo
        </a>
        <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-outline">
          <FaGithub size={13} /> Source
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => (
  <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="section-label">PORTFOLIO</div>
        <h2>
          My{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
            Work
          </span>
        </h2>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '3rem' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <FaGithub /> View All on GitHub <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
)

// ─── Contact ──────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${form.name}`
    const body    = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('sent')
    setTimeout(() => setStatus(null), 3500)
  }

  const contactItems = [
    { icon: <FaEnvelope />, label: 'Email',    value: EMAIL,                    href: `mailto:${EMAIL}` },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'farzeen-memon-web-aiml', href: LINKEDIN         },
    { icon: <FaGithub />,   label: 'GitHub',   value: 'Farzeen-Memon',          href: GITHUB           },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Get In Touch</div>
          <h2>
            Let's build{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
              something great.
            </span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
          >
            <p style={{ lineHeight: 1.85, marginBottom: '2rem' }}>
              Looking for a dedicated AI-focused full-stack engineer? I'm open to internships,
              freelance projects, and full-time roles. Let's create something exceptional together.
            </p>
            <div className="contact-links">
              {contactItems.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <div className="contact-link-icon">{item.icon}</div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{item.label}</span>
                    <span className="contact-link-value">{item.value}</span>
                  </div>
                  <ArrowUpRight size={15} style={{ marginLeft: 'auto', color: 'var(--text-dim)', flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="contact-form-wrapper">
              <h3 style={{ marginBottom: '1.8rem', fontSize: '1.2rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="cf-name">Full Name</label>
                  <input id="cf-name" type="text" className="form-input" placeholder="John Doe"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email Address</label>
                  <input id="cf-email" type="email" className="form-input" placeholder="john@example.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Your Message</label>
                  <textarea id="cf-message" className="form-input" placeholder="Tell me about your project..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(74,222,128,0.08)',
                        border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80', textAlign: 'center', fontWeight: 600 }}>
                      ✓ Opening your email client…
                    </motion.div>
                  ) : (
                    <motion.button key="btn" type="submit" className="btn btn-primary"
                      style={{ width: '100%', padding: '1rem' }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Send size={15} /> Send Message
                    </motion.button>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-inner">
        <div className="footer-logo">FARZEEN<span>.</span></div>
        <p className="footer-text">© 2026 Farzeen Memon · Fullstack Engineer</p>
        <div className="social-links">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin size={20} /></a>
          <a href={GITHUB}   target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub size={20} /></a>
          <a href={`mailto:${EMAIL}`} className="social-icon" title="Email"><FaEnvelope size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
)

// ─── Resume FAB ───────────────────────────────────────────────────────────────
const ResumeFAB = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="resume-fab"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.8, type: 'spring', stiffness: 200 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => window.open(RESUME_URL, '_blank')}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      title="View / Download Resume"
    >
      <AnimatePresence mode="wait">
        {hovered ? (
          <motion.div key="exp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="resume-fab-inner expanded">
            <Download size={17} /><span>Resume</span>
          </motion.div>
        ) : (
          <motion.div key="icon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="resume-fab-inner">
            <FileText size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <Hero />
      <MarqueeSection />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
      <div className="gradient-divider" />
      <Footer />
      <ResumeFAB />
    </div>
  )
}
