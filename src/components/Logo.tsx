interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient circle - modern tech feel */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      
      <circle cx="16" cy="16" r="15" fill="url(#bgGradient)" stroke="#4f46e5" strokeWidth="1"/>
      
      {/* Scissors (salon element) */}
      <g transform="translate(6, 10)">
        {/* Left scissors blade */}
        <ellipse cx="3" cy="4" rx="2" ry="1" fill="white" opacity="0.9"/>
        <ellipse cx="3" cy="4" rx="1" ry="0.5" fill="#f472b6"/>
        
        {/* Right scissors blade */}
        <ellipse cx="9" cy="4" rx="2" ry="1" fill="white" opacity="0.9"/>
        <ellipse cx="9" cy="4" rx="1" ry="0.5" fill="#f472b6"/>
        
        {/* Scissors handles */}
        <circle cx="3" cy="7" r="1" fill="white" opacity="0.9"/>
        <circle cx="9" cy="7" r="1" fill="white" opacity="0.9"/>
        
        {/* Center pivot */}
        <circle cx="6" cy="5.5" r="0.8" fill="white"/>
        
        {/* Scissors blades (lines) */}
        <line x1="3" y1="4" x2="6" y2="5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="9" y1="4" x2="6" y2="5.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </g>
      
      {/* AI Elements - Neural network nodes and connections */}
      <g transform="translate(10, 6)">
        {/* Neural network nodes */}
        <circle cx="6" cy="2" r="1.5" fill="url(#aiGradient)" opacity="0.8"/>
        <circle cx="2" cy="4" r="1" fill="white" opacity="0.9"/>
        <circle cx="10" cy="4" r="1" fill="white" opacity="0.9"/>
        <circle cx="6" cy="6" r="1" fill="white" opacity="0.9"/>
        
        {/* Neural connections */}
        <line x1="6" y1="3.5" x2="3" y2="4" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="6" y1="3.5" x2="9" y2="4" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="6" y1="3.5" x2="6" y2="5" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="3" y1="4" x2="5" y2="6" stroke="white" strokeWidth="0.8" opacity="0.7"/>
        <line x1="9" y1="4" x2="7" y2="6" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      </g>
      
      {/* AI Sparkles/Magic effect */}
      <g>
        {/* Top left sparkle */}
        <g transform="translate(8, 8)">
          <path d="M0,-2 L0.5,0 L0,2 L-0.5,0 Z" fill="white" opacity="0.8"/>
          <path d="M-2,0 L0,0.5 L2,0 L0,-0.5 Z" fill="white" opacity="0.8"/>
        </g>
        
        {/* Top right sparkle */}
        <g transform="translate(24, 10)">
          <path d="M0,-1.5 L0.3,0 L0,1.5 L-0.3,0 Z" fill="white" opacity="0.6"/>
          <path d="M-1.5,0 L0,0.3 L1.5,0 L0,-0.3 Z" fill="white" opacity="0.6"/>
        </g>
        
        {/* Bottom sparkle */}
        <g transform="translate(6, 24)">
          <path d="M0,-1 L0.2,0 L0,1 L-0.2,0 Z" fill="white" opacity="0.7"/>
          <path d="M-1,0 L0,0.2 L1,0 L0,-0.2 Z" fill="white" opacity="0.7"/>
        </g>
      </g>
      
      {/* Digital/Tech accent line */}
      <path d="M8 26 Q16 24 24 26" stroke="white" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="2,1"/>
    </svg>
  );
} 