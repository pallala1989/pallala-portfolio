
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
      emailjs.init('UmpeYlneD0XdC7d7D');

      await emailjs.send(
        'service_e4fqv58',
        'template_bvdipdh',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Rajasekhar',
        }
      );

      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
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
      icon: <Phone className="text-primary" size={20} />,
      label: "Phone",
      value: "+1 903-921-0271",
      href: "tel:+19039210271"
    },
    {
      icon: <Mail className="text-accent" size={20} />,
      label: "Email", 
      value: "pallala1989@gmail.com",
      href: "mailto:pallala1989@gmail.com"
    },
    {
      icon: <MapPin className="text-primary" size={20} />,
      label: "Location",
      value: "Wilmington, DE 19810",
      href: "#"
    },
    {
      icon: <Linkedin className="text-accent" size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/pallala",
      href: "https://linkedin.com/in/pallala"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-background/50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? I'm always open to interesting conversations and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{info.label}</p>
                    <p className="text-foreground font-semibold break-words">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-fade-in-up stagger-1">
                <label htmlFor="name" className="block text-muted-foreground mb-2 font-medium text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div className="animate-fade-in-up stagger-2">
                <label htmlFor="email" className="block text-muted-foreground mb-2 font-medium text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="animate-fade-in-up stagger-3">
                <label htmlFor="message" className="block text-muted-foreground mb-2 font-medium text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold animate-fade-in-up stagger-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-2xl hover:shadow-primary/40"
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
