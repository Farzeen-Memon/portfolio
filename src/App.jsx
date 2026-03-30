import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, Mail, Github, ExternalLink, Send,
  Code, Cpu, Terminal, Menu, X, Layout
} from 'lucide-react'
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiMongodb, SiTensorflow, SiOpenai, SiThreejs } from 'react-icons/si'
import profilePic from './assets/profile.jpg'

const HeroCanvas = React.lazy(() => import('./components/HeroCanvas'))
const SkillsCanvas = React.lazy(() => import('./components/SkillsCanvas'))

const LINKEDIN = 'https://www.linkedin.com/in/farzeen-memon-web-aiml/'
const GITHUB   = 'https://github.com/Farzeen-Memon'
const EMAIL    = 'farzeenmemonn@gmail.com'

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
    { name: 'About',    href: '#about'    },
    { name: 'Skills',   href: '#skills'   },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact',  href: '#contact'  },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">FARZEEN<span>.</span></a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.name}><a href={l.href}>{l.name}</a></li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
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
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 998,
              background: 'rgba(12,10,8,0.97)',
              borderBottom: '1px solid var(--glass-border)',
              padding: '1.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem'
            }}
          >
            {links.map(l => (
              <a
                key={l.name} href={l.href}
                style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 600 }}
                onClick={() => setIsOpen(false)}
              >
                {l.name}
              </a>
            ))}
            <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
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

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="hero-section" id="home">
    <div className="hero-canvas">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>
    </div>

    <div className="hero-content-wrapper container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Work
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          Fullstack <br />
          <span className="hero-title-accent">AI Engineer</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I specialize in the MERN stack integrated with cutting-edge AI — building intelligent,
          data-driven applications that bridge complex algorithms and seamless user experiences.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowUpRight size={16} />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaLinkedin size={15} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="stats-row"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { num: '3+',  label: 'Years Experience' },
            { num: '15+', label: 'Projects Built'   },
            { num: '5+',  label: 'AI Models Trained' },
          ].map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-number">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    <div className="hero-scroll-indicator">
      <span>Scroll</span>
      <div className="scroll-line" />
    </div>
  </section>
)

// ─── Marquee ──────────────────────────────────────────────────────────────────
const TECH = [
  { icon: <FaReact />,         label: 'React'           },
  { icon: <FaNodeJs />,        label: 'Node.js'         },
  { icon: <FaPython />,        label: 'Python'          },
  { icon: <SiMongodb />,       label: 'MongoDB'         },
  { icon: <SiTensorflow />,    label: 'TensorFlow'      },
  { icon: <SiOpenai />,        label: 'Generative AI'   },
  { icon: <SiThreejs />,       label: 'Three.js'        },
  { icon: <Terminal size={14}/>,label: 'Express'        },
  { icon: <Cpu size={14}/>,    label: 'Machine Learning'},
  { icon: <Code size={14}/>,   label: 'OpenCV'          },
  { icon: <Layout size={14}/>, label: 'MERN Stack'      },
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

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => {
  const skills = [
    { icon: <FaReact size={14} />,       name: 'React / Next.js'     },
    { icon: <FaNodeJs size={14} />,      name: 'Node.js / Express'   },
    { icon: <FaPython size={14} />,      name: 'Python'              },
    { icon: <SiMongodb size={14} />,     name: 'MongoDB'             },
    { icon: <SiTensorflow size={14} />,  name: 'TensorFlow'          },
    { icon: <SiOpenai size={14} />,      name: 'Generative AI'       },
    { icon: <Cpu size={14} />,           name: 'Machine Learning'    },
    { icon: <Code size={14} />,          name: 'OpenCV / CV'         },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* Image */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <div className="about-image-frame" />
            <div className="about-image-inner">
              <img src={profilePic} alt="Farzeen Memon" />
              <div className="about-image-overlay" />
            </div>
            <div className="experience-badge">
              <span className="exp-number">3+</span>
              <span className="exp-label">Years of<br />Experience</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <div className="section-label">About Me</div>
            <h2>
              Designing the future with{' '}
              <span style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontWeight: 400, color: 'var(--primary-color)'
              }}>
                MERN + AI.
              </span>
            </h2>
            <p style={{ marginTop: '1.5rem', lineHeight: 1.85 }}>
              I'm a Fullstack AI Engineer with a passion for building software that solves complex
              problems through the MERN stack and intelligent design. My approach is rooted in clean
              architecture, high performance, and user-centricity.
            </p>
            <p style={{ marginTop: '1rem', lineHeight: 1.85 }}>
              From NLP models and computer vision pipelines to polished React frontends and scalable
              Node.js APIs — I bring ideas to life with precision and creativity.
            </p>

            <div className="skill-tags">
              {skills.map(s => (
                <div key={s.name} className="skill-tag">
                  <span style={{ color: 'var(--primary-color)' }}>{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaLinkedin size={15} /> View LinkedIn
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Skills 3D ────────────────────────────────────────────────────────────────
const Skills = () => (
  <section id="skills" className="section skills-section" style={{ background: 'var(--bg-secondary)', padding: '6rem 0 4rem' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="section-label" style={{ justifyContent: 'center' }}>My Toolkit</div>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        Skills in{' '}
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
          3D Space
        </span>
      </h2>
      <p style={{ marginTop: '0.8rem', color: 'var(--text-muted)', maxWidth: '420px', margin: '0.8rem auto 0' }}>
        Each floating gem represents a skill in my engineering arsenal — hover to explore.
      </p>
    </div>
    <div className="skills-canvas-wrapper">
      <Suspense fallback={
        <div style={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)', fontSize: '0.9rem', letterSpacing: '2px' }}>
          LOADING 3D...
        </div>
      }>
        <SkillsCanvas />
      </Suspense>
    </div>
  </section>
)

// ─── Projects ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: 'AI Resume Filter',
    description: 'An NLP-powered engine that ranks job candidates by semantic matching against job descriptions. Built with spaCy, transformers, and a clean React recruiter dashboard.',
    tech: ['Python', 'spaCy', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    source: GITHUB,
  },
  {
    title: 'Virtual Try-On',
    description: 'AR-based shopping experience using OpenCV for real-time garment overlay. Users can try clothes virtually through their webcam before purchasing.',
    tech: ['OpenCV', 'Flask', 'Three.js', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    source: GITHUB,
  },
  {
    title: 'E-Waste Platform',
    description: 'A logistics platform with an AI classifier that identifies electronic waste types and connects users with certified recyclers in real time.',
    tech: ['TensorFlow', 'Node.js', 'React Native', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    demo: '#',
    source: GITHUB,
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 45 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay: index * 0.13 }}
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
          <Github size={13} /> Source
        </a>
      </div>
    </div>
  </motion.div>
)

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <motion.div
        className="text-center"
        style={{ marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="section-label" style={{ justifyContent: 'center' }}>Portfolio</div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Featured{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
            Creations
          </span>
        </h2>
        <p style={{ marginTop: '1rem', maxWidth: '480px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
          A curated selection of projects blending AI engineering, full-stack development, and design.
        </p>
      </motion.div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: '3.5rem' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
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
  const [status, setStatus] = useState(null) // null | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${form.name}`
    const body    = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('sent')
    setTimeout(() => setStatus(null), 3500)
  }

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'farzeen-memon-web-aiml',
      href: LINKEDIN,
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'Farzeen-Memon',
      href: GITHUB,
    },
  ]

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="contact-grid">

          {/* Left */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">Get In Touch</div>
            <h2>
              Let's build<br />something{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--primary-color)' }}>
                remarkable.
              </span>
            </h2>
            <p style={{ marginTop: '1.2rem', lineHeight: 1.85 }}>
              Looking for a dedicated engineer to bring your ideas to life?<br />
              Reach out — let's create something exceptional together.
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

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="contact-form-wrapper">
              <h3 style={{ marginBottom: '1.8rem', fontSize: '1.2rem' }}>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="cf-name">Full Name</label>
                  <input
                    id="cf-name" type="text" className="form-input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email Address</label>
                  <input
                    id="cf-email" type="email" className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Your Message</label>
                  <textarea
                    id="cf-message" className="form-input"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        padding: '1rem', borderRadius: '12px',
                        background: 'rgba(74,222,128,0.08)',
                        border: '1px solid rgba(74,222,128,0.2)',
                        color: '#4ade80', textAlign: 'center', fontWeight: 600
                      }}
                    >
                      ✓ Opening your email client…
                    </motion.div>
                  ) : (
                    <motion.button
                      key="btn"
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '1rem' }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
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
        <p className="footer-text">© 2026 Farzeen Memon · Fullstack AI Engineer</p>
        <div className="social-links">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <FaGithub />
          </a>
          <a href={`mailto:${EMAIL}`} className="social-icon" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <Hero />
      <MarqueeSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="gradient-divider" />
      <Footer />
    </div>
  )
}
