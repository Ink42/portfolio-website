
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      content: "Working with Tokyo FUNK was an absolute pleasure. Their attention to detail and commitment to minimalist design principles perfectly aligned with our brand vision.",
      author: "Alex Chen",
      role: "Creative Director",
      company: "Horizon Studios"
    },
    {
      content: "The portfolio website they created for our gallery exceeded all expectations. Clean, sophisticated, and functional—exactly what we needed to showcase our artists' work.",
      author: "Mia Tanaka",
      role: "Gallery Owner",
      company: "Sakura Art Space"
    },
    {
      content: "Their unique blend of Japanese aesthetics with modern design principles resulted in a mobile app that our users absolutely love. Engagement metrics have increased by 40%.",
      author: "David Wong",
      role: "Product Manager",
      company: "Zen Digital"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section py-28 bg-primary text-primary-foreground overflow-hidden">
      <div 
        ref={sectionRef}
        className="relative max-w-4xl mx-auto px-6 opacity-0"
      >
        <div className="absolute top-0 left-0 opacity-10">
          <Quote size={120} />
        </div>
        
        <div className="relative z-10 space-y-10">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-500 absolute w-full",
                  index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
                )}
                style={{ 
                  position: index === activeIndex ? 'relative' : 'absolute' 
                }}
              >
                <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed mb-8">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-accent mr-4"></div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-primary-foreground/70 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="hover:bg-primary-foreground/10 border-primary-foreground/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="hover:bg-primary-foreground/10 border-primary-foreground/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
