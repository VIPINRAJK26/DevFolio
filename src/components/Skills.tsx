import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Vue.js", level: 85, icon: "💚" },
        { name: "Next.js", level: 88, icon: "⚫" }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 92, icon: "💚" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 82, icon: "🍃" }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80, icon: "📱" },
        { name: "Flutter", level: 75, icon: "🦋" },
        { name: "iOS", level: 70, icon: "🍎" },
        { name: "Android", level: 72, icon: "🤖" }
      ]
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Docker", level: 88, icon: "🐳" },
        { name: "Kubernetes", level: 78, icon: "⚙️" },
        { name: "CI/CD", level: 82, icon: "🔄" }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch },
    { name: "VS Code", icon: Code2 },
    { name: "Figma", icon: Palette },
    { name: "Performance", icon: Zap }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with a focus on creating 
            scalable, maintainable, and user-friendly applications.
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="skill-card gradient-card p-6 rounded-xl border border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 gradient-card hover:glow-primary transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tool.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;