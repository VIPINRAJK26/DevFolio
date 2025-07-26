import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "exedu - Hybrid AI Learning Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "https://exedu.in",
    },
    {
      title: "extechnology - AI Powered Software Development Services",
      description:
        "Responsive portfolio website with smooth animations, dark theme, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "https://extechnology.in",
    },
    {
      title: "exbot - Whatsapp Automation",
      description:
        "Responsive portfolio website with smooth animations, dark theme, and optimized performance.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "https://exbotupdate.netlify.app/",
    },
    {
      title: "Warrior - Solar Energy Dashboard",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "#",
      live: "https://dahsboard.warriorind.in",
    },
    {
      title: "Warrior - Solar Power & Energy Solutions",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "OpenWeather API"],
      github: "#",
      live: "https://warriorind.in",
    },
    {
      title: "P K Stones",
      description:
        "Analytics dashboard for social media management with data visualization and automated reporting features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Next.js", "Chart.js", "Python", "FastAPI"],
      github: "#",
      live: "https://pkstones.com",
    },

    {
      title: "TEZLA - Energy Solutions",
      description:
        "Real-time chat application with AI integration, message encryption, and file sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      tags: ["React", "WebSocket", "OpenAI", "Express"],
      github: "#",
      live: "https://tezla.in",
    },
    {
      title: "SUPER MARINE MOTOR CYCLES & JET SKI L.L.C.",
      description:
        "Real-time chat application with AI integration, message encryption, and file sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      tags: ["React", "WebSocket", "OpenAI", "Express"],
      github: "#",
      live: "https://tezla.in",
    },
    {
      title: "CATTA FOOTWEAR",
      description:
        "Real-time chat application with AI integration, message encryption, and file sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      tags: ["React", "WebSocket", "OpenAI", "Express"],
      github: "#",
      live: "https://catta.in",
    },
    {
      title: "ABACCA FOOTWEAR",
      description:
        "Real-time chat application with AI integration, message encryption, and file sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      tags: ["React", "WebSocket", "OpenAI", "Express"],
      github: "#",
      live: "https://abacafootwear.com",
    },
    {
      title: "TWINKLE Offset Press",
      description:
        "Real-time chat application with AI integration, message encryption, and file sharing capabilities.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      tags: ["React", "WebSocket", "OpenAI", "Express"],
      github: "#",
      live: "https://twinkleoffset.netlify.app/",
    },
  ];

  // const featuredProjects = projects.filter(p => p.featured);

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
          <Button
            variant="outline"
            size="lg"
            data-aos="fade-up"
            data-aos-duration="1400"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
