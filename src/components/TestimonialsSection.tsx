import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Building2, Lightbulb } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sandeep",
      role: "Oracle HCM Engineer",
      company: "TechFlow Innovations",
      industry: "Software Development",
      avatar: "SC",
      rating: 5,
      content: "Codora AI has revolutionized our development workflow. We've reduced our project delivery time by 40% and our team's productivity has skyrocketed. The AI agents handle repetitive tasks seamlessly, allowing our developers to focus on creative problem-solving.",
      highlight: "40% faster delivery",
      // companySize: "200+ employees"
    },
    {
      id: 2,
      name: "Knee Lathur",
      role: "VP of Operations",
      company: "Pacific Corporate Ltd.",
      industry: "Logistics & Supply Chain",
      avatar: "MR",
      rating: 5,
      content: "The automation capabilities are incredible. Our customer service response time improved by 60%, and we've eliminated manual data entry errors completely. Codora's AI agents work 24/7, providing consistent service quality.",
      highlight: "60% faster response time",
      // companySize: "500+ employees"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "BioTech Innovations",
      industry: "Healthcare & Research",
      avatar: "EW",
      rating: 5,
      content: "Codora AI has transformed our research processes. The intelligent data analysis and pattern recognition capabilities have accelerated our research timeline by months. It's like having a brilliant AI research assistant working around the clock.",
      highlight: "Months of research saved",
      // companySize: "150+ employees"
    },
    // {
    //   id: 4,
    //   name: "James Thompson",
    //   role: "Digital Marketing Director",
    //   company: "Creative Solutions Agency",
    //   industry: "Marketing & Advertising",
    //   avatar: "JT",
    //   rating: 5,
    //   content: "Our campaign performance has improved dramatically since implementing Codora AI. The agents optimize our ad spending in real-time and generate insights we never could have discovered manually. ROI increased by 85%!",
    //   highlight: "85% ROI increase",
    //   // companySize: "50+ employees"
    // },
    // {
    //   id: 5,
    //   name: "Lisa Park",
    //   role: "Chief Financial Officer",
    //   company: "FinanceFirst Solutions",
    //   industry: "Financial Services",
    //   avatar: "LP",
    //   rating: 5,
    //   content: "The accuracy and speed of financial analysis with Codora AI is outstanding. We've reduced reporting time from days to hours while improving accuracy. The compliance monitoring features give us complete peace of mind.",
    //   highlight: "Days to hours reporting",
    //   // companySize: "300+ employees"
    // },
    // {
    //   id: 6,
    //   name: "David Kim",
    //   role: "Head of Customer Success",
    //   company: "RetailMax Solutions",
    //   industry: "E-commerce & Retail",
    //   avatar: "DK",
    //   rating: 5,
    //   content: "Customer satisfaction scores increased by 45% after deploying Codora's AI agents. The personalized customer interactions and proactive support have transformed our customer experience completely.",
    //   highlight: "45% satisfaction increase",
    //   // companySize: "400+ employees"
    // }
  ];

  const stats = [
    { number: "10+", label: "Happy Customers", icon: Users },
    { number: "91.9%", label: "Uptime Guarantee", icon: Building2 },
    { number: "20+", label: "Tasks Automated", icon: Lightbulb },
  ];

  const getIndustryColor = (industry: string) => {
    const colors = {
      "Software Development": "bg-blue-100 text-blue-800 border-blue-200",
      "Logistics & Supply Chain": "bg-green-100 text-green-800 border-green-200",
      "Healthcare & Research": "bg-purple-100 text-purple-800 border-purple-200",
      "Marketing & Advertising": "bg-pink-100 text-pink-800 border-pink-200",
      "Financial Services": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "E-commerce & Retail": "bg-orange-100 text-orange-800 border-orange-200",
    };
    return colors[industry as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-secondary/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-accent/10 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-primary/10 rounded-full animate-pulse delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full text-sm font-medium border border-primary/20 mb-6">
            <Quote className="w-4 h-4 text-secondary" />
            <span className="text-primary">Customer Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how businesses across industries are transforming their operations 
            and achieving remarkable results with Codora AI's intelligent automation solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="service-card group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Highlight */}
                <div className="mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold">
                    {testimonial.highlight}
                  </Badge>
                </div>

                {/* Author Info */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {testimonial.role}
                    </p>
                    <p className="text-xs font-medium text-foreground mb-2">
                      {testimonial.company}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getIndustryColor(testimonial.industry)}`}
                      >
                        {testimonial.industry}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.companySize}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ready to experience the transformation that thousands of businesses are already enjoying? 
              Let Codora AI help you achieve similar results and take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Your Success Story
              </button>
              <button className="px-8 py-3 border border-primary/20 text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300">
                View More Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;