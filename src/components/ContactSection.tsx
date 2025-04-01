
import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  const handleSayHello = () => {
    const email = 'lindomash001@gmail.com'; 
    const subject = 'Hello from Portfolio Site';
    const body = 'Hi there,\n\nI wanted to get in touch...';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section py-28">
      <div className="space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground">
            Although I'm not currently looking for any new opportunities, my inbox is 
            always open. Whether you have a question or just want to say hi, I'll try my 
            best to get back to you!
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleSayHello}
            variant="secondary"
            className="animate-fade-in hover:scale-105 transition-transform"
          >
            Say Hello
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-accent/30 text-accent-foreground">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-muted-foreground">lindomash001@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-md bg-accent/30 text-accent-foreground">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Location</h3>
              <p className="text-muted-foreground">South Africa, Johannesburg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
