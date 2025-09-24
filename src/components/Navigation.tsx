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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-3 left-3 right-3 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "glass backdrop-blur-xl border border-primary/20 shadow-2xl rounded-xl animate-slide-down"
          : "glass backdrop-blur-md border border-primary/10 shadow-lg rounded-xl animate-fade-in"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={codoraLogo}
              alt="Codora AI Logo"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
              Codora AI
            </span>
          </div>

          {/* ✅ Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { label: "About", id: "about" },
              { label: "Services", id: "services" },
              { label: "Products", id: "products" },
              { label: "Reviews", id: "testimonials" },
              { label: "Team", id: "team" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary font-medium text-sm transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 rounded-lg glass flex items-center justify-center border border-primary/20 transition-all duration-300 hover:scale-110 hover:border-primary/40"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute top-1 left-0 w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2" : ""
                }`}
              ></span>
              <span
                className={`absolute top-2 left-0 w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute top-3 left-0 w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 mt-2 border-t border-primary/10 animate-slide-down">
            <div className="flex flex-col space-y-3 px-4">
              {[
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Products", id: "products" },
                { label: "Reviews", id: "testimonials" },
                { label: "Team", id: "team" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium text-sm hover:translate-x-2"
                >
                  {item.label}
                </button>
              ))}

              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-sm h-8 hover:translate-x-2 transition-all duration-300"
                >
                  Sign In
                </Button>
                <Button
                  variant="glow"
                  size="sm"
                  className="w-full text-sm h-8 hover:scale-105 transition-all duration-300"
                >
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
