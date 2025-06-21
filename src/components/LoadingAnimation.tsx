'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showLogo, setShowLogo] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const loadingTexts = [
    'Initializing AI Assistant...',
    'Connecting to WhatsApp...',
    'Loading Salon Features...',
    'Preparing Smart Booking...',
    'Syncing Calendar...',
    'Setting up Notifications...',
    'Finalizing Setup...',
    'Almost Ready!'
  ];

  // Deterministic particle data to avoid hydration mismatch
  const particleData = [
    { left: 15, top: 25, size: 3, delay: 0.5, duration: 4 },
    { left: 85, top: 15, size: 2, delay: 1.2, duration: 3.5 },
    { left: 45, top: 75, size: 4, delay: 0.8, duration: 4.2 },
    { left: 75, top: 35, size: 2.5, delay: 1.8, duration: 3.8 },
    { left: 25, top: 55, size: 3.5, delay: 0.3, duration: 4.5 },
    { left: 65, top: 85, size: 2.8, delay: 1.5, duration: 3.2 },
    { left: 35, top: 45, size: 3.2, delay: 0.9, duration: 4.1 },
    { left: 55, top: 25, size: 2.2, delay: 1.1, duration: 3.9 },
    { left: 85, top: 65, size: 3.8, delay: 0.6, duration: 4.3 },
    { left: 15, top: 75, size: 2.6, delay: 1.4, duration: 3.6 },
    { left: 95, top: 45, size: 3.1, delay: 0.4, duration: 4.4 },
    { left: 5, top: 35, size: 2.9, delay: 1.7, duration: 3.3 },
    { left: 75, top: 15, size: 3.4, delay: 0.7, duration: 4.0 },
    { left: 45, top: 95, size: 2.3, delay: 1.3, duration: 3.7 },
    { left: 25, top: 85, size: 3.6, delay: 0.2, duration: 4.6 },
    { left: 65, top: 55, size: 2.7, delay: 1.6, duration: 3.4 },
    { left: 35, top: 15, size: 3.3, delay: 1.0, duration: 4.2 },
    { left: 85, top: 85, size: 2.4, delay: 0.1, duration: 3.8 },
    { left: 15, top: 45, size: 3.7, delay: 1.9, duration: 3.1 },
    { left: 55, top: 65, size: 2.1, delay: 0.5, duration: 4.7 },
    { left: 95, top: 25, size: 3.9, delay: 1.2, duration: 3.5 },
    { left: 5, top: 75, size: 2.8, delay: 0.8, duration: 4.1 },
    { left: 75, top: 55, size: 3.0, delay: 1.5, duration: 3.9 },
    { left: 45, top: 35, size: 2.5, delay: 0.3, duration: 4.3 },
    { left: 25, top: 15, size: 3.5, delay: 1.8, duration: 3.2 },
    { left: 65, top: 75, size: 2.2, delay: 0.6, duration: 4.5 },
    { left: 35, top: 85, size: 3.8, delay: 1.1, duration: 3.6 },
    { left: 85, top: 45, size: 2.9, delay: 0.9, duration: 4.0 },
    { left: 15, top: 65, size: 3.1, delay: 1.4, duration: 3.8 },
    { left: 55, top: 85, size: 2.6, delay: 0.7, duration: 4.4 }
  ];

  useEffect(() => {
    setMounted(true);
    
    // Logo entrance
    const logoTimer = setTimeout(() => setShowLogo(true), 500);
    
    // Brand name entrance
    const brandTimer = setTimeout(() => setShowBrand(true), 1200);
    
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsCompleting(true);
          setTimeout(onComplete, 1000);
          return 100;
        }
        // More realistic progress with slower start and faster finish
        if (prev < 30) return prev + 1;
        if (prev < 60) return prev + 1.5;
        if (prev < 90) return prev + 2;
        return prev + 3;
      });
    }, 60);

    // Text cycling
    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 700);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(brandTimer);
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-salon-pink via-salon-purple to-indigo-600 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isCompleting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {particleData.map((particle, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          >
            <div 
              className="bg-white rounded-full opacity-40"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`
              }}
            ></div>
          </div>
        ))}

        {/* Neural Network Visualization */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-4 h-4 bg-white/20 rounded-full neural-pulse"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${15 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Connecting Lines with Data Flow */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="yellow" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={`flow-line-${i}`}
              x1={`${20 + (i % 3) * 25}%`}
              y1={`${25 + (i % 2) * 35}%`}
              x2={`${45 + (i % 3) * 15}%`}
              y2={`${45 + (i % 2) * 25}%`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              className="data-flow"
              style={{
                animationDelay: `${i * 0.4}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </svg>

        {/* Rotating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border border-white/15 rotate-12 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1500 ${showLogo ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'}`}>
          <div className="relative">
            {/* Multiple Rotating Rings */}
            <div className="absolute -inset-12 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
            <div className="absolute -inset-8 border border-white/30 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
            <div className="absolute -inset-6 border border-white/25 rounded-full animate-spin" style={{ animationDuration: '5s' }}></div>
            
            {/* Logo Container */}
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full border border-white/30 shadow-2xl">
              <Logo size={70} className="text-white drop-shadow-lg" />
            </div>
            
            {/* Pulsing Glow Effects */}
            <div className="absolute inset-0 bg-white/5 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-2 bg-white/3 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Brand Name with Enhanced Animation */}
        <div className={`mb-10 transition-all duration-1000 ${showBrand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl font-bold text-white mb-3 tracking-wide">
            <span className="inline-block animate-pulse" style={{ animationDelay: '0s' }}>S</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>a</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>l</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>o</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>n</span>
            <span className="inline-block animate-pulse text-yellow-200" style={{ animationDelay: '0.5s' }}>S</span>
            <span className="inline-block animate-pulse text-yellow-200" style={{ animationDelay: '0.6s' }}>y</span>
            <span className="inline-block animate-pulse text-yellow-200" style={{ animationDelay: '0.7s' }}>n</span>
            <span className="inline-block animate-pulse text-yellow-200" style={{ animationDelay: '0.8s' }}>c</span>
          </h1>
          <p className="text-xl text-white/90 font-medium tracking-wide">
            🤖 AI-Powered WhatsApp Booking Bot
          </p>
          <p className="text-sm text-white/70 mt-2">
            ✨ Making salon bookings effortless
          </p>
        </div>

        {/* Enhanced Loading Progress */}
        <div className="mb-8">
          <div className="bg-white/20 rounded-full h-3 mb-4 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-white via-yellow-200 to-white h-full rounded-full transition-all duration-300 ease-out relative progress-shine"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress Percentage with Animation */}
          <div className="text-white/95 font-bold text-2xl mb-2 tabular-nums">
            {progress}%
          </div>
          
          {/* Progress Status */}
          <div className="text-white/80 text-sm">
            {progress < 25 && '🔄 Starting up...'}
            {progress >= 25 && progress < 50 && '⚡ Loading features...'}
            {progress >= 50 && progress < 75 && '🚀 Almost there...'}
            {progress >= 75 && progress < 100 && '✨ Finalizing...'}
            {progress >= 100 && '✅ Ready to go!'}
          </div>
        </div>

        {/* Dynamic Loading Text with Typewriter Effect */}
        <div className="h-10 flex items-center justify-center">
          <p className="text-white/85 text-lg font-medium animate-pulse">
            {currentText}
          </p>
        </div>

        {/* Floating Salon Elements */}
        <div className="absolute -top-12 -left-12 animate-bounce text-3xl" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>
          ✂️
        </div>
        <div className="absolute -top-8 -right-12 animate-bounce text-3xl" style={{ animationDelay: '1s', animationDuration: '2.8s' }}>
          💇‍♀️
        </div>
        <div className="absolute -bottom-12 -left-8 animate-bounce text-3xl" style={{ animationDelay: '1.5s', animationDuration: '2.2s' }}>
          📱
        </div>
        <div className="absolute -bottom-8 -right-8 animate-bounce text-3xl" style={{ animationDelay: '0.8s', animationDuration: '2.6s' }}>
          🤖
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce text-2xl" style={{ animationDelay: '1.2s', animationDuration: '2.4s' }}>
          ⭐
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce text-2xl" style={{ animationDelay: '0.3s', animationDuration: '2.7s' }}>
          💫
        </div>
      </div>

      {/* Bottom Animated Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 opacity-40">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="white" 
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="white" 
            className="animate-pulse" 
            style={{ animationDelay: '1s', animationDuration: '5s' }}
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="white" 
            className="animate-pulse" 
            style={{ animationDelay: '2s', animationDuration: '6s' }}
          />
        </svg>
      </div>
    </div>
  );
} 