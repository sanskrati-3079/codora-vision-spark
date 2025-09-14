import { Bot, MessageSquare, BarChart3, Shield, Workflow, Brain } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Customer Support Agents",
      description: "Intelligent chatbots that understand context, emotion, and intent to provide human-like customer service 24/7.",
      features: ["Natural Language Processing", "Multi-language Support", "Sentiment Analysis", "Escalation Management"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "AI agents that streamline complex business processes, reducing manual work and increasing efficiency.",
      features: ["Process Optimization", "Task Scheduling", "Error Detection", "Performance Monitoring"]
    },
    {
      icon: BarChart3,
      title: "Analytics Agents",
      description: "Data-driven AI that transforms raw information into actionable insights for strategic decision making.",
      features: ["Predictive Analytics", "Real-time Reporting", "Pattern Recognition", "Trend Forecasting"]
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Proactive AI agents that detect threats, monitor vulnerabilities, and protect your digital assets.",
      features: ["Threat Detection", "Anomaly Monitoring", "Incident Response", "Compliance Tracking"]
    },
    {
      icon: Brain,
      title: "Intelligent Assistants",
      description: "Personal AI agents that learn your preferences and help optimize productivity and decision-making.",
      features: ["Personal Learning", "Smart Scheduling", "Content Curation", "Decision Support"]
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
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
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