
import React, { useEffect } from 'react';

export const LinkedInBadge: React.FC = () => {
  useEffect(() => {
    // Load LinkedIn badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="flex justify-center py-8 bg-background/50">
      <div className="glass-card p-6 animate-fade-in-up">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2">Connect with me on LinkedIn</h3>
          <p className="text-muted-foreground text-sm">Let's build professional connections</p>
        </div>
        <div 
          className="badge-base LI-profile-badge" 
          data-locale="en_US" 
          data-size="medium" 
          data-theme="dark" 
          data-type="VERTICAL" 
          data-vanity="pallala" 
          data-version="v1"
        >
          <a 
            className="badge-base__link LI-simple-link text-primary hover:text-accent transition-colors" 
            href="https://www.linkedin.com/in/pallala?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pallala Rajasekhar
          </a>
        </div>
      </div>
    </div>
  );
};
