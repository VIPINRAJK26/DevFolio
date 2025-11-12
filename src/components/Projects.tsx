import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fleeby - Online shopping platform",
      description:
        "An e-commerce platform with React, Python, and REST API. Features include user authentication, product management, and admin dashboard.",
      image: "/fleeby.webp",
      tags: ["React", "Python", "Django", "REST API", "SQLite", "Tailwind CSS"],
      github: "#",
      live: "https://fleeby.in",
    },
    {
      title: "exedu - Hybrid AI Learning Platform",
      description:
        "Full-stack e-learning solution with React, Python, and REST API. Features include user authentication, course management and admin dashboard.",
      image: "/exedu.jpg",
      tags: ["React", "Python", "Django", "REST API", "SQLite", "Tailwind CSS"],
      github: "#",
      live: "https://exedu.in",
    },
    {
      title: "exedu - CRM ",
      description:
        "CRM/Dashboard for exedu with React, Python, and REST API. Features include user authentication, course management and admin dashboard.",
      image: "/exedu-CRM.jpg",
      tags: ["React", "Python", "Django", "REST API", "SQLite", "Tailwind CSS"],
      github: "#",
      live: "https://dashboard.exedu.in",
    },
    {
      title: "extechnology - AI Powered Software Development Services",
      description:
        "Website for AI-powered software development services. Responsive Modern website with smooth animations, dark theme, and optimized performance.",
      image: "/technology.jpg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "https://extechnology.in",
    },
    {
      title: "exbot - Whatsapp Automation",
      description:
        "Website for Whatsapp Automation.Minimalistic website with smooth animations and optimized performance.",
      image: "/exbot.jpg",
      tags: ["html", "css", "Bootstrap", "Framer Motion"],
      github: "#",
      live: "https://exbotupdate.netlify.app/",
    },
    {
      title: "Warrior - Solar Energy Dashboard",
      description:
        "Dashboard for solar energy management with data visualization and automated reporting features.",
      image: "/dash-board-min.jpg",
      tags: ["React", "REST API", "MySQL", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "https://dahsboard.warriorind.in",
    },
    {
      title: "Warrior - Solar Power & Energy Solutions",
      description:
        "e-commerce website for solar power and energy solutions. Responsive Modern website with smooth animations and optimized performance.",
      image: "/warrior-min.jpg",
      tags: ["React", "Django", "Docker", "Bootstrap"],
      github: "#",
      live: "https://warriorind.in",
    },
    {
      title: "P K Stones",
      description:
        "website for displaying stone products created with React and Python ",
      image: "/stone.jpg",
      tags: ["React", "REST API", "MySQL", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "https://pkstones.com",
    },

    {
      title: "TEZLA - Energy Solutions",
      description:
        "e-commerce website for energy solutions. Responsive Modern website with smooth animations and optimized performance.",
      image: "/tezla-min.jpg",

      tags: ["React", "Python", "Django", "REST API", "SQLite", "Tailwind CSS"],
      github: "#",
      live: "https://tezla.in",
    },
    {
      title: "SUPER MARINE MOTOR CYCLES & JET SKI L.L.C.",
      description:
        "Booking platform for motor cycles and jet skis. Responsive Modern website with smooth animations and optimized performance.",
      image: "/super-marine-min.jpg",
      tags: [
        "React",
        "Python",
        "Framer Motion",
        "REST API",
        "SQLite",
        "Tailwind CSS",
      ],

      github: "#",
      live: "https://super-marine-frontend.vercel.app/",
    },
    {
      title: "CATTA FOOTWEAR",
      description:
        "Footwear website for Catta Footwear. Responsive Modern website with smooth animations and optimized performance.",
      image: "/catta-min.jpg",
      tags: ["React", "Bootstrap", "CSS"],

      github: "#",
      live: "https://catta.in",
    },
    {
      title: "ABACCA FOOTWEAR",
      description:
        "Footwear website for Catta Footwear. Responsive Modern website with smooth animations and optimized performance.",
      image: "/abaca-min.jpg",
      tags: ["React", "Bootstrap", "CSS"],
      github: "#",
      live: "https://abacafootwear.com",
    },
    {
      title: "TWINKLE Offset Press",
      description:
        "Frontend for Twinkle Offset Press, a printing company. Responsive Modern website with smooth animations and optimized performance.",
      image: "/twinkle-min.jpg",
      tags: ["React", "Tailwind CSS", "TypeScript"],

      github: "#",
      live: "https://twinkleoffset.netlify.app/",
    },
    {
      title: "AURA Car Wash",
      description:
        "Frontend UI for AURA Car Wash, a car wash company. Responsive Modern website with smooth animations and optimized performance.",
      image: "/car-wash-min.jpg",
      tags: ["React", "Tailwind CSS", "TypeScript"],

      github: "#",
      live: "https://twinkleoffset.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Other Projects Grid */}
        <div className="text-center mb-12">
          <h3
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-2xl md:text-4xl font-semibold mb-8 text-foreground"
          >
            Featured Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="project-card gradient-card rounded-xl overflow-hidden border border-primary/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-primary-foreground" />
                  </a>
                  <a
                    href={project.github}
                    className="w-8 h-8 rounded-full bg-foreground/90 flex items-center justify-center hover:bg-foreground transition-colors"
                  >
                    <Github className="w-4 h-4 text-background" />
                  </a>
                </div>
              </div>

              <div className="p-4">
                <h4
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  className="text-lg font-semibold mb-2 text-foreground"
                >
                  {project.title}
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="text-sm text-muted-foreground mb-3 line-clamp-2"
                >
                  {project.description}
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  className="flex flex-wrap gap-1"
                >
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium rounded bg-muted text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            title="Github"
            href="https://github.com/VIPINRAJK26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              data-aos="fade-up"
              data-aos-duration="1400"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
