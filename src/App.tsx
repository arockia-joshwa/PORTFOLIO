import { useState, useEffect, useRef } from "react";
import profilePhoto from "./assets/profile-photo.png";

/* ─── Icons (inline SVG) ─── */
function IconLinkedIn({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconGitHub({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconMail({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconPhone({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMapPin({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconExternalLink({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconAward({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconChevronDown({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconDatabase({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function IconCpu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function IconCode({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconLayers({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconTrendingUp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconBriefcase({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconGraduationCap({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconStar({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── Hero Visual ─── */
function DataPipelineVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Outer orbit ring */}
      <div className="absolute w-80 h-80 rounded-full border border-[rgba(56,189,248,0.08)] spin-slow" />
      <div className="absolute w-56 h-56 rounded-full border border-dashed border-[rgba(56,189,248,0.12)] spin-slow-rev" />

      {/* SVG pipeline */}
      <svg viewBox="0 0 340 300" className="w-full max-w-sm float-anim" style={{ filter: "drop-shadow(0 0 20px rgba(56,189,248,0.2))" }}>
        {/* Connecting lines */}
        <line x1="60" y1="80" x2="140" y2="150" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" className="pipeline-line" />
        <line x1="280" y1="80" x2="200" y2="150" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" className="pipeline-line" style={{ animationDelay: "0.5s" }} />
        <line x1="170" y1="170" x2="170" y2="230" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" className="pipeline-line" style={{ animationDelay: "1s" }} />
        <line x1="60" y1="80" x2="170" y2="55" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 6" className="pipeline-line" />
        <line x1="280" y1="80" x2="170" y2="55" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 6" className="pipeline-line" style={{ animationDelay: "0.8s" }} />
        <line x1="80" y1="220" x2="140" y2="240" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 5" className="pipeline-line" style={{ animationDelay: "0.3s" }} />
        <line x1="260" y1="220" x2="200" y2="240" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 5" className="pipeline-line" style={{ animationDelay: "0.7s" }} />

        {/* Database node — top center */}
        <g transform="translate(155, 30)" className="node-pulse">
          <rect x="0" y="0" width="30" height="22" rx="4" fill="#0e1421" stroke="#38bdf8" strokeWidth="1.5" />
          <ellipse cx="15" cy="6" rx="12" ry="4" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
          <line x1="3" y1="10" x2="27" y2="10" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="3" y1="14" x2="27" y2="14" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.6" />
        </g>

        {/* Node left — ingestion */}
        <g transform="translate(35, 58)" className="node-pulse" style={{ animationDelay: "0.6s" }}>
          <rect x="0" y="0" width="48" height="42" rx="8" fill="#0e1421" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="24" y="14" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono">DATA</text>
          <text x="24" y="24" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="JetBrains Mono">SOURCE</text>
          <circle cx="24" cy="34" r="4" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
        </g>

        {/* Node right — processing */}
        <g transform="translate(258, 58)" className="node-pulse" style={{ animationDelay: "1.2s" }}>
          <rect x="0" y="0" width="48" height="42" rx="8" fill="#0e1421" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="24" y="14" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono">ETL</text>
          <text x="24" y="24" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="JetBrains Mono">PIPELINE</text>
          <circle cx="24" cy="34" r="4" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
        </g>

        {/* Center hub */}
        <g transform="translate(135, 130)">
          <circle cx="35" cy="35" r="35" fill="#0e1421" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="28" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 4" />
          <text x="35" y="29" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono" fontWeight="500">DATA</text>
          <text x="35" y="40" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono" fontWeight="500">ENGINE</text>
          <circle cx="35" cy="35" r="5" fill="#38bdf8" fillOpacity="0.8" className="node-pulse" />
        </g>

        {/* Output node */}
        <g transform="translate(140, 228)" className="node-pulse" style={{ animationDelay: "0.9s" }}>
          <rect x="0" y="0" width="60" height="32" rx="8" fill="#0e1421" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="30" y="14" textAnchor="middle" fill="#38bdf8" fontSize="7" fontFamily="JetBrains Mono">INSIGHTS</text>
          <text x="30" y="24" textAnchor="middle" fill="#94a3b8" fontSize="5.5" fontFamily="JetBrains Mono">ANALYTICS OUTPUT</text>
        </g>

        {/* Small satellite nodes */}
        <circle cx="80" cy="218" r="8" fill="#0e1421" stroke="#38bdf8" strokeWidth="1" className="node-pulse" style={{ animationDelay: "1.4s" }} />
        <text x="80" y="222" textAnchor="middle" fill="#38bdf8" fontSize="5" fontFamily="JetBrains Mono">AI</text>
        <circle cx="260" cy="218" r="8" fill="#0e1421" stroke="#38bdf8" strokeWidth="1" className="node-pulse" style={{ animationDelay: "0.4s" }} />
        <text x="260" y="222" textAnchor="middle" fill="#38bdf8" fontSize="5" fontFamily="JetBrains Mono">ML</text>

        {/* Decorative bits */}
        <rect x="100" y="28" width="12" height="12" rx="2" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.4" />
        <rect x="225" y="28" width="12" height="12" rx="2" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.4" />
        <circle cx="30" cy="150" r="3" fill="#38bdf8" fillOpacity="0.3" />
        <circle cx="310" cy="150" r="3" fill="#38bdf8" fillOpacity="0.3" />
        <circle cx="170" cy="275" r="3" fill="#38bdf8" fillOpacity="0.3" />
      </svg>

      {/* Profile photo placeholder */}
      <div
        className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-2 border-[#38bdf8] flex flex-col items-center justify-center text-center"
        style={{ background: "rgba(14,20,33,0.9)", boxShadow: "0 0 20px rgba(56,189,248,0.25)" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span className="font-mono-label text-[8px] text-[#38bdf8] leading-tight">YOUR<br />PHOTO</span>
      </div>
    </div>
  );
}

/* ─── Scroll Reveal ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

type RevealType = "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "flip-up" | "blur-in" | "fade-down";

function Reveal({
  children,
  type = "fade-up",
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  type?: RevealType;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${type} ${inView ? "is-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Animated Background ─── */
function AnimatedBackground() {
  const particles = [
    { top: "8%", left: "12%", delay: "0s", duration: "5s" },
    { top: "18%", left: "82%", delay: "0.6s", duration: "4.2s" },
    { top: "32%", left: "45%", delay: "1.2s", duration: "6s" },
    { top: "48%", left: "8%", delay: "0.3s", duration: "4.8s" },
    { top: "62%", left: "90%", delay: "1.6s", duration: "5.4s" },
    { top: "74%", left: "28%", delay: "2s", duration: "4.5s" },
    { top: "85%", left: "65%", delay: "0.9s", duration: "5.8s" },
    { top: "22%", left: "60%", delay: "1.4s", duration: "4.6s" },
    { top: "55%", left: "52%", delay: "0.4s", duration: "6.2s" },
    { top: "92%", left: "15%", delay: "1.8s", duration: "5.1s" },
    { top: "5%", left: "50%", delay: "1s", duration: "4.9s" },
    { top: "40%", left: "95%", delay: "0.2s", duration: "5.6s" },
  ];

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="bg-blob b1" />
      <div className="bg-blob b2" />
      <div className="bg-blob b3" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      {particles.map((p, i) => (
        <span
          key={i}
          className="bg-particle"
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ tag, title, subtitle }: { tag: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="section-tag mb-3">{tag}</div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-[#94a3b8] text-base max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

/* ─── Social Icon Button ─── */
function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-[rgba(56,189,248,0.2)] flex items-center justify-center text-[#94a3b8] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all duration-200 hover:shadow-[0_0_12px_rgba(56,189,248,0.3)]"
    >
      {icon}
    </a>
  );
}

/* ─── Skill Card ─── */
const skillCategories = [
  {
    label: "Programming",
    icon: <IconCode size={18} />,
    skills: [
      { name: "Python", desc: "Data analysis, scripting, automation" },
      { name: "SQL", desc: "Database queries and data manipulation" },
    ],
  },
  {
    label: "Data Engineering",
    icon: <IconDatabase size={18} />,
    skills: [
      { name: "Data Processing", desc: "Transforming and preparing datasets" },
      { name: "ETL / Pipelines", desc: "Designing data flow architectures" },
      { name: "Data Analysis", desc: "Extracting insights from raw data" },
      { name: "Database Concepts", desc: "RDBMS design and optimization" },
    ],
  },
  {
    label: "AI & Data Science",
    icon: <IconCpu size={18} />,
    skills: [
      { name: "Artificial Intelligence", desc: "Concepts and applied AI techniques" },
      { name: "Machine Learning", desc: "Model building and evaluation" },
      { name: "Data Science", desc: "Statistical analysis and modeling" },
    ],
  },
  {
    label: "Tools & Technologies",
    icon: <IconLayers size={18} />,
    skills: [
      { name: "Add Tool 1 →", desc: "Edit this card with your tools" },
      { name: "Add Tool 2 →", desc: "IDE, cloud platforms, libraries…" },
    ],
  },
];

/* ─── Main App ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen relative" style={{ background: "var(--background)" }}>
      <AnimatedBackground />
      <div className="relative z-10">

      {/* ─── NAV ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? { background: "rgba(8,12,20,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(56,189,248,0.1)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="font-display font-bold text-lg tracking-tight">
            <span className="text-white">AROCKIA</span>{" "}
            <span className="text-[#38bdf8]">JOSHWA</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-display text-sm font-medium transition-colors duration-200 ${activeSection === link.id ? "text-[#38bdf8]" : "text-[#94a3b8] hover:text-white"}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex btn-primary px-4 py-2 text-sm items-center gap-2"
            >
              Let's Connect
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line" style={menuOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
              <span className="hamburger-line" style={menuOpen ? { opacity: 0 } : {}} />
              <span className="hamburger-line" style={menuOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2" style={{ background: "rgba(8,12,20,0.97)", borderBottom: "1px solid rgba(56,189,248,0.1)" }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left py-3 font-display text-sm font-medium text-[#94a3b8] hover:text-[#38bdf8] transition-colors border-b border-[rgba(56,189,248,0.06)] last:border-0"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} className="btn-primary mt-4 w-full py-3 text-sm">
              Let's Connect
            </button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(56,189,248,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(56,189,248,0.03) 0%, transparent 50%)",
        }} />
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.05)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] node-pulse" />
              <span className="font-mono-label text-[11px] text-[#38bdf8] tracking-widest">B.TECH AI & DATA SCIENCE STUDENT</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-white">Hi, I'm Joshwa.</span>
              <br />
              <span className="text-white">Aspiring </span>
              <span className="text-[#38bdf8] text-glow">Data Engineer.</span>
            </h1>

            <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-lg">
              I'm a B.Tech Artificial Intelligence and Data Science student passionate about Data Engineering, Artificial Intelligence, and technology. I enjoy building projects, learning new technologies, and turning data into meaningful solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo("projects")} className="btn-primary px-6 py-3 text-sm flex items-center gap-2">
                View My Projects
                <IconExternalLink size={15} />
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-outline px-6 py-3 text-sm">
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <SocialButton href="https://linkedin.com/in/joshwa-j-6051a4327/" icon={<IconLinkedIn size={17} />} label="LinkedIn" />
              <SocialButton href="https://github.com/arockia-joshwa" icon={<IconGitHub size={17} />} label="GitHub" />
              <SocialButton href="mailto:joshwa192007@gmail.com" icon={<IconMail size={17} />} label="Email" />
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative h-80 md:h-[420px] w-full">
            <DataPipelineVisual />
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
        >
          <span className="font-mono-label text-[10px] tracking-widest">SCROLL</span>
          <IconChevronDown size={16} />
        </a>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// 01 — ABOUT ME"
          title="Turning curiosity into data-driven solutions."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <Reveal type="fade-right" className="flex justify-center md:justify-end">
            <div
              className="w-72 h-80 rounded-2xl border-2 border-[#38bdf8] relative overflow-hidden float-anim"
              style={{ background: "var(--card)", boxShadow: "0 0 40px rgba(56,189,248,0.15)" }}
            >
              <img
                src={profilePhoto}
                alt="Arockia Joshwa J"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(8,12,20,0) 55%, rgba(8,12,20,0.55) 100%)" }}
              />
              {/* Decorative corner */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#38bdf8] opacity-80 rounded-tl-sm" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#38bdf8] opacity-80 rounded-br-sm" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal type="fade-left" delay={150} className="space-y-6">
            <p className="text-[#cbd5e1] text-base leading-relaxed">
              Hi, I'm <span className="text-white font-semibold">Arockia Joshwa J</span>, a B.Tech Artificial Intelligence and Data Science student at{" "}
              <span className="text-[#38bdf8]">Dhanalakshmi Srinivasan University</span>.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              I'm passionate about Data Engineering, Artificial Intelligence, and technology. I enjoy exploring new technologies, building practical projects, and transforming data into meaningful solutions.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              My goal is to continuously improve my technical skills and build reliable, useful data-driven systems.
            </p>

            {/* Highlight cards */}
            <div className="grid gap-3 pt-2">
              {[
                { icon: <IconCpu size={16} />, title: "AI & Data Science", desc: "B.Tech student specializing in Artificial Intelligence and Data Science." },
                { icon: <IconDatabase size={16} />, title: "Aspiring Data Engineer", desc: "Interested in building data pipelines, databases, and data-driven systems." },
                { icon: <IconTrendingUp size={16} />, title: "Technology Enthusiast", desc: "Always learning new technologies and exploring practical applications." },
              ].map((card) => (
                <div key={card.title} className="card-dark flex items-start gap-3 p-4">
                  <div className="mt-0.5 text-[#38bdf8] shrink-0">{card.icon}</div>
                  <div>
                    <div className="font-display font-semibold text-sm text-white mb-0.5">{card.title}</div>
                    <div className="text-[#94a3b8] text-xs leading-relaxed">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 text-[#94a3b8] text-sm">
              <IconMapPin size={15} />
              <span>Kallakurichi, Tamil Nadu, India</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section id="skills" className="py-28" style={{ background: "rgba(14,20,33,0.5)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="// 02 — SKILLS"
            title={<>Technical <span className="text-[#38bdf8]">Skills</span></>}
            subtitle="Technologies I'm learning and working with"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <Reveal key={cat.label} type="zoom-in" delay={i * 120} className="card-dark p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="text-[#38bdf8]">{cat.icon}</div>
                  <span className="font-display font-semibold text-sm text-white">{cat.label}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((sk) => (
                    <div key={sk.name} className="flex items-start gap-2">
                      <div className="skill-dot mt-1.5 shrink-0" />
                      <div>
                        <div className="font-display text-sm font-medium text-[#e2e8f0]">{sk.name}</div>
                        <div className="text-[#64748b] text-xs mt-0.5 leading-relaxed">{sk.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projects" className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// 03 — PROJECTS"
          title={<>Featured <span className="text-[#38bdf8]">Projects</span></>}
          subtitle="Building projects to turn ideas into practical solutions."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured */}
          <Reveal type="fade-left" className="card-dark overflow-hidden md:col-span-2 lg:col-span-1">
            {/* Thumbnail */}
            <div
              className="h-48 flex items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a1628, #0e1e35)" }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(56,189,248,0.1) 0%, transparent 70%)" }} />
              <div className="text-center z-10">
                <IconDatabase size={40} />
                <div className="font-mono-label text-[10px] text-[#38bdf8] mt-2 tracking-widest">RESUME MATCHER</div>
              </div>
              <div
                className="absolute top-3 right-3 font-mono-label text-[10px] px-2 py-1 rounded-full border border-[rgba(56,189,248,0.3)] text-[#38bdf8]"
                style={{ background: "rgba(56,189,248,0.05)" }}
              >
                FEATURED
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Resume Matcher</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  An intelligent resume matching project designed to compare resumes with job requirements and identify relevant skills and matching information.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "NLP", "Data Processing", "Add Tech →"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-label text-[10px] px-2.5 py-1 rounded-full border border-[rgba(56,189,248,0.2)] text-[#38bdf8]"
                    style={{ background: "rgba(56,189,248,0.05)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/arockia-joshwa" target="_blank" rel="noopener noreferrer" className="btn-outline px-4 py-2 text-xs flex items-center gap-1.5">
                  <IconGitHub size={13} /> GitHub
                </a>
                <a href="https://github.com/arockia-joshwa" target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 text-xs flex items-center gap-1.5">
                  View Project <IconExternalLink size={12} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Placeholder projects */}
          {[
            { num: "02", label: "Project 02" },
            { num: "03", label: "Project 03" },
            { num: "04", label: "Project 04" },
          ].map((proj, i) => (
            <Reveal key={proj.num} type="fade-left" delay={(i + 1) * 120} className="card-dark overflow-hidden">
              <div
                className="h-36 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0a1628, #0e1e35)" }}
              >
                <div className="text-center text-[#38bdf8] opacity-40">
                  <div className="font-display text-4xl font-black tracking-tighter">{proj.num}</div>
                  <div className="font-mono-label text-[10px] tracking-widest mt-1">ADD PROJECT</div>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-display font-bold text-white opacity-60">{proj.label}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">Add your project description here. Replace this card with your project details, technologies, and links.</p>
                <div className="flex flex-wrap gap-2">
                  {["Tech 1", "Tech 2", "Tech 3"].map((t) => (
                    <span key={t} className="font-mono-label text-[9px] px-2 py-0.5 rounded-full border border-[rgba(56,189,248,0.1)] text-[#64748b]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <button className="btn-outline px-3 py-1.5 text-xs flex items-center gap-1 opacity-50 cursor-default">
                    <IconGitHub size={11} /> GitHub
                  </button>
                  <button className="btn-primary px-3 py-1.5 text-xs flex items-center gap-1 opacity-50 cursor-default">
                    View <IconExternalLink size={11} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section id="certifications" className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// 04 — CERTIFICATIONS"
          title={<>Certifications & <span className="text-[#38bdf8]">Learning</span></>}
          subtitle="Continuous learning through courses and certifications"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} type="fade-right" delay={i * 130} className="card-dark p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[rgba(56,189,248,0.2)] text-[#38bdf8]" style={{ background: "rgba(56,189,248,0.05)" }}>
                <IconAward size={18} />
              </div>
              <div>
                <div className="font-mono-label text-[10px] text-[#38bdf8] mb-1">CERTIFICATION 0{n}</div>
                <h3 className="font-display font-semibold text-white mb-1">Certification Name</h3>
                <div className="text-[#64748b] text-xs">Issuing Organization</div>
                <div className="text-[#64748b] text-xs mt-0.5">Year</div>
              </div>
              <div className="mt-auto pt-2">
                <button className="btn-outline w-full py-2 text-xs flex items-center justify-center gap-1.5 opacity-50 cursor-default">
                  View Certificate <IconExternalLink size={11} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section className="py-28" style={{ background: "rgba(14,20,33,0.5)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="// 05 — EXPERIENCE"
            title={<>My <span className="text-[#38bdf8]">Experience</span></>}
          />

          <Reveal type="flip-up" className="max-w-2xl mx-auto text-center">
            <div
              className="card-dark p-10 flex flex-col items-center gap-5"
              style={{ background: "linear-gradient(135deg, rgba(14,20,33,1), rgba(18,26,44,0.8))" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center border border-[rgba(56,189,248,0.2)] text-[#38bdf8]"
                style={{ background: "rgba(56,189,248,0.05)", boxShadow: "0 0 20px rgba(56,189,248,0.1)" }}
              >
                <IconBriefcase size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-3">Currently Building My Experience</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed max-w-md">
                  Focused on developing practical skills through projects, learning, and opportunities in Data Engineering, Artificial Intelligence, and Data Science.
                </p>
              </div>
              {/* Editable placeholder card */}
              <div className="w-full mt-2 p-5 rounded-xl border border-dashed border-[rgba(56,189,248,0.2)]" style={{ background: "rgba(56,189,248,0.02)" }}>
                <div className="font-mono-label text-[10px] text-[#38bdf8] mb-2 tracking-wider">INTERNSHIP / EXPERIENCE PLACEHOLDER</div>
                <div className="font-display font-semibold text-sm text-white opacity-40 mb-1">Company / Organization Name</div>
                <div className="text-[#64748b] text-xs">Role · Duration · Location</div>
                <div className="text-[#64748b] text-xs mt-2 leading-relaxed opacity-60">Replace this card with your internship or work experience details when available.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="// 06 — ACHIEVEMENTS"
          title={<>Key <span className="text-[#38bdf8]">Achievements</span></>}
          subtitle="Milestones and recognitions along the journey"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} type="blur-in" delay={i * 150} className="card-dark p-6 flex flex-col gap-4 group">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-[rgba(56,189,248,0.2)] text-[#38bdf8] group-hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-shadow"
                  style={{ background: "rgba(56,189,248,0.05)" }}
                >
                  <IconStar size={17} />
                </div>
                <div className="font-mono-label text-[10px] text-[#38bdf8]">ACHIEVEMENT 0{n}</div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-sm mb-1">Achievement Title</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">Add a brief description of this achievement — event, competition, recognition, or milestone.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "rgba(14,20,33,0.8)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.06) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            tag="// 07 — CONTACT"
            title={<>Let's Build Something <span className="text-[#38bdf8]">With Data</span></>}
            subtitle="Have an opportunity, project idea, or simply want to connect? I'd be happy to hear from you."
          />

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            {/* Info */}
            <Reveal type="fade-up" className="space-y-6">
              <h3 className="font-display text-lg font-semibold text-white">Get In Touch</h3>

              {[
                { icon: <IconMail size={18} />, label: "Email", value: "joshwa192007@gmail.com", href: "mailto:joshwa192007@gmail.com" },
                { icon: <IconPhone size={18} />, label: "Phone", value: "+91 9566312318", href: "tel:+919566312318" },
                { icon: <IconMapPin size={18} />, label: "Location", value: "Kallakurichi, Tamil Nadu, India", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[#38bdf8] border border-[rgba(56,189,248,0.2)]"
                    style={{ background: "rgba(56,189,248,0.05)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono-label text-[10px] text-[#64748b] mb-0.5 tracking-wider">{item.label.toUpperCase()}</div>
                    {item.href ? (
                      <a href={item.href} className="text-[#e2e8f0] text-sm hover:text-[#38bdf8] transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#e2e8f0] text-sm font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <a
                  href="https://linkedin.com/in/joshwa-j-6051a4327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(56,189,248,0.15)] hover:border-[rgba(56,189,248,0.4)] transition-all duration-200 hover:shadow-[0_0_16px_rgba(56,189,248,0.15)] group"
                  style={{ background: "rgba(56,189,248,0.03)" }}
                >
                  <div className="text-[#38bdf8]"><IconLinkedIn size={20} /></div>
                  <div className="flex-1">
                    <div className="font-mono-label text-[10px] text-[#64748b] mb-0.5">LINKEDIN</div>
                    <div className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#38bdf8] transition-colors">linkedin.com/in/joshwa-j-6051a4327/</div>
                  </div>
                  <div className="text-[#64748b] group-hover:text-[#38bdf8] transition-colors"><IconExternalLink size={14} /></div>
                </a>
                <a
                  href="https://github.com/arockia-joshwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(56,189,248,0.15)] hover:border-[rgba(56,189,248,0.4)] transition-all duration-200 hover:shadow-[0_0_16px_rgba(56,189,248,0.15)] group"
                  style={{ background: "rgba(56,189,248,0.03)" }}
                >
                  <div className="text-[#38bdf8]"><IconGitHub size={20} /></div>
                  <div className="flex-1">
                    <div className="font-mono-label text-[10px] text-[#64748b] mb-0.5">GITHUB</div>
                    <div className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#38bdf8] transition-colors">github.com/arockia-joshwa</div>
                  </div>
                  <div className="text-[#64748b] group-hover:text-[#38bdf8] transition-colors"><IconExternalLink size={14} /></div>
                </a>
              </div>
            </Reveal>

            {/* CTA card */}
            <Reveal
              type="zoom-in"
              delay={150}
              className="card-dark p-8 text-center flex flex-col items-center gap-6"
              style={{ background: "linear-gradient(135deg, rgba(14,20,33,1), rgba(18,28,50,0.8))", boxShadow: "0 0 40px rgba(56,189,248,0.08)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center border border-[rgba(56,189,248,0.3)] text-[#38bdf8]"
                style={{ background: "rgba(56,189,248,0.08)", boxShadow: "0 0 24px rgba(56,189,248,0.2)" }}
              >
                <IconMail size={26} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Ready to Connect?</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">Open to internship opportunities, collaborations, and conversations about data engineering and AI.</p>
              </div>
              <a
                href="mailto:joshwa192007@gmail.com"
                className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
              >
                <IconMail size={16} />
                Let's Connect
              </a>
              <a
                href="https://linkedin.com/in/joshwa-j-6051a4327/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full py-3 text-sm flex items-center justify-center gap-2"
              >
                <IconLinkedIn size={16} />
                Connect on LinkedIn
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10 border-t border-[rgba(56,189,248,0.08)]" style={{ background: "#06090f" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-lg tracking-tight">
              <span className="text-white">AROCKIA</span>{" "}
              <span className="text-[#38bdf8]">JOSHWA J</span>
            </div>
            <div className="font-mono-label text-[11px] text-[#64748b] mt-1 tracking-wider">
              ASPIRING DATA ENGINEER · AI & DATA SCIENCE STUDENT
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SocialButton href="https://linkedin.com/in/joshwa-j-6051a4327/" icon={<IconLinkedIn size={16} />} label="LinkedIn" />
            <SocialButton href="https://github.com/arockia-joshwa" icon={<IconGitHub size={16} />} label="GitHub" />
            <SocialButton href="mailto:joshwa192007@gmail.com" icon={<IconMail size={16} />} label="Email" />
          </div>

          <div className="font-mono-label text-[11px] text-[#64748b] text-center md:text-right">
            © 2026 Arockia Joshwa J. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
