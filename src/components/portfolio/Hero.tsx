import profileImage from '../../assets/profile.jpeg';
import { Mail, Linkedin, ChevronDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Meghavath Madhu Nandana profile photo"
          className="w-40 h-40 mx-auto mb-6 rounded-full object-cover border-4 border-primary shadow-lg"
        />

        <p className="text-primary font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Meghavath</span>
          <br />
          <span className="text-foreground">Madhu Nandana</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
          UI / Graphic Designer & Computer Science Student
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Button asChild>
            <a href="mailto:23211a05j6@bvrit.ac.in">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>

          {/* Resume Button (Updated Link) */}
          <Button variant="secondary" asChild>
            <a
              href="https://drive.google.com/file/d/16Gx_fOksV4BTGGa5GG9Eou75Q3Lf8kVG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </a>

    </section>
  );
}
