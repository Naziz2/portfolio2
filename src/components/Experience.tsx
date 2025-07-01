import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Stage Web Developer",
      company: "Eklectic - Lac 2",
      period: "Janvier - Avril 2025",
      type: "Stage",
      description: [
        "Contribution au développement d'une application de visioconférence en temps réel",
        "Intégration de la diffusion vidéo/audio et du chat en temps réel",
        "Collaboration sur les composants frontend et backend avec des frameworks modernes",
        "Renforcement des compétences en communication temps réel et optimisation des performances"
      ],
      technologies: ["React", "Node.js", "WebRTC", "Socket.IO", "API REST"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Stage Web Developer",
      company: "Eklectic - Lac 2",
      period: "Juillet 2024",
      type: "Stage d'été",
      description: [
        "Développement d'un jeu de quiz interactif utilisant des technologies web modernes",
        "Conception d'une interface utilisateur intuitive et responsive",
        "Mise en place d'un système dynamique de questions et suivi des scores",
        "Acquisition d'expérience pratique en développement frontend et stratégies d'engagement utilisateur"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "API", "Responsive Design"],
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Stage Guichetier Banque",
      company: "Bank Zitouna",
      period: "Juin 2023",
      type: "Stage d'observation",
      description: [
        "Développement de compétences en gestion financière et administrative",
        "Apprentissage de la gestion des documents et suivi des procédures",
        "Intégration des aspects financiers et organisationnels dans les projets professionnels"
      ],
      technologies: ["Gestion Administrative", "Service Client", "Procédures Bancaires"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={18} />
                      <span>{exp.period}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;