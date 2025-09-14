import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-light-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay for light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/50" />
      
      {/* Floating Elements for light theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/40 rounded-full animate-glow-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/40 rounded-full animate-glow-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-accent/40 rounded-full animate-glow-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-glow-pulse delay-1500" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-8 animate-slide-up">
          {/* Badge for light theme */}
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-primary">Building the Future with Intelligent Agents</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Codora AI
            </span>
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where Engineers Infuse 
            <span className="text-secondary font-semibold"> Code with Aura </span>
             for Effortless Agents.
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deploy cutting-edge AI agents tailored to your needs. Scale your operations, 
            automate workflows, and unlock unprecedented insights with Codora AI.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" className="group">
              Explore Solutions
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl">
              Contact Us
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-12 text-sm text-muted-foreground">
            <p>Trusted by enterprise clients worldwide</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade for light theme */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;