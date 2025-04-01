
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tech: string[];
  index: number;
  badge?: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ 
  title, description, image, link, github, tech, index, badge 
}) => {
  const projectRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={projectRef} 
      className={cn(
        "grid md:grid-cols-2 gap-8 items-center opacity-0",
        index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
      )}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      <div className={cn(
        "space-y-4",
        index % 2 === 0 ? "md:order-1" : "md:order-2"
      )}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium">{title}</h3>
          {badge && (
            <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item) => (
            <span key={item} className="text-xs px-2 py-1 bg-secondary rounded-full">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          <Button variant="ghost" asChild className="group p-0 h-auto">
            <Link to={link} className="flex items-center text-foreground">
              View Project 
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
          {github && (
            <Button variant="ghost" asChild className="group p-0 h-auto">
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground">
                View Code
                <Github className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <div className={cn(
        "image-container aspect-[4/3]",
        index % 2 === 0 ? "md:order-2" : "md:order-1"
      )}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg subtle-border"
        />
      </div>
    </div>
  );
};

const FeaturedWork: React.FC = () => {
  const featuredProjects = [
    {
      title: "BrightPix",
      description: "A camera app made using the Flutter framework. Implements modern UI design principles and provides a seamless photography experience.",
      image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1024&auto=format&fit=crop",
      link: "/portfolio/brightpix",
      github: "https://github.com/ink42/BrightPix",
      badge: "Public",
      tech: ["Flutter", "Dart", "Camera API", "UI/UX Design"]
    },
    {
      title: "Flavor Go",
      description: "A Go-based project focused on performance and scalability. Implements modern backend architecture patterns for robust application development.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1024&auto=format&fit=crop",
      link: "/portfolio/flavor-go",
      github: "https://github.com/ink42/flavor_go",
      badge: "Private",
      tech: ["Go", "Backend", "API", "Performance"]
    },
    {
      title: "Java Server with MongoDB",
      description: "A robust server implementation using Java and MongoDB. Provides scalable data storage and efficient querying capabilities.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1024&auto=format&fit=crop",
      link: "/portfolio/java-server",
      github: "https://github.com/ink42/java-server-with-mongodb",
      badge: "Public",
      tech: ["Java", "MongoDB", "Server", "Database"]
    },
  ];

  return (
    <section className="section bg-muted py-28">
      <div className="space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of my most significant development work from my orbit through the digital cosmos.
          </p>
        </div>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center pt-8">
          <Button asChild>
            <Link to="/portfolio">Explore All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
