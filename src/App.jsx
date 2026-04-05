import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, ExternalLink, Send,
  Code, Cpu, Terminal, Menu, X, Layout, Box,
  Database, FileText, Download, GraduationCap,
  Briefcase, Award, ChevronRight, Globe
} from 'lucide-react'
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaPython, FaBrain } from 'react-icons/fa'
import { SiMongodb, SiTensorflow, SiOpenai, SiFastapi, SiScikitlearn, SiPostgresql, SiLangchain } from 'react-icons/si'
import profilePic from './assets/profile.jpg'

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
            <FaLinkedin />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FaGithub />
          </a>
          <a href={`mailto:${EMAIL}`} className="social-icon" title="Email">
            <FaEnvelope />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
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
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href={GITHUB}   target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href={`mailto:${EMAIL}`} className="social-icon"><FaEnvelope /></a>
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
    <div className="hero-canvas">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
    </div>

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
          Fullstack <br />
          <span className="hero-title-accent">AI Engineer</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56 }}
        >
          A passionate fresher specializing in the MERN stack fused with cutting-edge AI —
          from machine learning and data science to agentic pipelines and prompt engineering.
          Building intelligent apps that make a difference.
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
          <a href="#skills" className="btn btn-outline">
            My Skills
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FaLinkedin size={16} />
          </a>
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
const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: <Globe size={20} />,
    color: '#61dafb',
    skills: [
      { name: 'React.js', icon: <FaReact />, level: 85 },
      { name: 'Next.js', icon: <FaReact />, level: 75 },
      { name: 'HTML / CSS / JS', icon: <Code size={14} />, level: 90 },
      { name: 'Framer Motion', icon: <Layout size={14} />, level: 70 },
    ]
  },
  {
    title: 'Backend',
    icon: <Terminal size={20} />,
    color: '#87cf3e',
    skills: [
      { name: 'Node.js / Express', icon: <FaNodeJs />, level: 82 },
      { name: 'Python', icon: <FaPython />, level: 88 },
      { name: 'FastAPI', icon: <SiFastapi />, level: 80 },
      { name: 'REST APIs', icon: <Globe size={14} />, level: 85 },
    ]
  },
  {
    title: 'Databases',
    icon: <Database size={20} />,
    color: '#f0c060',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
      { name: 'MySQL', icon: <Database size={14} />, level: 72 },
      { name: 'Firebase', icon: <Database size={14} />, level: 65 },
    ]
  },
  {
    title: 'AI / ML',
    icon: <Cpu size={20} />,
    color: '#c9a882',
    skills: [
      { name: 'Machine Learning', icon: <SiScikitlearn />, level: 78 },
      { name: 'TensorFlow', icon: <SiTensorflow />, level: 72 },
      { name: 'Prompt Engineering', icon: <SiOpenai />, level: 85 },
      { name: 'Agentic AI (LangChain)', icon: <SiOpenai />, level: 75 },
    ]
  },
  {
    title: 'Data Science',
    icon: <FaBrain size={20} />,
    color: '#5c8aff',
    skills: [
      { name: 'Pandas / NumPy', icon: <FaPython />, level: 82 },
      { name: 'Data Visualization', icon: <Layout size={14} />, level: 75 },
      { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 78 },
      { name: 'Data Cleaning', icon: <Database size={14} />, level: 80 },
    ]
  },
  {
    title: 'Tools & More',
    icon: <Award size={20} />,
    color: '#ff8c42',
    skills: [
      { name: 'Git / GitHub', icon: <FaGithub />, level: 88 },
      { name: 'VS Code', icon: <Code size={14} />, level: 90 },
      { name: 'Docker (basics)', icon: <Box size={14} />, level: 55 },
      { name: 'Linux CLI', icon: <Terminal size={14} />, level: 70 },
    ]
  },
]

const SkillBar = ({ name, icon, level, color }) => (
  <div className="skill-bar-item">
    <div className="skill-bar-header">
      <span className="skill-bar-icon" style={{ color }}>{icon}</span>
      <span className="skill-bar-name">{name}</span>
    </div>
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      />
    </div>
  </div>
)

const SkillCard = ({ category, index }) => (
  <motion.div
    className="skill-card"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
  >
    <div className="skill-card-header">
      <span className="skill-card-icon" style={{ color: category.color, background: `${category.color}18` }}>
        {category.icon}
      </span>
      <h3 className="skill-card-title">{category.title}</h3>
    </div>
    <div className="skill-bars">
      {category.skills.map(s => (
        <SkillBar key={s.name} {...s} color={category.color} />
      ))}
    </div>
  </motion.div>
)

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="section-label">What I Know</div>
        <h2>
          My{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
            Skillset
          </span>
        </h2>
        <p className="section-subtitle">
          A fresher with strong fundamentals across the full stack and AI ecosystem — always learning, always building.
        </p>
      </motion.div>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </div>
  </section>
)

// ─── Page 3: Journey / Timeline ───────────────────────────────────────────────
const TIMELINE = [
  {
    year: '2024 – Present',
    icon: <Briefcase size={18} />,
    type: 'project',
    title: 'Fullstack AI Intern / Developer',
    org: 'AI Innovation Hub (Simulated)',
    desc: 'Actively building production-ready AI applications, integrating LLMs into full-stack MERN environments, and optimizing ML models for real-world use cases.',
    tags: ['MERN Stack', 'Agentic AI', 'Ongoing'],
  },
  {
    year: '2024',
    icon: <Award size={18} />,
    type: 'achievement',
    title: 'Top Performer - AI Hackathon',
    org: 'National Tech Summit',
    desc: 'Won 1st place for developing the "AI Resume Filter System" which utilized advanced NLP for semantic candidate matching.',
    tags: ['First Place', 'NLP', 'Innovation'],
  },
  {
    year: '2024',
    icon: <Briefcase size={18} />,
    type: 'education',
    title: 'CS Undergraduate (AI Specialization)',
    org: 'University Name',
    desc: 'Consistently maintaining high academic standing with a focus on Deep Learning and Advanced Web Architectures.',
    tags: ['Education', '3.5+ CGPA'],
  },
  {
    year: '2023',
    icon: <Briefcase size={18} />,
    type: 'project',
    title: 'Web & AI Research Intern',
    org: 'Personal R&D',
    desc: 'Researched and implemented Computer Vision pipelines (OpenCV) for virtual try-on experiences and e-waste classification systems.',
    tags: ['Python', 'TensorFlow', 'Research'],
  },
  {
    year: '2023',
    icon: <Award size={18} />,
    type: 'achievement',
    title: 'Certification: Fullstack Engineering',
    org: 'Global EdTech',
    desc: 'Earned professional certification after completing 12 weeks of intensive project-based learning in MERN and Cloud basics.',
    tags: ['Certified', '10+ Projects'],
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
    className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay: 0.1 }}
  >
    <div className="timeline-content">
      <div className="timeline-year">{item.year}</div>
      <div className="timeline-card">
        <div className="timeline-card-icon" style={{ background: `${typeColors[item.type]}20`, color: typeColors[item.type] }}>
          {item.icon}
        </div>
        <div className="timeline-card-body">
          <h3 className="timeline-title">{item.title}</h3>
          <div className="timeline-org">{item.org}</div>
          <p className="timeline-desc">{item.desc}</p>
          <div className="timeline-tags">
            {item.tags.map(t => (
              <span key={t} className="timeline-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="timeline-dot" style={{ background: typeColors[item.type] }} />
  </motion.div>
)

const Journey = () => (
  <section id="journey" className="section">
    <div className="container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="section-label">Experience & Awards</div>
        <h2>
          Work{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
            Timeline
          </span>
        </h2>
        <p className="section-subtitle">
          My professional growth, internships, and technical milestones in the AI and Web ecosystem.
        </p>
      </motion.div>

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {TIMELINE.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
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
    title: 'AI Resume Filter',
    description: 'NLP-powered candidate ranking by semantic matching against job descriptions. React dashboard + FastAPI backend.',
    tech: ['Python', 'spaCy', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    demo: '#', source: GITHUB,
  },
  {
    title: 'Virtual Try-On (AR)',
    description: 'Real-time AR garment overlay using OpenCV and WebRTC — try clothes virtually via webcam before buying.',
    tech: ['OpenCV', 'Flask', 'Three.js', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    demo: '#', source: GITHUB,
  },
  {
    title: 'E-Waste Platform',
    description: 'AI classifier identifying electronic waste types linked to certified recyclers, with a MERN stack logistics layer.',
    tech: ['TensorFlow', 'Node.js', 'React Native', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
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
        <a href={project.demo} className="project-btn project-btn-primary">
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
        <div className="section-label">Portfolio</div>
        <h2>
          Featured{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
            Creations
          </span>
        </h2>
        <p className="section-subtitle">
          Projects blending AI engineering, full-stack development, and creative problem-solving.
        </p>
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
        <p className="footer-text">© 2026 Farzeen Memon · Fullstack AI Engineer · Fresher</p>
        <div className="social-links">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin /></a>
          <a href={GITHUB}   target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
          <a href={`mailto:${EMAIL}`} className="social-icon" title="Email"><FaEnvelope /></a>
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
