import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Globe, ChevronDown } from 'lucide-react';
import profileImage from '../resource/profile.jpg';
import CursorFollower from './CursorFollower';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-none">
      <CursorFollower />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="relative w-80 h-80 mx-auto mb-8">
            {/* Animated Blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-blob"></div>
            
            {/* Profile Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Nahedh Med Aziz
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6 font-light">
            Génie Logiciel • Développeur Web Passionné
          </p>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed mb-8">
            Étudiant en génie logiciel à l'ISSAT Mateur, passionné par le développement web moderne 
            et les technologies innovantes. Spécialisé en React, Node.js et architectures full-stack.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-600">
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin size={18} className="text-blue-600" />
            <span>Ariena, Mnihla</span>
          </div>
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Phone size={18} className="text-blue-600" />
            <span>94-895-342</span>
          </div>
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Globe size={18} className="text-blue-600" />
            <span>www.nahedh.tech</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mohamedaziznahedh@gmail.com&su=Contact%20from%20Portfolio&body=Bonjour%20Mohamed%2C%0D%0A%0D%0A"
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Mail size={24} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://github.com/Naziz2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Github size={24} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-aziz-nahedh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin size={24} className="text-slate-600 group-hover:text-blue-600 transition-colors" />
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#about" 
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
          >
            Découvrir mon parcours
            <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a 
            href="/Nahedh_Mohamed_Aziz_CV.pdf" 
            download="Nahedh_Mohamed_Aziz_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-slate-800 font-medium rounded-full border-2 border-slate-200 hover:bg-slate-50 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;