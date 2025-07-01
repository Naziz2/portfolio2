import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, FileText, CheckCircle, XCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd9f13987-bc50-4d78-97cf-5af49fdd5aa3', // Replace with your actual access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Une erreur est survenue');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "nahedhaziz64@gmail.com",
      link: "mailto:nahedhaziz64@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "94-895-342",
      link: "tel:+21694895342",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <MapPin size={24} />,
      title: "Localisation",
      value: "Ariena, Mnihla",
      link: "#",
      color: "from-purple-500 to-pink-500"
    },

  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez discuter d'opportunités ? 
            N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Informations de Contact</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.color}`}>
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Disponibilité</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-600">Disponible pour des stages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">Ouvert aux projets freelance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600">Recherche d'opportunités CDI</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSuccess && (
                <div className="p-4 mb-6 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Message envoyé avec succès !</h4>
                    <p className="text-sm text-green-700">Je vous répondrai dès que possible.</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="p-4 mb-6 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                  <XCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-800">Erreur lors de l'envoi</h4>
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              )}
              
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
              <input type="hidden" name="subject" value="Nouveau message depuis votre portfolio" />
              <input type="checkbox" name="botcheck" className="hidden" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Nom complet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Adresse email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Sujet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Votre message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <MessageCircle size={18} className="text-slate-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Dites-moi en plus sur votre projet..."
                    required
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none ${
                    isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:opacity-90 hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </div>
              
              <div className="text-xs text-slate-500 text-center">
                Ce formulaire est protégé par reCAPTCHA et la politique de confidentialité de Google s'applique.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;