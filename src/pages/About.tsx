
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const educationItems = [
    {
      period: "2023 - 2024",
      title: "Software Development",
      institution: "WeThinkCode_",
      description: "Gained technical skills and real-world software development experience, including teamwork, leadership, and project management."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="section py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium text-primary">
                About Me
              </div>
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
                Developer based in South Africa
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm a designer and developer focused on creating minimalist digital experiences.
              </p>
              <div className="pt-4">
                <Button asChild className="group">
                  <Link to="/contact">
                    Let's Work Together
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="image-container relative w-full">
              <img
                src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?q=80&w=2089&auto=format&fit=crop"
                alt="Designer at work"
                className="w-full h-auto rounded-lg subtle-border object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-4 right-4 p-3 bg-background rounded-lg subtle-border shadow-md">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="section py-20 bg-muted">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif tracking-tight text-center">My Story</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Hello, my name is Lindokuhle and I enjoy building software across different platforms and scales. My interest in full-stack development started in high school, and after finishing school, I dove deeper into software development. What began as a hobby soon became a passion.
                </p>
                
                <p>
                  I later attended WeThinkCode_, where I gained more than just coding skills. I learned how to build software in real-world settings—understanding the importance of setting up pipelines, testing, working in a team, and even leading one. These experiences gave me the skills to participate in hackathons, which helped strengthen my technical knowledge and reinforced my path as a developer.
                </p>
                
                <p>
                  I'm currently working on a project that I plan to publish on the Play Store—a game-related application that I'm excited to bring to life.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or diving into technical documentation to expand my knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="section py-20">
          <div className="max-w-4xl mx-auto">
            {/* Education */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-md bg-accent/30 text-accent-foreground">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-2xl font-serif">Education</h2>
              </div>
              
              <div className="space-y-8">
                {educationItems.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l border-border">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                    <div className="text-sm text-muted-foreground">{item.period}</div>
                    <h3 className="text-lg font-medium mt-1">{item.title}</h3>
                    <div className="text-primary">{item.institution}</div>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 space-y-4">
                <h3 className="text-xl font-medium">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Flutter", "TypeScript", "Django", "Flask", "Spring Boot", "Java", "Python", "Bash", "Google API", "Vim", "Testing and Debugging", "MongoDB", "Firebase", "GitHub Actions", "Docker"].map((skill) => (
                    <div 
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
