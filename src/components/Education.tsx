import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Licence en Génie Logiciel",
      institution: "ISSAT Mateur",
      period: "2022 - 2025",
      status: "Diplômé",
      description: "Formation approfondie en développement logiciel, travail sur des technologies comme les API, React, et divers frameworks. Renforcement des capacités techniques en préparation aux défis professionnels de l'ingénierie logicielle.",
      highlights: [
        "Programmation avancée et architectures logicielles",
        "Développement web moderne (React, Node.js)",
        "Gestion de bases de données et API",
        "Méthodologies agiles et travail en équipe"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Baccalauréat",
      institution: "Lycée Rafedha - Ariena",
      period: "2018 - 2022",
      status: "Diplômé",
      description: "Études en informatique où j'ai développé mes bases en programmation et découvert ma passion pour les technologies numériques, renforçant mon intérêt pour le développement logiciel.",
      highlights: [
        "Fondamentaux de l'informatique",
        "Initiation à la programmation",
        "Mathématiques appliquées",
        "Découverte des technologies numériques"
      ],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Parcours Académique
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color}`}>
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin size={16} />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={18} />
                      <span>{edu.period}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <Award className="text-blue-500 flex-shrink-0" size={18} />
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-4 rounded-2xl">
            <div className="text-3xl">🎯</div>
            <div className="text-left">
              <div className="font-semibold text-slate-800">Objectif 2025</div>
              <div className="text-slate-600">Obtention du diplôme d'ingénieur en génie logiciel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;