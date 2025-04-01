
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  year: number;
  badge?: string;
  github?: string;
}

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  
  const allProjects: Project[] = [
    {
      id: "learn-jenkins-app",
      title: "Learn Jenkins App",
      description: "An application for learning Jenkins CI/CD pipelines.",
      category: "devops",
      image: "https://images.unsplash.com/photo-1620912189875-3a851c8c7b61?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/learn-jenkins-app"
    },
    {
      id: "lua-practices",
      title: "Lua Practices",
      description: "Collection of Lua programming practices and examples.",
      category: "language",
      image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Private",
      github: "https://github.com/Ink442/lua_practices"
    },
    {
      id: "java-server-mongodb",
      title: "Java Server with MongoDB",
      description: "A Java server implementation with MongoDB integration.",
      category: "backend",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/java-server-with-mongodb"
    },
    {
      id: "ink442-github-io",
      title: "Ink442.github.io",
      description: "Personal GitHub Pages website with portfolio projects.",
      category: "web",
      image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/Ink442.github.io"
    },
    {
      id: "sever-analysis",
      title: "Sever Analysis",
      description: "Tool for analyzing server performance and metrics.",
      category: "devops",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/sever_analysis"
    },
    {
      id: "ink42",
      title: "Ink42",
      description: "Core library for various Ink-based projects.",
      category: "library",
      image: "https://images.unsplash.com/photo-1602529710584-458a995c8785?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/Ink42"
    },
    {
      id: "brightpix",
      title: "BrightPix",
      description: "A camera app made using the Flutter framework.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/BrightPix"
    },
    {
      id: "flavor-go",
      title: "Flavor Go",
      description: "A Go project for creating customizable backend services.",
      category: "backend",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Private",
      github: "https://github.com/Ink442/flavor_go"
    },
    {
      id: "thrive",
      title: "Thrive",
      description: "Application for personal growth and productivity tracking.",
      category: "web",
      image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1024&auto=format&fit=crop",
      year: 2024,
      badge: "Public",
      github: "https://github.com/Ink442/thrive"
    },
    {
      id: "image-to-insight",
      title: "ImageToInsight",
      description: "AI-powered image analysis and processing tool.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=1024&auto=format&fit=crop",
      year: 2023,
      badge: "Public",
      github: "https://github.com/Ink442/ImageToInsight"
    },
    {
      id: "django-note",
      title: "DjangoNote",
      description: "Note-taking application built with Django framework.",
      category: "web",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=1024&auto=format&fit=crop",
      year: 2023,
      badge: "Private",
      github: "https://github.com/Ink442/DjangoNote"
    },
    {
      id: "snake-and-ladders",
      title: "Snake and Ladders",
      description: "Classic Snake and Ladders game with a modern twist.",
      category: "game",
      image: "https://images.unsplash.com/photo-1618022260898-96f8794390c0?q=80&w=1024&auto=format&fit=crop",
      year: 2023,
      badge: "Public",
      github: "https://github.com/Ink442/snake-and-ladders"
    },
    {
      id: "phantom-folder",
      title: "Phantom Folder",
      description: "Invisible folder software for secure file storage.",
      category: "security",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1024&auto=format&fit=crop",
      year: 2023,
      badge: "Private",
      github: "https://github.com/Ink442/Phantom-Folder"
    }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(allProjects);
    } else {
      setVisibleProjects(allProjects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' },
    { id: 'game', label: 'Games' },
    { id: 'ai', label: 'AI' },
    { id: 'security', label: 'Security' },
    { id: 'library', label: 'Libraries' },
    { id: 'language', label: 'Languages' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Portfolio Header */}
        <section className="section pb-12 pt-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">My Projects</h1>
            <p className="text-lg text-muted-foreground">
              Exploring the digital cosmos through code, creativity, and technical challenges.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="rounded-full"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="section py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Link to={`/portfolio/${project.id}`}>
                  <div className="image-container mb-4 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg subtle-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.badge && (
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                            {project.badge}
                          </span>
                        )}
                        <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm font-medium px-3 py-1 bg-secondary rounded-full">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </div>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        <div className="text-sm text-muted-foreground">{project.year}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        
        {/* Callout Section */}
        <section className="section py-20 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif tracking-tight">Explore My GitHub</h2>
            <p className="text-primary-foreground/80">
              Check out my complete collection of projects and contributions.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-4 border-primary-foreground/20 hover:bg-primary-foreground/10">
              <a href="https://github.com/Ink442" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
