import { Bot, MessageSquare, BarChart3, Shield, Workflow, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AutoDash – Automatic Dashboards from Your Data",
      description: "AutoDash is your instant data storytelling companion. Instead of spending hours cleaning, visualizing, and formatting datasets, AutoDash does it for you—turning raw, messy inputs into polished dashboards in seconds. Whether you are a business analyst, student, or founder, this agent makes insights accessible without requiring technical expertise.",
      features: ["Seamless Data Integration", "AI-Powered Visualization", "Real-Time Updates", "Customization","One-Click Export"]
    },
    {
      icon: Workflow,
      title: "HackEval – Hackathon Evaluation Agent",
      description: "HackEval is built to modernize hackathon judging by eliminating manual bias and subjectivity. It ensures fairness, transparency, and speed in evaluating multiple teams and projects, giving organizers a professional edge while improving the participant experience.",
      features: ["AI-Powered Scoring", "Bias-Free Judging", "Instant Feedback", "Team Ranking","Report Generation"]
    },
    {
      icon: BarChart3,
      title: "SmaranAI – Voice Calendar Assistant",
      description: "SmaranAI is like having your own personal secretary, available 24/7. It helps you stay on top of your schedule with voice-powered commands, context-aware event creation, and proactive reminders—making productivity effortless.",
      features: ["Voice Commands", "Smart Scheduling", "Cross-Platform Sync", "Context Awareness","Proactive Alerts","Multi-Language Support"]
    },
    {
      icon: Shield,
      title: "SafarSaathi – Automated Itinerary Planner",
      description: "SafarSaathi is your AI-powered travel buddy that designs seamless itineraries tailored to your budget, preferences, and travel style. From solo trips to group vacations, it takes away the stress of planning so you can focus on enjoying your journey.",
      features: ["Personalized Itineraries", "Smart Route Optimization", "Local Recommendations", "Integrated Maps","Collaborative Planning","Booking Integration"]
    },
    {
      icon: Brain,
      title: "Pokémon Data Resource",
      description: "The Pokémon Data Resource acts as a comprehensive encyclopedia, giving developers and AI models structured access to Pokémon information. From base stats to evolution chains, it ensures that all essential game data is available for both learning and simulation purposes.",
      features: ["Typing System", "Abilities & Effects", "Moves Database", "Evolution Chains","Sprites & Visual Data"]
    },
    {
      icon: Bot,
      title: "Custom AI Solutions",
      description: "Bespoke AI agents tailored to your specific industry needs and business requirements.",
      features: ["Industry Expertise", "Custom Training", "API Integration", "Scalable Architecture"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI agent solutions designed to transform every aspect of your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card rounded-2xl p-8 h-full group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-8 md:p-12 glow-border">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Deploy Your AI Agents?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with a free consultation and discover how our AI agents can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hero-button px-8 py-3 rounded-lg font-semibold">
                Start Free Consultation
              </button>
              <button className="glass px-8 py-3 rounded-lg font-medium text-primary border-primary/20 hover:border-primary/50 transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;