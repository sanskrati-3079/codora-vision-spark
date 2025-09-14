import { Zap, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Codora AI
              </span>
            </div>
            <p className="text-muted-foreground">
              Building the future with intelligent agents that transform businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <Github className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-primary/50 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Customer Support Agents
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Workflow Automation
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Analytics Agents
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Security Monitoring
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Custom Solutions
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Careers
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Blog
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Case Studies
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Documentation
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                API Reference
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Support Center
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Terms of Service
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 Codora AI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Powered by cutting-edge artificial intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;