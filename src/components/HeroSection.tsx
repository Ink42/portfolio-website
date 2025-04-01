
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      const offset = scrollY * 0.2; // Parallax effect
      imageRef.current.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with space theme */}
      <div 
        ref={imageRef}
        className="absolute inset-0 -z-10 opacity-40 w-full"
        style={{
          backgroundImage: 'url("public/lovable-uploads/84063fb1-279a-4e92-84a3-8e178fda9206.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.1)',
        }}
      />
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/80 to-background" />
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-3xl space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm font-medium text-primary">
            <Code size={14} />
            <span>Welcome to My Orbit</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter leading-tight">
            Building Robust & <span className="text-primary">Scalable</span> <br className="hidden md:block" />
            Software Applications
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Passionate developer specializing in modern frameworks, API development, and creating exceptional user experiences with clean, maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <Link to="/portfolio">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://github.com/Ink42" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
