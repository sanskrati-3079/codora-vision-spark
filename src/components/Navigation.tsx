import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import codoraLogo from "@/assets/codora-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-3 left-3 right-3 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'glass backdrop-blur-xl border border-primary/20 shadow-2xl rounded-xl animate-slide-down' 
        : 'glass backdrop-blur-md border border-primary/10 shadow-lg rounded-xl animate-fade-in'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo with uploaded image */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <img 
              src={codoraLogo} 
              alt="Codora AI Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
              Codora AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium text-sm relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            {/* <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-foreground hover:text-primary text-sm h-8 px-3 transition-all duration-300 hover:scale-105">
                Sign In
              </Button>
              <Button variant="glow" size="sm" className="text-sm h-8 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Sign Up
              </Button>
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 rounded-lg glass flex items-center justify-center border border-primary/20 transition-all duration-300 hover:scale-110 hover:border-primary/40"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute top-1 left-0 w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : ''}`}></span>
              <span className={`absolute top-2 left-0 w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-3 left-0 w-5 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 mt-2 border-t border-primary/10 animate-slide-down">
            <div className="flex flex-col space-y-3 px-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-2"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm h-8 hover:translate-x-2 transition-all duration-300">
                  Sign In
                </Button>
                <Button variant="glow" size="sm" className="w-full text-sm h-8 hover:scale-105 transition-all duration-300">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;