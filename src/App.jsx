import { useState } from "react";
import "./App.css";
import myPic from "./assets/my_pic.jpeg";
import chef from "./assets/chef.jpeg";
import lifequest from "./assets/lifequest.png";
import leowatch from "./assets/leowatch.png";
import sbLogo from "./assets/SB LOGO.webp";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sanskrutiborade07@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Designs", href: "#designs" },
    { name: "Contact", href: "#contact" },
  ];

  const skillsData = [
    {
      category: "Web Dev",
      accentColor: "from-pink-500 via-rose-500 to-purple-600",
      iconBg: "bg-pink-500/10 border-pink-500/25 text-pink-400",
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      description: "My core focus. I build fast, interactive single-page applications, design responsive layouts, and connect them with REST APIs.",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Express", "HTML5 & CSS3", "REST APIs", "Vite", "Git & GitHub"],
    },
    {
      category: "Data & Analytics",
      accentColor: "from-purple-500 via-indigo-500 to-pink-500",
      iconBg: "bg-purple-500/10 border-purple-500/25 text-purple-400",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Working with datasets, finding key patterns, and creating clear Power BI and Excel dashboards that make numbers easy to digest.",
      skills: ["Power BI", "Microsoft Excel", "Data Analysis", "Market Research", "Business Insights", "Data Modeling"],
    },
    {
      category: "UI/UX",
      accentColor: "from-cyan-500 via-pink-500 to-purple-500",
      iconBg: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400",
      icon: (
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
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
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
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
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
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
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
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
    <div className="min-h-screen text-white bg-radial from-[#1e021c] via-[#08010a] to-[#020004] bg-grid-cyber selection:bg-pink-500 selection:text-white relative">
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[550px] h-[550px] rounded-full bg-pink-600/15 blur-[140px] animate-pulse-glow" />
        <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-700/15 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] animate-pulse-glow" />
      </div>

      {/* Floating Pill Navigation Header */}
      <header className="sticky top-4 z-50 px-4 sm:px-6 max-w-5xl mx-auto transition-all duration-300">
        <div className="backdrop-blur-2xl bg-[#0e0212]/85 border border-pink-500/25 rounded-full px-5 sm:px-7 h-16 flex items-center justify-between shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full avatar-halo animate-spin-slow opacity-75 blur-xs group-hover:opacity-100 transition duration-300" />
              <img
                src={sbLogo}
                alt="Sanskruti Borade Logo"
                className="relative w-9 h-9 rounded-full border border-pink-400/80 p-0.5 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="font-bold text-lg tracking-wide group-hover:text-pink-300 transition-colors">
              Sanskruti<span className="text-pink-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-gray-300 hover:text-pink-400 transition-colors duration-200 tracking-wider uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-400 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Links / CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/sanskrutiiii23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-gray-300 hover:text-pink-400 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sanskruti-borade-39291536b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-gray-300 hover:text-pink-400 hover:bg-white/10 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
              </svg>
            </a>
            <a
              href="#contact"
              className="relative group overflow-hidden text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 rounded-full hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden mt-3 px-5 py-5 bg-[#0e0212]/95 border border-pink-500/20 backdrop-blur-2xl rounded-3xl space-y-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-medium text-gray-200 hover:text-pink-400 hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex gap-3 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-xl hover:opacity-90 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="pt-12 md:pt-20 pb-16 lg:pb-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(236,72,153,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Open to Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-pink-300/80 font-semibold">
                Developer • UI/UX 
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(236,72,153,0.25)]">
                  Sanskruti Borade
                </span>
              </h1>
            </div>

            {/* University Tag */}
            <div className="inline-flex items-center gap-2 text-gray-300 text-sm glass-pill px-4 py-2 rounded-xl border border-white/10 hover:border-pink-500/30 transition-colors">
              <span className="text-pink-400">📍</span>
              <span>National Institute of Technology (NIT), Rourkela</span>
            </div>

            {/* Biography */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              I’m a developer and designer specializing in building responsive web applications with React, Tailwind CSS, Node.js, and Express. I enjoy combining clean, thoughtful interface design with modern web architectures, data analytics, and hackathon-driven problem solving to turn ideas into functional, visually engaging, and impactful products.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="relative group overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.35)] hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="glass-card hover:bg-white/10 border border-white/15 hover:border-pink-500/40 text-white font-medium px-6 py-3.5 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <span className="text-xs uppercase tracking-wider text-gray-400 mr-2">Connect:</span>
              <a
                href="https://github.com/sanskrutiiii23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 rounded-xl text-gray-300 hover:text-pink-300 transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/sanskruti-borade-39291536b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 rounded-xl text-gray-300 hover:text-pink-300 transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/sanskruti.__.23/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 rounded-xl text-gray-300 hover:text-pink-300 transition-all duration-300 hover:-translate-y-1 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Picture with Ambient Glowing Halo */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulsating color glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-pink-600 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-35 animate-pulse-glow" />
            
            {/* Rotating multi-color neon halo ring */}
            <div className="absolute -inset-1.5 rounded-full avatar-halo animate-spin-slow opacity-80 blur-xs" />
            
            {/* Inner frame */}
            <div className="relative p-2 rounded-full bg-[#0e0212] ring-1 ring-white/20 shadow-2xl">
              <img
                src={myPic}
                alt="Sanskruti Borade"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-white/5 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <p className="text-pink-400 font-semibold tracking-[0.25em] text-xs uppercase">Toolbox</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">What I Work With</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Technologies and tools I reach for regularly across web development, analytics, and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((skillGroup, index) => (
              <div
                key={index}
                className="relative rounded-3xl glass-card overflow-hidden p-8 hover:-translate-y-2 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Top Accent Strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skillGroup.accentColor}`} />
                
                <div className="space-y-4 pt-1">
                  <div className={`w-12 h-12 rounded-2xl ${skillGroup.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {skillGroup.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-pink-500/20 text-gray-300 hover:text-pink-200 border border-white/10 hover:border-pink-500/40 transition-all duration-200"
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
        <section id="projects" className="py-20 border-t border-white/5 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <p className="text-pink-400 font-semibold tracking-[0.25em] text-xs uppercase">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Featured Projects</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Selected builds from hackathons, team sprints, and side experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden glass-card hover:border-pink-500/40 shadow-2xl hover:shadow-[0_20px_45px_rgba(236,72,153,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Browser Mockup Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#140417]/90 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                    </div>
                    <div className="text-[10px] tracking-wider uppercase font-mono text-gray-400 truncate max-w-[170px] bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                      {project.title.toLowerCase().replace(/\s+/g, '')}.app
                    </div>
                    <div className="w-8 flex justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 opacity-70 group-hover:animate-ping" />
                    </div>
                  </div>

                  {/* Project Image Banner */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-black/60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100213] via-[#100213]/40 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md shadow-lg ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-pink-300/80 font-medium mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Role / Team Highlight */}
                    <div className="p-3.5 rounded-2xl bg-pink-500/[0.08] border border-pink-500/20 text-xs space-y-1 backdrop-blur-xs">
                      <div className="font-semibold text-pink-300">
                        ⚡ My Contribution: <span className="text-white font-medium">{project.role}</span>
                      </div>
                      <div className="text-gray-400 text-[11px] leading-tight">
                        {project.team}
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Highlights list */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="text-pink-400 font-bold text-xs mt-0.5">▹</span>
                          <span className="leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-semibold py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:scale-95 text-white transition-all duration-200 shadow-md shadow-pink-500/25 hover:shadow-pink-500/40 flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>{project.demoLabel}</span>
                    <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold py-3 px-4 rounded-xl glass-card hover:bg-white/10 border border-white/15 hover:border-pink-500/40 active:scale-95 text-gray-200 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  )}
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
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-pill hover:bg-white/10 border border-white/10 hover:border-pink-500/40 text-sm font-medium text-gray-300 hover:text-pink-300 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Explore all code repositories and experiments on GitHub</span>
              <span className="text-pink-400">→</span>
            </a>
          </div>
        </section>

        {/* UI/UX & Figma Design Showcase */}
        <section id="designs" className="py-20 border-t border-white/5 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/40 via-pink-950/30 to-black/60 backdrop-blur-2xl border border-pink-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)] overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-3.5 text-center md:text-left">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-pink-400">
                    UI/UX & Prototyping
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Figma Design Portfolio
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                    Before writing code, I plan user journeys, wireframes, and responsive component systems in Figma. Take a look at some of the prototypes and designs I've worked on.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                    <span className="text-xs px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-gray-200">User Flows</span>
                    <span className="text-xs px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-gray-200">Component Libraries</span>
                    <span className="text-xs px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-gray-200">Interactive Mockups</span>
                  </div>
                </div>

                <a
                  href="https://www.figma.com/design/Ah5XNbQf0UnBO98bfgnhKM/All?node-id=0-1&t=G1fqPeZXilr1v0xX-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
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
        <section id="contact" className="py-24 border-t border-white/5 relative">
          {/* Centered Ambient Neon Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-3">
              <p className="text-pink-400 font-semibold tracking-[0.25em] text-xs uppercase">Get in Touch</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Let's Build Something Together
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto font-normal">
                I'm actively looking for internships and collaborative projects. Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:sanskrutiborade07@gmail.com"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:shadow-[0_0_40px_rgba(236,72,153,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Me Directly</span>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="glass-card hover:bg-white/10 border border-white/15 hover:border-pink-500/40 text-white font-medium px-7 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-md"
              >
                <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copiedEmail ? "Copied to Clipboard! ✓" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Sanskruti Borade</span>
            <span>•</span>
            <span>National Institute of Technology, Rourkela</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-pink-300 transition-colors">Home</a>
            <a href="#projects" className="hover:text-pink-300 transition-colors">Projects</a>
            <a href="https://github.com/sanskrutiiii23" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/sanskruti-borade-39291536b/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">LinkedIn</a>
          </div>

          <div>
            © {new Date().getFullYear()} • Built with React & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;