import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      username: "@yourusername"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      username: "/in/yourprofile"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "mailto:your.email@example.com",
      username: "your.email@example.com"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Kozhikode, Kerala, India"
    },
    {
      icon: Mail,
      label: "Email",
      value: "vipinrajk026@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9495810118"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="gradient-card p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background border-border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="john.doe@example.com"
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="Project Discussion"
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              
              <Button className="w-full gradient-primary hover:glow-primary transition-smooth">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="gradient-card p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div className="gradient-card p-8 rounded-xl border border-primary/20">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Connect with Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/10 transition-smooth group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:glow-primary transition-smooth">
                      <social.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{social.name}</h4>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;