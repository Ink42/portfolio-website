
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Folder } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  image: string;
  year: number;
  badge?: string;
  github?: string;
  liveUrl?: string;
  features?: string[];
  technologies?: string[];
}

const projects: Project[] = [
  {
    id: "learn-jenkins-app",
    title: "Learn Jenkins App",
    description: "An application for learning Jenkins CI/CD pipelines.",
    longDescription: "This project was created to help developers learn Jenkins CI/CD pipelines in a practical way. It includes examples of different pipeline configurations, stages, and deployment strategies.",
    category: "devops",
    image: "https://images.unsplash.com/photo-1620912189875-3a851c8c7b61?q=80&w=1024&auto=format&fit=crop",
    year: 2024,
    badge: "Public",
    github: "https://github.com/ink42/learn-jenkins-app",
    features: [
      "CI/CD pipeline examples",
      "Jenkins configuration as code",
      "Automated testing integration",
      "Deployment strategies",
      "Pipeline visualization"
    ],
    technologies: ["Jenkins", "Docker", "Shell Scripting", "YAML", "CI/CD"]
  },
  {
    id: "brightpix",
    title: "BrightPix",
    description: "A camera app made using the Flutter framework.",
    longDescription: "BrightPix is a modern camera application built with Flutter. It features a clean, intuitive interface and advanced photography capabilities, making it easy for users to capture and edit stunning photos.",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1024&auto=format&fit=crop",
    year: 2024,
    badge: "Public",
    github: "https://github.com/ink42/BrightPix",
    liveUrl: "https://play.google.com/store/apps/details?id=com.example.brightpix",
    features: [
      "Advanced camera controls",
      "Real-time filters",
      "Photo editing tools",
      "Gallery management",
      "Social sharing integration"
    ],
    technologies: ["Flutter", "Dart", "Camera API", "Image Processing", "Material Design"]
  },
  {
    id: "java-server-mongodb",
    title: "Java Server with MongoDB",
    description: "A Java server implementation with MongoDB integration.",
    longDescription: "This project demonstrates how to build a robust server using Java and MongoDB. It includes RESTful API endpoints, data validation, and efficient database operations for scalable applications.",
    category: "backend",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1024&auto=format&fit=crop",
    year: 2024,
    badge: "Public",
    github: "https://github.com/ink42/java-server-with-mongodb",
    features: [
      "RESTful API implementation",
      "MongoDB integration",
      "Authentication and authorization",
      "Data validation",
      "Error handling and logging"
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "RESTful API", "JWT"]
  },
  // Add a default for unknown projects
  {
    id: "default",
    title: "Project Details",
    description: "Detailed information about this project is being assembled.",
    longDescription: "We're currently gathering more information about this project. Please check back later for a complete description of its features and technologies.",
    category: "other",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1024&auto=format&fit=crop",
    year: 2024,
    features: ["Coming soon..."],
    technologies: ["Various technologies"]
  }
];

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the project with the matching ID
    const foundProject = projects.find(p => p.id === id);
    
    // If not found, use the default project
    setProject(foundProject || projects.find(p => p.id === "default") || null);
  }, [id]);
  
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl">Loading project...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Back Navigation */}
        <div className="section pb-8">
          <Button variant="ghost" asChild className="flex items-center gap-1">
            <Link to="/portfolio">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
        
        {/* Project Header */}
        <section className="section pb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                {project.badge && (
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {project.badge}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-serif tracking-tight">{project.title}</h1>
              </div>
              
              <p className="text-lg text-muted-foreground">{project.longDescription || project.description}</p>
              
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <Button asChild variant="outline" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button asChild className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{project.id}</span>
                </div>
              </div>
            </div>
            
            <div className="image-container aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg subtle-border"
              />
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="section py-12 bg-muted">
          <div className="grid md:grid-cols-2 gap-16">
            {project.features && project.features.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-medium">Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-primary font-medium">{index + 1}</span>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-medium">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1.5 bg-secondary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="section py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif tracking-tight">Explore More Projects</h2>
            <p className="text-muted-foreground">
              Discover other creations from my digital orbit.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild>
                <Link to="/portfolio">View All Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/ink42" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
