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
    'Preparing your salon experience...',
    'Setting up WhatsApp magic...',
    'Connecting to the cloud...',
    'Loading beautiful features...',
    'Syncing your calendar...',
    'Adding sparkles...',
    'Almost ready to shine...',
    'Welcome to SalonSync!'
  ];

  useEffect(() => {
    setMounted(true);
    
    // Logo entrance
    const logoTimer = setTimeout(() => setShowLogo(true), 800);
    
    // Brand name entrance
    const brandTimer = setTimeout(() => setShowBrand(true), 1500);
    
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsCompleting(true);
          setTimeout(onComplete, 1200);
          return 100;
        }
        if (prev < 30) return prev + 1.2;
        if (prev < 60) return prev + 1.8;
        if (prev < 90) return prev + 2.5;
        return prev + 3.5;
      });
    }, 50);

    // Text cycling
    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(brandTimer);
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isCompleting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Sky Background */}
      <div className="absolute inset-0">
        {/* Animated Sun */}
        <div className="absolute top-12 right-12">
          <div className="w-20 h-20 bg-yellow-300 rounded-full animate-pulse shadow-lg shadow-yellow-200/50 relative">
            <div className="absolute inset-2 bg-yellow-100 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating Clouds */}
        <div className="absolute left-[10%] top-[20%] w-16 h-10 opacity-80 animate-pulse">
          <div className="relative">
            <div className="absolute bottom-0 left-2 w-8 h-8 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-0 right-2 w-8 h-8 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-1 left-4 w-6 h-6 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 left-6 w-10 h-10 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 right-4 w-7 h-7 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        <div className="absolute left-[80%] top-[15%] w-20 h-12 opacity-80 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <div className="absolute bottom-0 left-2 w-8 h-8 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-0 right-2 w-8 h-8 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-1 left-4 w-6 h-6 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 left-6 w-10 h-10 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 right-4 w-7 h-7 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        <div className="absolute left-[30%] top-[70%] w-14 h-8 opacity-80 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="relative">
            <div className="absolute bottom-0 left-2 w-8 h-8 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-0 right-2 w-8 h-8 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-1 left-4 w-6 h-6 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 left-6 w-10 h-10 bg-white rounded-full shadow-sm"></div>
            <div className="absolute bottom-2 right-4 w-7 h-7 bg-white rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Magical Sparkles */}
        <div className="absolute left-[20%] top-[30%] text-lg animate-ping text-yellow-400" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute left-[85%] top-[25%] text-sm animate-ping text-yellow-400" style={{ animationDelay: '1.2s' }}>✨</div>
        <div className="absolute left-[40%] top-[80%] text-base animate-ping text-yellow-400" style={{ animationDelay: '0.8s' }}>✨</div>
        <div className="absolute left-[75%] top-[65%] text-lg animate-ping text-yellow-400" style={{ animationDelay: '1.8s' }}>✨</div>
        <div className="absolute left-[25%] top-[50%] text-sm animate-ping text-yellow-400" style={{ animationDelay: '0.3s' }}>✨</div>
        <div className="absolute left-[60%] top-[35%] text-base animate-ping text-yellow-400" style={{ animationDelay: '1.5s' }}>✨</div>
        <div className="absolute left-[90%] top-[70%] text-lg animate-ping text-yellow-400" style={{ animationDelay: '0.6s' }}>✨</div>
        <div className="absolute left-[10%] top-[45%] text-sm animate-ping text-yellow-400" style={{ animationDelay: '1.1s' }}>✨</div>

        {/* Rainbow Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <div className="w-full h-full bg-gradient-to-t from-pink-200 via-purple-100 to-transparent rounded-t-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-2000 ${showLogo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'}`}>
          <div className="relative">
            {/* Logo Container */}
            <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-full border-4 border-white shadow-2xl shadow-blue-200/30">
              <Logo size={80} className="text-salon-purple drop-shadow-lg" />
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full animate-pulse opacity-50 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className={`mb-12 transition-all duration-1500 ${showBrand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-7xl font-bold mb-4 tracking-wide">
            <span className="inline-block animate-bounce text-pink-500" style={{ animationDelay: '0s', animationDuration: '2s' }}>S</span>
            <span className="inline-block animate-bounce text-purple-500" style={{ animationDelay: '0.1s', animationDuration: '2s' }}>a</span>
            <span className="inline-block animate-bounce text-blue-500" style={{ animationDelay: '0.2s', animationDuration: '2s' }}>l</span>
            <span className="inline-block animate-bounce text-indigo-500" style={{ animationDelay: '0.3s', animationDuration: '2s' }}>o</span>
            <span className="inline-block animate-bounce text-cyan-500" style={{ animationDelay: '0.4s', animationDuration: '2s' }}>n</span>
            <span className="inline-block animate-bounce text-yellow-500 ml-2" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>S</span>
            <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '0.6s', animationDuration: '2s' }}>y</span>
            <span className="inline-block animate-bounce text-red-500" style={{ animationDelay: '0.7s', animationDuration: '2s' }}>n</span>
            <span className="inline-block animate-bounce text-pink-500" style={{ animationDelay: '0.8s', animationDuration: '2s' }}>c</span>
          </h1>
          <p className="text-2xl text-slate-700 font-semibold mb-2">
            🌟 Your AI Beauty Assistant
          </p>
          <p className="text-lg text-slate-600">
            ☁️ Floating on cloud nine with smart bookings
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="bg-white/50 rounded-full h-4 mb-6 overflow-hidden shadow-inner backdrop-blur-sm border border-white/30">
            <div 
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-full rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-xs animate-bounce">✨</div>
            </div>
          </div>
          
          <div className="text-slate-800 font-bold text-3xl mb-3 tabular-nums">
            {progress}%
          </div>
          
          <div className="text-slate-700 text-lg font-medium">
            {progress < 25 && '🌅 Waking up the clouds...'}
            {progress >= 25 && progress < 50 && '☁️ Gathering magic...'}
            {progress >= 50 && progress < 75 && '🌈 Adding rainbows...'}
            {progress >= 75 && progress < 100 && '✨ Sprinkling stardust...'}
            {progress >= 100 && '🎉 Ready to sparkle!'}
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-slate-700 text-xl font-medium animate-pulse bg-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
            {currentText}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-16 -left-16 animate-bounce text-4xl" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>💅</div>
        <div className="absolute -top-12 -right-16 animate-bounce text-4xl" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>🌸</div>
        <div className="absolute -bottom-16 -left-12 animate-bounce text-4xl" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>💄</div>
        <div className="absolute -bottom-12 -right-12 animate-bounce text-4xl" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}>🦋</div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce text-3xl" style={{ animationDelay: '1.2s', animationDuration: '2.9s' }}>🌟</div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-3xl" style={{ animationDelay: '0.3s', animationDuration: '3.1s' }}>🎀</div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[20%] top-[25%] animate-pulse text-pink-300 text-lg" style={{ animationDelay: '0s' }}>💖</div>
        <div className="absolute left-[80%] top-[30%] animate-pulse text-pink-300 text-sm" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute left-[15%] top-[70%] animate-pulse text-pink-300 text-base" style={{ animationDelay: '2s' }}>💖</div>
        <div className="absolute left-[85%] top-[75%] animate-pulse text-pink-300 text-lg" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute left-[50%] top-[15%] animate-pulse text-pink-300 text-sm" style={{ animationDelay: '1.5s' }}>💖</div>
        <div className="absolute left-[30%] top-[85%] animate-pulse text-pink-300 text-base" style={{ animationDelay: '2.5s' }}>⭐</div>
      </div>
    </div>
  );
}