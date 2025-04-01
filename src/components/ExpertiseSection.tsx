import React, { useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  LayoutGrid,
  ServerCog,
  GitBranch
} from 'lucide-react';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ 
  icon, title, description, delay 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="bg-card p-8 rounded-lg subtle-border transition-all duration-300 hover:shadow-md opacity-0" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-5 p-3 inline-flex rounded-md bg-accent/30 text-accent-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ExpertiseSection: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description: "Comfortable working with React, Flutter, and TypeScript, focusing on building performant and user-friendly applications.",
    },
    {
      icon: <ServerCog size={24} />,
      title: "Backend Development",
      description: "Experience developing APIs with Django, Flask, and Spring Boot, with some exposure to microservices and serverless functions.",
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Familiar with SQL and NoSQL databases like MySQL, MongoDB, and Firebase, with a solid understanding of data modeling.",
    },
    {
      icon: <Layers size={24} />,
      title: "Full-Stack Integration",
      description: "Able to connect frontend and backend systems using RESTful APIs to build functional applications.",
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Building Robust & Scalable Software",
      description: "Passionate developer specializing in modern frameworks, API development, and creating exceptional user experiences with clean, maintainable code.",
    },
    {
      icon: <GitBranch size={24} />,
      title: "DevOps & CI/CD",
      description: "Some experience setting up automated testing and deployment pipelines with GitHub Actions and Docker.",
    },
  ];

  return (
    <section className="section py-28">
      <div className="space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Technical Expertise</h2>
          <p className="text-muted-foreground">
            Specialized development skills to bring your projects to life with efficiency and scalability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={area.title}
              icon={area.icon}
              title={area.title}
              description={area.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
