'use client';
import { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';
import Navigation from './Navigation';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has visited before (to avoid showing loading on every page)
    const hasVisited = localStorage.getItem('salonsync_visited');
    
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    localStorage.setItem('salonsync_visited', 'true');
    setIsLoading(false);
    
    // Small delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
} 