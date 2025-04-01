
import React from 'react';
import { Mail, Github, Linkedin, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-secondary py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <Code className="mr-2 h-5 w-5" />
            <span className="text-2xl font-bold tracking-tight">My Orbit</span>
          </div>
          <p className="text-muted-foreground max-w-xs">
            The universe is vast, and so is the world of code.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Navigation</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Connect</h3>
          <div className="flex space-x-3">
            <Button variant="ghost" size="icon" aria-label="Email" asChild>
              <a href="mailto:orbit@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a href="https://github.com/ink42" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn" asChild>
              <a href="https://www.linkedin.com/in/lindokuhle-dev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground text-xs">
            Drifting through code, projects, and late-night ideas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
