'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ExternalLink, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { 
  SiFlutter, 
  SiDart, 
  SiPython, 
  SiGit, 
  SiHtml5, 
  SiFigma, 
  SiFirebase, 
  SiArduino 
} from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';


export default function Home() {
  const profile = {
    name: "JANA ABDELWAHED",
    avatar: "https://avatars.githubusercontent.com/u/128866655?v=4",
    title: "I'm a Flutter Developer",
    about: "Passionate Computer Science student specializing in Flutter mobile app development and AI software solutions. I build clean, efficient, and scalable applications. I have a strong interest in mobile application development using Flutter, and artificial intelligence, with a focus on creating intelligent, real-world solutions. I enjoy working on projects where I can solve complex problems and build software and applications that are not only functional, but also innovative and impactful.",
    education: [
      {
        title: "Computer Science Student",
        subtitle: "Faculty of Computers & Information Science, Ain Shams University"
      },
    ],
    certifications: [
      { name: "Flutter Training — ITI", link: "https://www.linkedin.com/posts/jana-abdelwahed_iti-flutter-mobileappdevelopment-activity-7503451022699425792-GpwV" },
      { name: "Applied Ai Training", link: "https://drive.google.com/file/d/1hsWpQumc8ydKhR3nHAvAgkDkkiDzyRd1/view" },
      { name: "Beuond Earth Hackathon (Embedded Systems)", link: "https://drive.google.com/file/d/1u3uss93uP98c2T83_txqWrwHP1TCD7II/view" },
      { name: "Public Relations Membership", link: "https://drive.google.com/file/d/1xXoTLNPqyRXtfAVArDx-mTzCqywQ1Tqt/view" },
    ],
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Arduino', icon: SiArduino, color: '#00979D' },
    ],
    projects: [
      {
        name: 'Ecommerce App',
        tools: ['Flutter', 'Dart'],
        image: 'https://i.pinimg.com/736x/c3/af/58/c3af58d02b715aa21e6fef03765b1729.jpg',
        desc: 'A full-featured cross-platform e-commerce application built with Flutter.',
        github: 'https://github.com/Jana-Abdelwahed/Ecommerce'
      },
      {
        name: 'Evently App',
        tools: ['Flutter', 'Dart', 'Firebase'],
        image: 'https://i.pinimg.com/736x/4d/78/87/4d7887ce79dda7a184e1ce5fed5d6fd9.jpg',
        desc: 'Cross-platform app with real-time Firestore sync and multi-language localization.',
        github: 'https://github.com/Jana-Abdelwahed/Evently'
      },
      {
        name: 'Movies Explorer',
        tools: ['Flutter', 'Clean Arch'],
        image: 'https://i.pinimg.com/736x/95/4a/52/954a5288eadcdc4e52e591ed45fdbd1e.jpg',
        desc: 'Clean Architecture mobile application with real-time data sync.',
        github: 'https://github.com/Jana-Abdelwahed/Arabic_Movies_Explorer'
      },
      {
        name: 'Solar System 3D',
        tools: ['Flutter', '3D Models'],
        image: 'https://i.pinimg.com/1200x/45/39/82/453982f6ad6a1a8234cf45a1e9ccd40e.jpg',
        desc: 'Interactive 3D celestial bodies explorer with detailed datasets.',
        github: 'https://github.com/Jana-Abdelwahed/Solar_system_app'
      }
    ]
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-[#ff2a85] selection:text-white pb-20" style={{ backgroundColor: '#090a10' }}>
      
      <div className="pt-6 px-4 flex justify-center sticky top-0 z-50">
        <nav className="w-full max-w-4xl bg-gradient-to-r from-[#ff2a85] via-[#e01f6d] to-[#ff2a85] text-white font-semibold rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-[#ff2a85]/30">
          <span className="font-bold text-lg tracking-wider flex items-center gap-1.5">{profile.name}</span>
          <div className="hidden sm:flex space-x-6 text-xs uppercase tracking-wider">
            <a href="#hero" className="hover:text-slate-200 transition">HOME</a>
            <a href="#education" className="hover:text-slate-200 transition">EDUCATION</a>
            <a href="#certifications" className="hover:text-slate-200 transition">CERTIFICATES</a>
            <a href="#skills" className="hover:text-slate-200 transition">SKILLS</a>
            <a href="#projects" className="hover:text-slate-200 transition">PROJECTS</a>
          </div>
          <a href="#contact" className="bg-[#0f111a] text-[#ff2a85] text-xs px-4 py-2 rounded-full font-bold hover:bg-[#1a1d2e] transition">Contact Me</a>
        </nav>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-10 space-y-8">
        
        <motion.section id="hero" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4 mb-4">
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#ff2a85] font-mono">JANA ABDELWAHED</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Hello, This Is <span className="text-[#ff2a85] drop-shadow-[0_0_12px_rgba(255,42,133,0.6)]">JANA ABDELWAHED</span>
            </h1>
            <p className="text-2xl text-[#ff2a85] font-mono font-semibold">{profile.title}</p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">{profile.about}</p>
            <div className="flex gap-4 pt-2">
              <a href="/Jana-Abdelwahed-Resume.pdf" download="Jana-Abdelwahed-Resume.pdf" className="inline-flex items-center gap-2 bg-[#ff2a85] text-white font-bold px-6 py-2.5 rounded-full text-xs hover:bg-[#e01f6d] transition shadow-lg shadow-[#ff2a85]/40">
                <Download size={14} /> Download CV
              </a>
              <a href="https://github.com/Jana-Abdelwahed" target="_blank" rel="noreferrer" aria-label="Visit Jana's GitHub profile" title="GitHub" className="p-2.5 bg-[#141724] border border-[#2a2f45] rounded-full text-[#ff2a85] hover:border-[#ff2a85] transition"><FaGithub size={18} /></a>
              <a href="https://www.linkedin.com/in/jana-abdelwahed" target="_blank" rel="noreferrer" aria-label="Visit Jana's LinkedIn profile" title="LinkedIn" className="p-2.5 bg-[#141724] border border-[#2a2f45] rounded-full text-[#ff2a85] hover:border-[#ff2a85] transition"><FaLinkedin size={18} /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jana0abdelwahed@gmail.com" target="_blank" rel="noreferrer" aria-label="Email Jana" title="Email Jana" className="p-2.5 bg-[#141724] border border-[#2a2f45] rounded-full text-[#ff2a85] hover:border-[#ff2a85] transition"><Mail size={18} /></a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-72 h-80 rounded-2xl border border-[#ff2a85]/40 overflow-hidden shadow-2xl shadow-[#ff2a85]/20 group">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </motion.section>

        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f111a] border border-[#202538] rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xs font-mono tracking-widest text-[#ff2a85] uppercase font-bold">EDUCATION</h2>
          <div className="space-y-6">
            {profile.education.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-2 border-b border-[#202538] last:border-b-0 last:pb-0">
                <div className="p-1.5 bg-[#ff2a85]/20 text-[#ff2a85] rounded-full mt-1">
                  <CheckCircle2 size={18} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="certifications" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f111a] border border-[#202538] rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xs font-mono tracking-widest text-[#ff2a85] uppercase font-bold">CERTIFICATIONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.certifications.map((cert, idx) => (
              <a key={idx} href={cert.link} className="p-4 bg-[#141724] border border-[#202538] hover:border-[#ff2a85] rounded-xl flex justify-between items-center transition group">
                <span className="text-xs font-medium text-slate-200 group-hover:text-[#ff2a85] transition">{cert.name}</span>
                <ExternalLink size={14} className="text-slate-500 group-hover:text-[#ff2a85] transition" />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f111a] border border-[#202538] rounded-3xl p-6 sm:p-8 space-y-6 overflow-hidden">
          <h2 className="text-xs font-mono tracking-widest text-[#ff2a85] uppercase font-bold">SKILLS</h2>
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ 
                repeat: Infinity, 
                ease: 'linear', 
                duration: 25 
              }}
            >
              {[...profile.skills, ...profile.skills].map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={idx}
                    className="flex-shrink-0 w-32 h-36 bg-[#141724] border border-[#202538] hover:border-[#ff2a85]/60 rounded-2xl flex flex-col items-center justify-center space-y-3 transition-all duration-300 hover:-translate-y-1 group cursor-pointer shadow-md"
                  >
                    <Icon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6 pt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-mono tracking-widest text-[#ff2a85] uppercase font-bold">PROJECTS</h2>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff2a85] hover:text-[#e01f6d] transition group">
              View All Projects 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {profile.projects.map((p, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="bg-[#0f111a] border border-[#202538] rounded-2xl overflow-hidden shadow-lg hover:border-[#ff2a85]/60 transition flex flex-col justify-between">
                <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white">{p.name}</h3>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.name} on GitHub`}
                      title="Open on GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2f45] text-[#ff2a85] hover:border-[#ff2a85] transition"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tools.map(t => <span key={t} className="px-2 py-0.5 bg-[#141724] text-[10px] text-[#ff2a85] rounded border border-[#202538]">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#0f111a] border border-[#202538] rounded-2xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xs font-mono tracking-widest text-[#ff2a85] uppercase font-bold">CONTACT ME</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="bg-[#141724] border border-[#202538] rounded-xl p-6 flex flex-col justify-center items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#ff2a85]/20 border border-[#ff2a85] flex items-center justify-center text-[#ff2a85] shadow-[0_0_15px_rgba(255,42,133,0.5)]"><PhoneCall size={28} /></div>
              <p className="text-xs font-mono text-[#ff2a85]">jana0abdelwahed@gmail.com</p>
              <p className="text-[11px] text-slate-400">Cairo, Egypt • FCIS ASU</p>
            </div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full bg-[#141724] border border-[#202538] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#ff2a85]" />
              <input type="email" placeholder="Your Email" className="w-full bg-[#141724] border border-[#202538] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#ff2a85]" />
              <textarea placeholder="Your Message" rows={3} className="w-full bg-[#141724] border border-[#202538] rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#ff2a85]"></textarea>
              <button className="w-full bg-[#ff2a85] text-white font-bold py-2.5 rounded-lg text-xs hover:bg-[#e01f6d] transition shadow-md shadow-[#ff2a85]/30">Send Message</button>
            </form>
          </div>
        </motion.section>

      </main>

      <footer className="text-center text-[11px] text-slate-500 py-6 border-t border-[#1a1d2e]">
        © {new Date().getFullYear()} Jana Abdelwahed. All rights reserved.
      </footer>
    </div>
  );
}