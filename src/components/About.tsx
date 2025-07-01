import React from 'react';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Ayant un réel enthousiasme pour le développement web, je souhaite construire ma carrière 
              dans une organisation importante et progressiste qui peut pleinement tirer parti de mes 
              connaissances approfondies en tant qu'étudiant en génie logiciel à l'ISSAT Mateur.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Compétent dans l'utilisation des API, React, et d'autres frameworks, je suis à la recherche 
              d'opportunités qui me permettront d'évoluer grâce à mes compétences techniques, ma passion, 
              et mon esprit d'initiative.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">2025</div>
                <div className="text-sm text-slate-600">Diplôme prévu</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">3+</div>
                <div className="text-sm text-slate-600">Années d'études</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Passion Technique</h3>
              </div>
              <p className="text-slate-600">
                Développement web moderne avec React, Node.js, et les dernières technologies.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Lightbulb className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Innovation</h3>
              </div>
              <p className="text-slate-600">
                Toujours à la recherche de solutions créatives et d'approches novatrices.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Target className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Objectifs</h3>
              </div>
              <p className="text-slate-600">
                Contribuer à des projets impactants et évoluer dans un environnement stimulant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;