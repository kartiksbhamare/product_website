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
      {/* Background circle */}
      <circle cx="16" cy="16" r="15" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
      
      {/* Scissors design */}
      <g transform="translate(8, 8)">
        {/* Left scissors blade */}
        <ellipse cx="4" cy="6" rx="2.5" ry="1.5" fill="white" opacity="0.9"/>
        <ellipse cx="4" cy="6" rx="1.5" ry="0.8" fill="#6366f1"/>
        
        {/* Right scissors blade */}
        <ellipse cx="12" cy="6" rx="2.5" ry="1.5" fill="white" opacity="0.9"/>
        <ellipse cx="12" cy="6" rx="1.5" ry="0.8" fill="#6366f1"/>
        
        {/* Scissors handles */}
        <circle cx="4" cy="10" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="12" cy="10" r="1.5" fill="white" opacity="0.9"/>
        
        {/* Center pivot */}
        <circle cx="8" cy="8" r="1" fill="white"/>
        
        {/* Scissors blades (lines) */}
        <line x1="4" y1="6" x2="8" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="6" x2="8" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        
        {/* Hair strands */}
        <path d="M8 2 Q10 4 8 6" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
        <path d="M6 2 Q8 4 6 6" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
        <path d="M10 2 Q12 4 10 6" stroke="white" strokeWidth="1" fill="none" opacity="0.7"/>
      </g>
    </svg>
  );
} 