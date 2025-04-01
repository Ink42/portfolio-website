
import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-serif tracking-tighter">404</h1>
          <h2 className="text-2xl font-medium">Page not found</h2>
        </div>
        
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild variant="default" size="lg" className="mt-6 group">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
