import { Brain, Zap, Shield, Infinity } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Intelligence",
      description: "Our AI agents leverage cutting-edge machine learning and neural networks to deliver human-like decision making."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy and scale AI solutions instantly with our optimized infrastructure and real-time processing capabilities."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols ensure your data and AI agents operate with complete privacy and protection."
    },
    {
      icon: Infinity,
      title: "Infinite Scalability",
      description: "From startups to Fortune 500 companies, our AI agents scale seamlessly with your business growth."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Codora AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're pioneering the future of artificial intelligence by creating intelligent agents 
            that don't just automate tasks—they think, learn, and evolve with your business.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-20 glow-border">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary">Our Mission</h3>
            <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
              At Codora.ai, our mission is to deliver expert-built AI agents and tools that automate complex tasks, streamline decision-making, and scale effortlessly — starting with our intelligent hackathon evaluation platform. We bridge deep AI expertise with agile freelance execution to make powerful, production-ready AI accessible to all.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="service-card rounded-xl p-6 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-muted-foreground">AI Agents Deployed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              91.9%
            </div>
            <p className="text-muted-foreground">Uptime Guarantee</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-muted-foreground">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;