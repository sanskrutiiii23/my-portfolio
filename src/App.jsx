import { useState } from "react";
import "./App.css";
import myPic from "./assets/my_pic.jpeg";
import chef from "./assets/chef.jpeg";
import lifequest from "./assets/lifequest.png";
import leowatch from "./assets/leowatch.png";
import sbLogo from "./assets/SB LOGO.webp";
import StarfieldCanvas from "./components/StarfieldCanvas";
import ProjectModal from "./components/ProjectModal";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sanskrutiborade07@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Designs", href: "#designs" },
    { name: "Contact", href: "#contact" },
  ];

  const experienceData = [
    {
      role: "AI Consulting Intern",
      organization: "Optylize",
      location: "New Delhi (Remote)",
      period: "May 2026 – Present",
      type: "Internship",
      badgeColor: "bg-indigo-950/70 text-indigo-300 border-indigo-500/30",
      description: "Spearheading market research and enterprise analytical frameworks for cutting-edge AI software adoption.",
      points: [
        "Spearheaded research into AI adoption across 45+ MSMEs, mapping critical market trends and core deployment strategies.",
        "Formulated 5+ executive consulting deliverables and strategic market reports by analyzing dense enterprise datasets.",
        "Engineered analytical frameworks to evaluate AI-driven software, optimizing client pitching cycles.",
      ],
      skills: ["AI Strategy", "Enterprise Analytics", "Market Research", "Consulting Deliverables"],
    },
    {
      role: "Web Developer",
      organization: "WebWiz, NIT Rourkela",
      location: "Rourkela, Odisha",
      period: "Oct 2025 – Present",
      type: "Club Technical Team",
      badgeColor: "bg-emerald-950/70 text-emerald-300 border-emerald-500/30",
      description: "Building responsive frontends and streamlining repository pipelines for NIT Rourkela student applications.",
      points: [
        "Built 8+ responsive user-interface modules across student portal applications using React.js and JavaScript.",
        "Managed repositories using a Git-flow pipeline to streamline deployment cycles and eliminate merge overhead.",
        "Executed structural code audits and frontend optimization sprints that improved loading speeds by 15%.",
      ],
      skills: ["React.js", "JavaScript (ES6+)", "Git-flow", "Frontend Optimization", "UI Engineering"],
    },
    {
      role: "Developer",
      organization: "Google Developer Student Clubs (GDSC)",
      location: "NIT Rourkela",
      period: "2025 – Present",
      type: "Technical Community",
      badgeColor: "bg-amber-950/70 text-amber-300 border-amber-500/30",
      description: "Architecting interactive applications and leading hands-on technical sessions for campus developers.",
      points: [
        "Architected interactive web applications and structured software labs for a community of 150+ campus developers.",
        "Sharpened component layout workflows by resolving key architectural scale constraints within active design sprints.",
      ],
      skills: ["Web Applications", "Community Mentorship", "Software Architecture"],
    },
    {
      role: "Designer & Junior Analyst",
      organization: "Analytics and Consulting Club (ACC)",
      location: "NIT Rourkela",
      period: "2025 – Present",
      type: "Club Core Member",
      badgeColor: "bg-purple-950/70 text-purple-300 border-purple-500/30",
      description: "Business case analysis and brand design for club advisory initiatives and case competitions.",
      points: [
        "Deconstructed 6 corporate business case studies to draft analytical models used directly in club advisory solutions.",
        "Created 25+ brand-aligned presentation assets and UI mockups in Figma, elevating user engagement scores by 20%.",
      ],
      skills: ["Figma UI Design", "Business Case Analysis", "Analytical Modeling"],
    },
    {
      role: "Fellow / Participant",
      organization: "McKinsey Forward Program",
      location: "McKinsey & Company",
      period: "Credential: Credly Badge",
      type: "Leadership Program",
      badgeColor: "bg-cyan-950/70 text-cyan-300 border-cyan-500/30",
      description: "Agile problem solving, structured communication, and data interpretation methodology.",
      points: [
        "Completed an intensive curriculum focused on agile problem-solving methodology, data interpretation, and team workflows.",
        "Earned verified digital credential badge from McKinsey & Company.",
      ],
      skills: ["Agile Methodology", "Problem Solving", "Structured Communication"],
    },
  ];

  const skillsData = [
    {
      id: "web-dev",
      number: "01",
      category: "Web Dev",
      proficiency: 92,
      status: "Core Expertise",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "My core focus. I build fast, interactive single-page applications, design responsive layouts, and connect them with REST APIs.",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Express", "HTML5 & CSS3", "REST APIs", "Vite", "Git & GitHub"],
    },
    {
      id: "data-analytics",
      number: "02",
      category: "Data & Analytics",
      proficiency: 86,
      status: "Proficient",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Working with datasets, finding key patterns, and creating clear Power BI and Excel dashboards that make numbers easy to digest.",
      skills: ["Power BI", "Microsoft Excel", "Data Analysis", "Market Research", "Business Insights", "Data Modeling"],
    },
    {
      id: "ui-ux",
      number: "03",
      category: "UI/UX",
      proficiency: 90,
      status: "Advanced",
      icon: (
        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      description: "Before jumping into code, I map out user journeys, wireframes, and design components in Figma so the finished product feels natural.",
      skills: ["Figma", "Canva", "Wireframing", "Interactive Prototyping", "Design Systems", "Mobile Responsive UI"],
    },
  ];

  const projectsData = [
    {
      title: "LEO WATCH",
      subtitle: "Satellite & Space Debris Tracker • 3D Orbital Console",
      badge: "🏆 Shortlisted — SIH 2026 Internal Round",
      badgeColor: "bg-indigo-950/70 text-indigo-300 border-indigo-500/30",
      image: leowatch,
      team: "Team Delta (Manas Sahu, Sanskruti Borade, Tanveer Tripathy, Namrata Patange, Jatin Patra)",
      role: "Frontend (3D Orbit View & HUD) & Backend Support",
      description:
        "Built for Smart India Hackathon 2026 to track satellites and orbital debris in real time. My main focus was developing the interactive frontend console — integrating the CesiumJS 3D globe visualization, rendering orbital paths via SGP4 propagation, and surfacing close-encounter conjunction risk alerts.",
      highlights: [
        "Interactive 3D Earth globe with live satellite & debris orbit paths",
        "Conjunction risk screening calculating miss distance & collision odds",
        "Telemetry HUD showing altitude, orbital velocity & AI-assisted summaries",
      ],
      tags: ["React", "CesiumJS", "Tailwind CSS", "SGP4 Propagation", "Orbital Telemetry"],
      demoUrl: "https://leowatch.vercel.app/orbit-view",
      demoLabel: "Live 3D Console",
      githubUrl: "https://github.com/sanskrutiiii23/space-debris",
    },
    {
      title: "LifeQuest",
      subtitle: "RPG Productivity Web App • 24-Hour Hackathon",
      badge: "⚔️ Tech Zephyr 4.0 • Built in 24 Hours",
      badgeColor: "bg-purple-950/70 text-purple-300 border-purple-500/30",
      image: lifequest,
      team: "Team Delta-X (Sanskruti Borade, Arnab Naskar, Namrata Patange)",
      role: "Frontend & Game UI Development",
      description:
        "Built and deployed within 24 hours during the Tech Zephyr 4.0 Web Hackathon (IIT Bhubaneswar). We wanted to make daily productivity addictive by turning to-do lists into RPG quests. I designed and built the frontend: quest tracking cards, character leveling, XP/Gold reward states, and streak multipliers.",
      highlights: [
        "Gamified quest tracker with XP, gold rewards, and difficulty tiers",
        "Hero character screen with level progression, HP/MP, and attributes",
        "Rapidly designed, coded, and deployed to Vercel in a 24-hour sprint",
      ],
      tags: ["React", "Tailwind CSS", "Game UI", "State Management"],
      demoUrl: "https://lifequest-rpg-deltax.vercel.app/app",
      demoLabel: "Live Demo",
      githubUrl: "https://lnkd.in/d3YayPTc",
    },
    {
      title: "Chef Groq",
      subtitle: "Instant Recipe Generator from Leftover Ingredients",
      badge: "🍳 Solo Project",
      badgeColor: "bg-emerald-950/70 text-emerald-300 border-emerald-500/30",
      image: chef,
      team: "Personal Project",
      role: "Design & Development",
      description:
        "Built to solve a common dilemma: having random leftover ingredients in the pantry and not knowing what to cook. Users enter whatever ingredients they have on hand, and the app instantly streams back a tailored recipe with prep time and step-by-step instructions using Groq's high-speed Llama-3 API.",
      highlights: [
        "Streams customized recipes in seconds based on available ingredients",
        "Direct integration with Groq Cloud API for near-instant inference",
        "Clean, responsive interface built with React and Tailwind CSS",
      ],
      tags: ["React", "Groq API", "Tailwind CSS", "Llama 3"],
      demoUrl: "https://chef-groq-seven.vercel.app/",
      demoLabel: "Live Demo",
      githubUrl: "https://github.com/sanskrutiiii23/chef_groq",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08090d] text-[#f1f5f9] bg-grid-pattern selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
      {/* Interactive Cosmic Starfield Background */}
      <StarfieldCanvas />

      {/* Top Ambient Linear Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-purple-500/5 to-transparent pointer-events-none -z-10 blur-2xl" />

      {/* Floating Island Navigation Header */}
      <header className="sticky top-5 z-50 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="bg-[#0e111a]/85 border border-white/10 backdrop-blur-xl rounded-full px-5 sm:px-6 h-14 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={sbLogo}
              alt="Sanskruti Borade Logo"
              className="w-7 h-7 rounded-full border border-white/20 p-0.5 object-cover"
            />
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-slate-300 transition-colors">
              Sanskruti<span className="text-indigo-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Links / CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/Sanskruti_Borade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume PDF"
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/sanskrutiiii23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sanskruti-borade-39291536b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 px-4 py-1.5 rounded-full transition-colors shadow-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-[#0e111a]/95 border border-white/10 rounded-2xl space-y-2 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Sanskruti_Borade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-indigo-300 hover:text-white hover:bg-indigo-500/10 transition-colors"
            >
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View Resume (PDF)</span>
            </a>
            <div className="pt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 py-2.5 rounded-full transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="pt-16 md:pt-24 pb-16 lg:pb-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-semibold">
                Developer • UI/UX 
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm Sanskruti Borade
              </h1>
            </div>

            {/* University Tag */}
            <div className="inline-flex items-center gap-2 text-slate-300 text-xs font-medium bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <span>📍</span>
              <span>National Institute of Technology (NIT), Rourkela</span>
            </div>

            {/* Biography */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              I’m a developer and designer specializing in building responsive web applications with React, Tailwind CSS, Node.js, and Express. I enjoy combining clean, thoughtful interface design with modern web architectures, data analytics, and hackathon-driven problem solving to turn ideas into functional, visually engaging, and impactful products.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="bg-white text-slate-950 font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-slate-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="/Sanskruti_Borade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 hover:border-indigo-400 text-indigo-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume / CV</span>
                <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="#contact"
                className="bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 text-white font-medium text-sm px-6 py-3.5 rounded-full active:scale-[0.98] transition-all"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 mr-1 font-medium">Connect:</span>
              <a
                href="https://github.com/sanskrutiiii23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all shadow-sm"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sanskruti-borade-39291536b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/sanskruti.__.23/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Picture Frame (Full Natural Color, Modern Linear Luminous Bevel) */}
          <div className="relative flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-indigo-500/10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative p-2 rounded-2xl bg-[#0e111a] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
                <img
                  src={myPic}
                  alt="Sanskruti Borade"
                  className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Resume Section */}
        <section id="experience" className="py-24 border-t border-white/[0.08] relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Career & Roles
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Experience & Leadership
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Internships, technical campus organizations, and leadership initiatives where I've delivered measurable engineering and strategic impact.
              </p>
            </div>

            {/* Resume Action Hub */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Sanskruti_Borade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Full Resume</span>
              </a>

              <a
                href="/Sanskruti_Borade_Resume.pdf"
                download="Sanskruti_Borade_Resume.pdf"
                className="bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-white font-medium text-xs tracking-wider uppercase px-5 py-3 rounded-full transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Timeline & Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Experience Cards - Column 1 & 2 */}
            <div className="lg:col-span-2 space-y-4">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="linear-card rounded-2xl p-6 sm:p-7 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-slate-300 mt-0.5">
                        {exp.organization} • <span className="text-slate-400 font-normal">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-indigo-400 font-medium sm:text-right">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-normal mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="text-indigo-400 font-bold mt-0.5">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.04]">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-400 group-hover:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Resume & Education Sidebar Card - Column 3 */}
            <div className="space-y-6">
              {/* Resume Document Card */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-[#0e111a] to-[#0a0c12] border border-indigo-500/25 backdrop-blur-xl shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified PDF
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-white">Sanskruti Borade — Resume</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Curriculum vitae covering technical experience, software proficiencies, academic background at NIT Rourkela, and project achievements.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-1.5 font-mono text-slate-400">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="text-slate-200">PDF Document</span>
                  </div>
                  <div className="flex justify-between">
                    <span>File:</span>
                    <span className="text-slate-200 truncate max-w-[150px]">Sanskruti_Borade_Resume.pdf</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-emerald-400">Latest Version</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="/Sanskruti_Borade_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-xs font-semibold py-3 px-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Open in New Tab</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="/Sanskruti_Borade_Resume.pdf"
                    download="Sanskruti_Borade_Resume.pdf"
                    className="w-full text-center text-xs font-medium py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-slate-200 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Direct Download</span>
                  </a>
                </div>
              </div>

              {/* Education Card */}
              <div className="linear-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                  <span>🎓</span>
                  <span>Academic Background</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    National Institute of Technology (NIT), Rourkela
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    Bachelor of Technology (B.Tech)
                  </p>
                  <p className="text-xs text-slate-400">
                    Food Processing Engineering
                  </p>
                  <div className="text-[11px] font-mono text-indigo-400 pt-1">
                    Aug. 2025 – Aug. 2029 • Rourkela, Odisha
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-white/[0.08] relative">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Toolbox
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              What I Work With
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Technologies and tools I reach for regularly across web development, analytics, and design.
            </p>

            {/* Interactive Domain Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: "all", label: "All Disciplines" },
                { id: "web-dev", label: "Web Dev" },
                { id: "data-analytics", label: "Data & Analytics" },
                { id: "ui-ux", label: "UI/UX" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSkillCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedSkillCategory === tab.id
                      ? "bg-indigo-500 text-white shadow-[0_2px_12px_rgba(99,102,241,0.4)]"
                      : "bg-white/[0.04] text-slate-400 border border-white/10 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData
              .filter(
                (skillGroup) =>
                  selectedSkillCategory === "all" ||
                  skillGroup.id === selectedSkillCategory
              )
              .map((skillGroup, index) => (
                <div
                  key={index}
                  className="linear-card rounded-2xl p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all">
                        {skillGroup.icon}
                      </div>
                      <span className="font-mono text-xs font-medium text-slate-500">[{skillGroup.number}]</span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                        {skillGroup.category}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-normal">
                        {skillGroup.description}
                      </p>
                    </div>

                    {/* Visual Skill Proficiency Progress Meter */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400 font-medium">Proficiency</span>
                        <span className="font-mono text-indigo-400 font-semibold">
                          {skillGroup.proficiency}% • {skillGroup.status}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 transition-all duration-700"
                          style={{ width: `${skillGroup.proficiency}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-150"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-24 border-t border-white/[0.08] relative">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Selected builds from hackathons, team sprints, and side experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="linear-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Browser Mockup Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b10] border-b border-white/[0.08]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="text-[10px] tracking-wider font-mono text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/[0.08]">
                      {project.title.toLowerCase().replace(/\s+/g, '')}.app
                    </div>
                    <div className="w-6 flex justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    </div>
                  </div>

                  {/* Project Image Banner */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-transparent opacity-90" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-md shadow-lg ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Role / Team Highlight */}
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-1.5">
                      <div className="text-slate-300 font-medium">
                        ⚡ My Contribution: <span className="text-white font-semibold">{project.role}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] leading-relaxed">
                        {project.team}
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Highlights list */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-indigo-400 font-bold mt-0.5">✦</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full text-center text-xs font-semibold py-2.5 px-4 rounded-xl bg-indigo-500/15 border border-indigo-500/30 hover:bg-indigo-500/25 hover:border-indigo-500/50 text-indigo-300 hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Interactive Console Preview</span>
                  </button>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-semibold py-2.5 px-3 rounded-xl bg-white text-slate-950 hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>{project.demoLabel}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium py-2.5 px-3.5 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/20 text-white transition-all flex items-center gap-1.5"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA Banner */}
          <div className="mt-14 text-center">
            <a
              href="https://github.com/sanskrutiiii23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <span>Explore all code repositories and experiments on GitHub</span>
              <span className="text-indigo-400 font-bold">→</span>
            </a>
          </div>
        </section>

        {/* UI/UX & Figma Design Showcase */}
        <section id="designs" className="py-24 border-t border-white/[0.08] relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-950/30 via-[#0e111a] to-[#0a0c12] border border-indigo-500/20 backdrop-blur-xl shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3.5 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-indigo-400">
                      UI/UX & Prototyping
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Figma Design Portfolio
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                    Before writing code, I plan user journeys, wireframes, and responsive component systems in Figma. Take a look at some of the prototypes and designs I've worked on.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300">User Flows</span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300">Component Libraries</span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-slate-300">Interactive Mockups</span>
                  </div>
                </div>

                <a
                  href="https://www.figma.com/design/Ah5XNbQf0UnBO98bfgnhKM/All?node-id=0-1&t=G1fqPeZXilr1v0xX-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-6 py-3.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2"
                >
                  <span>Open Figma Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Connect Section */}
        <section id="contact" className="py-24 border-t border-white/[0.08] relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Let's Build Something Together
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
                I'm actively looking for internships and collaborative projects. Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:sanskrutiborade07@gmail.com"
                className="bg-white hover:bg-slate-200 text-slate-950 font-semibold px-8 py-4 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Me Directly</span>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 text-white font-medium px-7 py-4 rounded-full transition-all flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copiedEmail ? "Copied to Clipboard! ✓" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#07080b] py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Sanskruti Borade</span>
            <span>•</span>
            <span>National Institute of Technology, Rourkela</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/Sanskruti_Borade_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-indigo-300">Resume (PDF)</a>
            <a href="https://github.com/sanskrutiiii23" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sanskruti-borade-39291536b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>

          <div>
            © {new Date().getFullYear()} • Built with React & Tailwind CSS
          </div>
        </div>
      </footer>

      {/* Interactive Project Console Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}

export default App;