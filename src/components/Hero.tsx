import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-90" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-lg float-delayed" />
      <div className="absolute bottom-32 left-20 w-12 h-12 border border-accent/40 rounded-full float" />

      {/* Main content */}
      <div
        className={`container mx-auto px-6 text-center z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            Designing interfaces. Building APIs. Delivering value
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Code-driven UI architect, obsessed with clean design & performance —
            built with React & Python
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects">
              <Button
                size="lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                className="gradient-primary hover:glow-primary transition-smooth"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              title="Github"
              href="https://github.com/VIPINRAJK26"
              data-aos="fade-up"
              data-aos-duration="1100"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth hover:glow-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              title="Linkedin"
              href="www.linkedin.com/in/vipinraj26"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-duration="1200"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth hover:glow-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              title="Email"
              href="mailto:vipinrajk026@gmail.com"
              data-aos="fade-up"
              data-aos-duration="1300"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth hover:glow-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
