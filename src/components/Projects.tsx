import React, { useState } from 'react';
import { ExternalLink, Github, Play, Users, Zap, MessageCircle, MapPin, Shield, Loader2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});
  const [iframeErrors, setIframeErrors] = useState<{[key: string]: boolean}>({});

  const handleIframeLoad = (title: string) => {
    setLoadingStates(prev => ({ ...prev, [title]: false }));
  };

  const handleIframeError = (title: string) => {
    setLoadingStates(prev => ({ ...prev, [title]: false }));
    setIframeErrors(prev => ({ ...prev, [title]: true }));
  };

  const projects = [
    {
      title: "Emoji Recipe Tales",
      description: "Transformez les émojis en créativité culinaire ! Ce projet TypeScript traduit des séquences d'émojis en suggestions de recettes amusantes et inattendues.",
      image: "https://ui-avatars.com/api/?name=Emoji+Recipe+Tales&background=4f46e5&color=fff&size=128",
      previewUrl: "https://moodmeal.aziz.works/",
      technologies: ["TypeScript", "React", "Mappings JSON locaux"],
      features: [
        "Analyse de chaînes d'émojis (ex: 🍝🍅🧄)",
        "Suggestions de recettes dynamiques",
        "Interface légère et colorée",
        "Langage d'entrée basé sur les émojis"
      ],
      status: "En ligne",
      color: "from-blue-500 to-purple-600",
      icon: <Zap size={24} />,
      githubUrl: "https://github.com/Naziz2/emoji-recipe-tales",
      demoUrl: "https://moodmeal.aziz.works/"
    },
    {
      title: "Video Meeting",
      description: "Conférences vidéo optimisées par l'IA avec résumés intelligents. Une solution complète combinant visioconférence et productivité améliorée par l'IA.",
      image: "https://ui-avatars.com/api/?name=Video+Meeting&background=10b981&color=fff&size=128",
      previewUrl: "https://vivid.aziz.works/",
      technologies: ["TypeScript", "WebRTC", "Socket.IO", "Node.js", "IA"],
      features: [
        "Génération automatique de résumés",
        "Stockage des comptes-rendus",
        "Détection de la langue parlée",
        "Planification de réunions"
      ],
      status: "En ligne",
      color: "from-green-500 to-blue-500",
      icon: <Users size={24} />,
      githubUrl: "https://github.com/Naziz2/video-meetig",
      demoUrl: "https://vivid.aziz.works/"
    },
    {
      title: "Track Fleet Beacon",
      description: "Système de surveillance de flotte en temps réel avec accès basé sur les rôles. Une solution complète pour la gestion logistique et le suivi de véhicules.",
      image: "https://ui-avatars.com/api/?name=Track+Fleet+Beacon&background=f59e0b&color=fff&size=128",
      previewUrl: "https://autotrace.aziz.works/",
      technologies: ["TypeScript", "React", "Supabase", "API Cartes"],
      features: [
        "Suivi en temps réel sur carte",
        "Tableau de bord administrateur",
        "Accès développeur aux itinéraires",
        "Journalisation des alertes"
      ],
      status: "En développement",
      color: "from-purple-500 to-pink-500",
      icon: <MapPin size={24} />,
      githubUrl: "https://github.com/Naziz2/track-fleet-beacon",
      demoUrl: "https://autotrace.aziz.works/"
    },
    {
      title: "German Study",
      description: "Application de cartes mémoire à répétition espacée pour les apprenants en langues. Conçue pour un apprentissage efficace du vocabulaire allemand.",
      image: "https://ui-avatars.com/api/?name=German+Study&background=8b5cf6&color=fff&size=128",
      previewUrl: "https://studygerman.aziz.works/",
      technologies: ["TypeScript", "React", "LocalStorage"],
      features: [
        "Cartes mémoire interactives",
        "Algorithme de répétition espacée",
        "Fonctionnement hors ligne",
        "Interface mobile"
      ],
      status: "En ligne",
      color: "from-yellow-500 to-orange-500",
      icon: <Play size={24} />,
      githubUrl: "https://github.com/Naziz2/german_study",
      demoUrl: "https://studygerman.aziz.works/"
    },
    {
      title: "Générateur de README",
      description: "Générez automatiquement des fichiers README propres et professionnels pour vos projets GitHub en quelques secondes.",
      image: "https://ui-avatars.com/api/?name=Readme+Generator&background=ec4899&color=fff&size=128",
      previewUrl: "https://readme.aziz.works/",
      technologies: ["JavaScript", "Markdown", "Ligne de commande"],
      features: [
        "Génération rapide",
        "Sections prédéfinies",
        "Support des badges",
        "Facile à utiliser"
      ],
      status: "Open Source",
      color: "from-blue-400 to-cyan-500",
      icon: <Zap size={24} />,
      githubUrl: "https://github.com/Naziz2/readme-generator",
      demoUrl: "https://readme.aziz.works/"
    },
    {
      title: "Hanibal AI Chat",
      description: "Interface de chatbot modulaire avec intégration d'IA. Un terrain de jeu pour créer des interfaces de discussion intelligentes avec mémoire contextuelle.",
      image: "https://ui-avatars.com/api/?name=Hanibal+AI+Chat&background=10b981&color=fff&size=128",
      previewUrl: "https://hanibal.aziz.works/",
      technologies: ["TypeScript", "React", "IA", "Tailwind"],
      features: [
        "Interface utilisateur moderne",
        "Gestion du contexte",
        "Compatibilité API OpenAI",
        "Facilement personnalisable"
      ],
      status: "En ligne",
      color: "from-purple-600 to-pink-600",
      icon: <MessageCircle size={24} />,
      githubUrl: "https://github.com/Naziz2/hanibal-ai-chat",
      demoUrl: "https://hanibal.aziz.works/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Projets</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets personnels et professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Project Preview Image */}
              <div className="relative h-48 bg-slate-100 overflow-hidden group" style={{ perspective: '1000px' }}>
                {loadingStates[project.title] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                  </div>
                )}
                
                {!iframeErrors[project.title] ? (
                  <div className="w-full h-full overflow-hidden">
                    <iframe
                      src={project.previewUrl}
                      title={`Aperçu de ${project.title}`}
                      className={`w-full h-full transition-opacity duration-300 scale-100 origin-top-left ${
                        loadingStates[project.title] ? 'opacity-0' : 'opacity-100'
                      }`}
                      style={{
                        transform: 'scale(0.3)',
                        transformOrigin: '0 0',
                        width: '333.33%',
                        height: '333.33%',
                        border: 'none',
                        overflow: 'hidden'
                      }}
                      onLoad={() => handleIframeLoad(project.title)}
                      onError={() => handleIframeError(project.title)}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 text-slate-800 shadow-sm backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} text-white mr-3`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-4 text-sm flex-1">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Fonctionnalités :</h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex gap-3">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r ${project.color} text-white font-medium hover:shadow-lg transition-all duration-300 text-sm`}
                    >
                      <ExternalLink size={14} />
                      <span>Voir le projet</span>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center"
                      aria-label="Voir sur GitHub"
                    >
                      <Github size={16} className="text-slate-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;