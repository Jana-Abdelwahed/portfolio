'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

export default function ProjectsPage() {
  const allProjects = [
    {
      name: 'Ecommerce App',
      tools: ['Flutter', 'Dart', 'REST API', 'Provider'],
      image: 'https://i.pinimg.com/736x/c3/af/58/c3af58d02b715aa21e6fef03765b1729.jpg',
      desc: 'A full-featured cross-platform e-commerce application built with Flutter featuring state management and seamless product browsing.',
      github: 'https://github.com/Jana-Abdelwahed/Ecommerce'
    },
    {
      name: 'Evently App',
      tools: ['Flutter', 'Dart', 'Firebase', 'Localization'],
      image: 'https://i.pinimg.com/736x/4d/78/87/4d7887ce79dda7a184e1ce5fed5d6fd9.jpg',
      desc: 'Cross-platform event management app with real-time Firestore sync, authentication, and multi-language localization.',
      github: 'https://github.com/Jana-Abdelwahed/Evently'
    },
    {
      name: 'Movies Explorer',
      tools: ['Flutter', 'Clean Arch', 'TMDB API'],
      image: 'https://i.pinimg.com/736x/95/4a/52/954a5288eadcdc4e52e591ed45fdbd1e.jpg',
      desc: 'Clean Architecture mobile application featuring movie discovery, caching, and real-time data integration.',
      github: 'https://github.com/Jana-Abdelwahed/Arabic_Movies_Explorer'
    },
    {
      name: 'Solar System 3D',
      tools: ['Flutter', '3D Models', 'Interactive UI'],
      image: 'https://i.pinimg.com/1200x/45/39/82/453982f6ad6a1a8234cf45a1e9ccd40e.jpg',
      desc: 'Interactive 3D celestial bodies explorer showcasing detailed space datasets and interactive rendering.',
      github: 'https://github.com/Jana-Abdelwahed/Solar_system_app'
    },
    {
      name: 'Islami',
      tools: ['Flutter', 'Dart'],
      image: 'https://i.pinimg.com/736x/e1/bb/4b/e1bb4bd9fdcf59035f9fa19651824399.jpg',
      desc: 'A beautifully designed cross-platform Islamic application built with Flutter. Offers reading the Holy Quran, browsing Hadeth, using an interactive Digital Sebha, listening to Quran Radio, and staying updated with accurate Prayer Times.',
      github: 'https://github.com/Jana-Abdelwahed/Islami'
    },
    {
      name: 'News App',
      tools: ['Flutter', 'Dart'],
      image: 'https://i.pinimg.com/1200x/d6/2c/a7/d62ca75115356602da8c34db941e0576.jpg',
      desc: 'A high-performance, responsive Flutter News Application featuring an elegant interface, multi-language localization support, dynamic dark/light skin adjustments, and an enterprise-grade Offline-First Data Architecture utilizing value comparison optimization.',
      github: 'https://github.com/Jana-Abdelwahed/News_app'
    },
    {
      name: 'Personalized Roadmap Generator',
      tools: ['Python', 'RAG Architecture', 'Generative AI'],
      image: 'https://i.pinimg.com/236x/20/ec/05/20ec057a93187d2721de8ab15ef8902b.jpg',
      desc: 'Intelligent retrieval-augmented generation pipeline querying context-specific technical documentation.',
      github: 'https://github.com/Jana-Abdelwahed/Personalized_Roadmap_Generator'
    },
    {
      name: 'Coworking Space Management System',
      tools: ['Java', 'Object-Oriented Programming (OOP)'],
      image: 'https://i.pinimg.com/736x/83/4c/d6/834cd635b9742f646f58c3932b74752b.jpg',
      desc: 'Developed a Java-based Coworking Space Management System using OOP concepts. The system manages workspace reservations.',
      github: 'https://github.com/Jana-Abdelwahed/Coworking_Space_System'
    },
    {
      name: 'Agricultural Land Exploration',
      tools: ['Arduino','Embedded Systems'],
      image: 'https://i.pinimg.com/736x/74/a0/70/74a0708bc38e9d95e1efcba275495272.jpg',
      desc: 'IoT and hardware interface application establishing communication channels between physical microcontrollers and external inputs, To explore sustainable and efficient agricultural practices with real-world impact.',
      github: 'https://github.com/Jana-Abdelwahed'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-[#ff2a85] selection:text-white pb-20" style={{ backgroundColor: '#090a10' }}>
      
      <div className="pt-6 px-4 flex justify-center sticky top-0 z-50">
        <nav className="w-full max-w-5xl bg-[#0f111a]/90 backdrop-blur-md border border-[#202538] text-white font-semibold rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-[#ff2a85] hover:text-white transition">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase hidden sm:inline">All Projects</span>
          <span className="font-bold text-sm tracking-wider flex items-center gap-1.5">JANA ABDELWAHED</span>
        </nav>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-10">
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff2a85] uppercase font-bold">
            <Sparkles size={14} /> SELECTED WORK
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Apps built for <br />
            <span className="text-[#ff2a85] drop-shadow-[0_0_15px_rgba(255,42,133,0.5)]">impact & scale.</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl pt-1">
            A selection of cross-platform mobile applications, and AI solutions built across e-commerce, real-time networking, dynamic APIs.
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {allProjects.map((p, idx) => (
            <motion.div key={idx} whileHover={{ y: -6 }} className="bg-[#0f111a] border border-[#202538] rounded-2xl overflow-hidden shadow-lg hover:border-[#ff2a85]/60 transition flex flex-col justify-between">
              <div>
                <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <h2 className="text-sm font-bold text-white">{p.name}</h2>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.name} on GitHub`}
                      title="Open on GitHub"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2f45] text-slate-400 hover:border-[#ff2a85] hover:text-[#ff2a85] transition"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
              <div className="p-5 pt-0 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-[#141724] text-[10px] text-[#ff2a85] rounded border border-[#202538]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </main>

      <footer className="text-center text-[11px] text-slate-500 py-10 mt-12 border-t border-[#1a1d2e]">
        © {new Date().getFullYear()} Jana Abdelwahed. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}