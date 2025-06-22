import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <Image
      src="/bot-logo.svg"
      alt="AI Bot Logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
} 