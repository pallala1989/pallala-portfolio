import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('UmpeYlneD0XdC7d7D');

      // Send email using EmailJS
      await emailjs.send(
        'service_e4fqv58', // your service ID
        'template_bvdipdh', // your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rajasekhar', // your name
        }
      );

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message ❌",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="text-white" size={24} />,
      label: "Phone",
      value: "+1 903-921-0271",
      href: "tel:+19039210271",
      color: "gradient-blue"
    },
    {
      icon: <Mail className="text-white" size={24} />,
      label: "Email", 
      value: "pallala1989@gmail.com",
      href: "mailto:pallala1989@gmail.com",
      color: "gradient-orange"
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      label: "Location",
      value: "Wilmington, DE 19810",
      href: "#",
      color: "gradient-green"
    },
    {
      icon: <Linkedin className="text-white" size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/pallala",
      href: "https://linkedin.com/in/pallala",
      color: "gradient-purple"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 gradient-blue rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 gradient-orange rounded-full opacity-10 animate-pulse-custom"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Ready to discuss your next project or explore opportunities? 
                I'm always open to interesting conversations and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center space-x-4 p-6 glass-card rounded-2xl shadow-2xl border border-gray-700 hover-lift animate-fade-in-scale stagger-${index + 1}`}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className={`p-3 ${info.color} rounded-xl animate-glow`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 shadow-2xl border border-gray-700 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-in-up stagger-1">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div className="animate-slide-in-up stagger-2">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="animate-slide-in-up stagger-3">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 gradient-blue text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-medium hover-glow animate-slide-in-up stagger-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send size={20} className={isLoading ? 'animate-spin' : ''} />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
