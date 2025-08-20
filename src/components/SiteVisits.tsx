
import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const SiteVisits = () => {
  const [displayCount, setDisplayCount] = useState(2000);
  const [targetCount, setTargetCount] = useState(2000);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Get stored visit count from localStorage
    const storedCount = localStorage.getItem('siteVisits');
    
    if (storedCount) {
      const currentCount = parseInt(storedCount, 10);
      const newCount = currentCount + 1;
      
      // Set the starting display count to current count
      setDisplayCount(currentCount);
      setTargetCount(newCount);
      
      // Store the new count
      localStorage.setItem('siteVisits', newCount.toString());
      
      // Start animation after a brief delay
      setTimeout(() => {
        setIsAnimating(true);
      }, 500);
    } else {
      // First visit, set default count
      setDisplayCount(2000);
      setTargetCount(2000);
      localStorage.setItem('siteVisits', '2000');
    }
  }, []);

  useEffect(() => {
    if (isAnimating && displayCount < targetCount) {
      const timer = setTimeout(() => {
        setDisplayCount(prev => prev + 1);
      }, 150); // Slow animation - 150ms per increment

      return () => clearTimeout(timer);
    } else if (displayCount >= targetCount) {
      setIsAnimating(false);
    }
  }, [displayCount, targetCount, isAnimating]);

  const formatVisitCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString().padStart(6, '0'); // Pad with zeros for digital counter effect
  };

  return (
    <div className="bg-background/80 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="h-5 w-5" />
            <span className="text-sm font-medium">Site Visits</span>
          </div>
          
          {/* Digital Counter Display */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg px-6 py-4 shadow-lg">
              <div className="font-mono text-2xl md:text-3xl font-bold text-primary tracking-wider">
                {formatVisitCount(displayCount)}
              </div>
              
              {/* Animated glow effect when counting */}
              {isAnimating && (
                <div className="absolute inset-0 rounded-lg bg-primary/10 animate-pulse"></div>
              )}
            </div>
            
            {/* Subtle increment indicator */}
            {isAnimating && (
              <div className="absolute -top-2 -right-2 bg-primary/20 text-primary text-xs px-2 py-1 rounded-full animate-bounce">
                +1
              </div>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground text-center max-w-md">
            Thank you for visiting! Your visit has been counted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteVisits;
