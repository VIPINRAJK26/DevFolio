import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppButton from "@/components/ui/whatspp";


const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Observe all sections for reveal animations
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
