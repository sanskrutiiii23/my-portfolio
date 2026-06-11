import React, { useState } from "react";
import './App.css';
import myPic from './assets/my_pic.jpeg';
import quizImg from './assets/quiz.jpeg';
import gitImg from './assets/git.jpeg';
import netflixImg from './assets/netflix.jpeg';
function Main() {
  return (
    <div className="min-h-screen text-white bg-linear-to-br from-[#400035] via-[#000000] to-[#400035] overflow-hidden scroll-smooth">
      <nav className="flex justify-center py-8">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-medium">
          <li><a className="transition-all duration-300 hover:text-pink-400 hover:-translate-y-0.5 inline-block border-b-2 border-transparent hover:border-pink-400 pb-1" href="#home">HOME</a></li>
          <li><a className="transition-all duration-300 hover:text-pink-400 hover:-translate-y-0.5 inline-block border-b-2 border-transparent hover:border-pink-400 pb-1" href="#skills">SKILLS</a></li>
          <li><a className="transition-all duration-300 hover:text-pink-400 hover:-translate-y-0.5 inline-block border-b-2 border-transparent hover:border-pink-400 pb-1" href="#projects">PROJECTS</a></li>
          <li><a className="transition-all duration-300 hover:text-pink-400 hover:-translate-y-0.5 inline-block border-b-2 border-transparent hover:border-pink-400 pb-1" href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <article id="home" className="flex flex-col-reverse lg:flex-row justify-between items-center mx-6 lg:mx-10 mt-10 lg:mt-16 gap-12">
      <div>
        <h4 className="text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.25em] text-pink-300">Frontend Developer • Data Analyst • UI/UX Designer</h4>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold py-7">
          Hi, I'm <span className="bg-linear-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Sanskruti Borade</span>
        </h2>
        <div className="flex items-center gap-2 text-gray-300 mb-4">
          <span>📍</span>
          <span className="text-sm md:text-base">Student at National Institute of Technology, Rourkela</span>
        </div>
          <p className="text-lg md:text-xl max-w-3xl text-gray-300 leading-8">I build responsive web applications with React and JavaScript while exploring analytics, consulting, and product design. My focus is creating digital experiences that combine clean design, performance, and business impact.</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 pt-8 text-center">
  
</div>
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
        <a href="https://www.instagram.com/sanskruti.__.23/">
        <button className="bg-pink-400 p-3 rounded-3xl hover:cursor-pointer hover:scale-105 hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/40">Instagram</button></a>
        <a href="https://www.linkedin.com/in/sanskruti-borade-39291536b/">
        <button className="bg-pink-400 p-3 rounded-3xl hover:cursor-pointer hover:scale-105 hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/40">LinkedIn</button></a>
        <a href="https://github.com/sanskrutiiii23">
        <button className="bg-pink-400 p-3 rounded-3xl hover:cursor-pointer hover:scale-105 hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/40">GitHub</button></a>
      </div>
      </div>
      <div className="relative flex items-center justify-center">
  <div className="absolute w-72 h-72 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 blur-3xl opacity-30"></div>

  <div className="absolute w-52 h-52 rounded-full bg-pink-500 blur-2xl opacity-30"></div>

  <img
    src={myPic}
    alt="Sanskruti"
    className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full"
  />
</div>
      </article>
    <div className="max-w-6xl mx-auto px-4 md:px-6">
      <div id="skills" className="text-center mt-23 mb-10"><p className="text-pink-400 uppercase tracking-[0.3em] text-sm">What I Do</p><h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mt-3">Skills & Expertise</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="shadow-[#380b43] shadow-lg m-5 rounded-3xl p-6 border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-1 transition-all duration-300">
      <h3 className="mb-4 text-xl">FRONTEND DEVELOPMENT</h3>
      <p className="mb-3">HTML • CSS • JavaScript • React</p>
      <p className="italic p-3">Building responsive and user-friendly web applications with modern frontend technologies.</p>
      </div>

      <div className="shadow-[#380b43] shadow-lg m-5 rounded-3xl p-6 border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-1 transition-all duration-300" >
      <h3 className="mb-4 text-xl">ANALYTICS & CONSULTING</h3>
      <p className="mb-4">Excel • Power BI • Data Analysis • Market Research • Business Research</p>
      <p className="italic">Transforming data into actionable insights through analytics and research.</p>
      </div>

      <div className="shadow-[#380b43] shadow-lg m-5 rounded-3xl p-4 border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-1 transition-all duration-300">
      <h3 className="mb-4 text-xl">UI/UX DESIGN</h3>
      <p className="mb-3">Figma • Canva</p>
      <p className="italic">Designing intuitive and visually engaging digital experiences.</p>
      </div>
      </div>

      <div id="projects" className="text-center mt-24 mb-10"><p className="text-pink-400 uppercase tracking-[0.3em] text-sm">Development Portfolio</p><h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mt-3">Featured Projects</h1></div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 px-2 sm:px-4 lg:px-8 max-w-7xl mx-auto items-center">
        <div className="m-5 rounded-3xl overflow-hidden w-full max-w-sm p-4 space-y-3 shadow-[#380b43] shadow-lg justify-center border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl" >
          <img src={quizImg} className="w-full h-52 object-cover rounded-xl" />
          <a  className="text-xl md:text-2xl py-2 font-semibold block">Quiz APP</a>
          <a href="https://quiz-app-2-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-400 hover:text-pink-300 underline">Live Demo ↗</a>
          <h3 className="m-2">Tailwind CSS • Javascript</h3> 
          <p className="italic">React quiz application featuring score tracking, state management, and a responsive user interface.</p>
        </div>
        <div className="m-5 rounded-3xl overflow-hidden w-full max-w-sm p-4 space-y-3 shadow-[#380b43] shadow-lg border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl" >
          <img src={gitImg} className="w-full h-52 object-cover rounded-xl" />
          <a  className="text-xl md:text-2xl py-2 font-semibold block">GitHub Profile Viewer</a>
          <a href="https://github-task2-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-400 hover:text-pink-300 underline">Live Demo ↗</a>
          <h3 className="m-2">Tailwind CSS • Javascript • GitHub API</h3> 
          <p className="italic">GitHub API-powered application that fetches and displays real-time profile information and repositories.</p>
        </div>
        <div className="m-5 rounded-3xl overflow-hidden w-full max-w-sm p-4 space-y-3 shadow-[#380b43] shadow-lg border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl" >
          <img src={netflixImg} className="w-full h-52 object-cover rounded-xl" />
          <a className="text-xl md:text-2xl py-2 font-semibold block">Netflix Clone</a>
          <a href="https://netflixcone-amber.vercel.app/netflix/" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-400 hover:text-pink-300 underline">Live Demo ↗</a>
          <h3 className="m-2">HTML • CSS</h3> 
          <p className="italic">Responsive Netflix-inspired landing page built using HTML and CSS with a focus on modern UI design.</p>
        </div>
      </div>

      <div className="flex justify-center px-2 sm:px-4 mt-6">
        <a
          href="https://www.figma.com/design/Ah5XNbQf0UnBO98bfgnhKM/All?node-id=0-1&t=G1fqPeZXilr1v0xX-1"
          
          className="w-full max-w-md"
        >
          <div className="rounded-3xl p-6 text-center shadow-[#380b43] shadow-lg border border-transparent hover:border-purple-800 hover:bg-gray-700/40 hover:-translate-y-2 transition-all duration-300 hover:shadow-pink-500/20 hover:shadow-2xl">
            <p className="text-pink-400 uppercase tracking-[0.2em] text-sm mb-2">Design Portfolio</p>
            <h3 className="text-2xl font-semibold mb-3">Figma Projects</h3>
            <p className="text-gray-300 italic">Explore all of my designs and additional project work in one place.</p>
          </div>
        </a>
      </div>

      <div className="flex flex-col items-center gap-3 py-6">
        <div className="font-bold text-xl rounded-2xl p-2">
          Explore more projects on <a className="text-pink-400 underline" href="https://github.com/sanskrutiiii23" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div id="contact" className="flex flex-col items-center justify-center mt-20 md:mt-28 gap-6 text-center px-4">
        <p className="text-pink-400 uppercase tracking-[0.3em] text-sm">Contact</p><h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Let's Connect</h1>
        <a className="bg-pink-400 p-4 px-8 rounded-full hover:cursor-pointer hover:scale-105 hover:bg-pink-500 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/40" href="mailto:sanskrutiborade07@gmail.com">
          Email me
        </a>
      </div>

      <div className="mt-24 border-t border-white/10 pt-8 flex justify-center text-[#ffffffa4]">© Sanskruti Borade • Built with React & Tailwind CSS</div>
      <br />
    </div>
  </div>
  );

}

export default Main;