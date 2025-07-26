import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap,
  Github
} from 'lucide-react';
import React from 'react';

import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

import { RiVercelLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { SiPostman } from "react-icons/si";
import { CgNpm } from "react-icons/cg";

import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { SiRailway } from "react-icons/si";


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Next.js", icon: TbBrandNextjs },
        { name: "JavaScript", icon: IoLogoJavascript },
        { name: "CSS", icon: FaCss3Alt },
        { name: "HTML", icon: FaHtml5 },
        { name: "Bootstrap", icon: FaBootstrap },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Python", icon: FaPython },
        { name: "Django", icon: SiDjango },
        { name: "MySQL", icon: DiMysql },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Docker", icon: FaDocker },
        { name: "SQLite", icon: SiSqlite },
        { name: "Railway", icon: SiRailway },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ];

  const tools = [
    { name: "Git", icon: GitBranch },
    { name: "VS Code", icon: Code2 },
    { name: "GitHub", icon: FiGithub },
    { name: "Vercel", icon: RiVercelLine },
    { name: "Postman", icon: SiPostman },
    { name: "NPM", icon: CgNpm },
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
            Proficient in modern technologies and frameworks with a focus on
            creating scalable, maintainable, and user-friendly applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mb-16 px-4">
          <div className="w-full max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="relative group bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Floating Category Label */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md z-20">
                  {category.title}
                </div>

                {/* Skill Icons */}
                <div className="mt-8 grid grid-cols-3 gap-6 pb-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
                    >
                      {React.createElement(skill.icon, {
                        className: "w-8 h-8 text-white drop-shadow-md",
                      })}
                      <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-100 animate-ping transition-opacity duration-700 z-0"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Tools & Platforms
          </h3>
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