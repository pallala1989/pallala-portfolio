
import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const SiteVisits = () => {
  const [visitCount, setVisitCount] = useState(2000);

  useEffect(() => {
    // Get stored visit count from localStorage
    const storedCount = localStorage.getItem('siteVisits');
    
    if (storedCount) {
      const currentCount = parseInt(storedCount, 10);
      const newCount = currentCount + 1;
      setVisitCount(newCount);
      localStorage.setItem('siteVisits', newCount.toString());
    } else {
      // First visit, set default count
      setVisitCount(2000);
      localStorage.setItem('siteVisits', '2000');
    }
  }, []);

  const formatVisitCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  return (
    <div className="bg-background/80 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Eye className="h-4 w-4" />
          <span className="text-sm">
            Site Visits: <span className="font-semibold text-foreground">{formatVisitCount(visitCount)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SiteVisits;
