import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frameworks & Libraries",
      icon: <Code size={24} />,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Flutter", level: 70 },
        { name: "Socket.IO", level: 85 },
        { name: "WebRTC", level: 75 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Bases de Données",
      icon: <Database size={24} />,
      color: "from-green-500 to-blue-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase/Firestore", level: 85 },
        { name: "Supabase", level: 75 }
      ]
    },
    {
      title: "Langues",
      icon: <Globe size={24} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Arabe (natif)", level: 100 },
        { name: "Français (intermédiaire)", level: 75 },
        { name: "Anglais (courant)", level: 85 },
        { name: "Allemand (A1 - débutant)", level: 30 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Server className="text-blue-600" size={24} />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Backend</h4>
            <p className="text-slate-600 text-sm">API REST, Microservices, Architecture scalable</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone className="text-green-600" size={24} />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Mobile</h4>
            <p className="text-slate-600 text-sm">Applications cross-platform avec Flutter</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Palette className="text-purple-600" size={24} />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">UI/UX</h4>
            <p className="text-slate-600 text-sm">Design moderne, responsive et accessible</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Globe className="text-orange-600" size={24} />
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Web</h4>
            <p className="text-slate-600 text-sm">Applications web modernes et performantes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;