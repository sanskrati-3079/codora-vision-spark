import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Brain, Rocket, Shield, Globe, Users } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Codora Agent Studio",
      description: "Build, train, and deploy intelligent AI agents with our no-code platform. Perfect for businesses looking to automate complex workflows.",
      features: ["Visual Agent Builder", "Pre-built Templates", "Real-time Analytics", "Multi-platform Deployment"],
      icon: Brain,
      status: "Available",
      category: "Platform",
      gradient: "from-primary to-secondary"
    },
    {
      id: 2,
      title: "Codora Enterprise Suite",
      description: "Comprehensive AI solution for large organizations. Includes advanced security, custom integrations, and dedicated support.",
      features: ["Enterprise Security", "Custom Integrations", "24/7 Support", "SLA Guarantees"],
      icon: Shield,
      status: "Available",
      category: "Enterprise",
      gradient: "from-secondary to-accent"
    },
    {
      id: 3,
      title: "Codora API Gateway",
      description: "Powerful API infrastructure for connecting and orchestrating multiple AI agents across different platforms and services.",
      features: ["RESTful APIs", "Webhook Support", "Rate Limiting", "Developer Tools"],
      icon: Globe,
      status: "Available",
      category: "API",
      gradient: "from-accent to-primary"
    },
    {
      id: 4,
      title: "Codora Collaborative Workspace",
      description: "Team-based environment for building and managing AI agents collaboratively with real-time editing and version control.",
      features: ["Real-time Collaboration", "Version Control", "Team Management", "Shared Templates"],
      icon: Users,
      status: "Coming Soon",
      category: "Collaboration",
      gradient: "from-primary/50 to-secondary/50"
    },
    {
      id: 5,
      title: "Codora AutoScale Engine",
      description: "Intelligent scaling solution that automatically optimizes your AI agent performance based on demand and usage patterns.",
      features: ["Auto Scaling", "Performance Optimization", "Cost Management", "Load Balancing"],
      icon: Rocket,
      status: "Beta",
      category: "Infrastructure",
      gradient: "from-secondary/70 to-accent/70"
    },
    {
      id: 6,
      title: "Codora Intelligence Hub",
      description: "Advanced analytics and insights platform for monitoring, analyzing, and improving your AI agent performance.",
      features: ["Advanced Analytics", "Performance Insights", "Predictive Monitoring", "Custom Dashboards"],
      icon: Zap,
      status: "Coming Soon",
      category: "Analytics",
      gradient: "from-accent/60 to-primary/60"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Coming Soon":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-accent/20 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Rocket className="w-4 h-4 text-secondary" />
            <span className="text-primary">Our Products</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful AI Solutions
            </span>
            <br />
            <span className="text-foreground">for Every Need</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive suite of AI-powered products designed to transform 
            your business operations and accelerate your digital transformation journey.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className="service-card group hover:scale-105 transition-all duration-300 relative overflow-hidden border-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={`${getStatusColor(product.status)} border`}>
                        {product.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:border-primary group-hover:text-primary transition-all"
                      disabled={product.status === "Coming Soon"}
                    >
                      {product.status === "Coming Soon" ? "Notify Me" : "Learn More"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join thousands of companies already using Codora AI to automate workflows, 
              enhance productivity, and drive innovation. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;