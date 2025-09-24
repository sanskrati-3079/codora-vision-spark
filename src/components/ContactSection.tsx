import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss how our intelligent agents can solve your unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8 animate-slide-up">
            <div className="rounded-2xl p-8 border border-border bg-background shadow-md relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send us a message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your AI requirements..."
                    required
                    className="resize-none"
                  />
                </div>

                <Button variant="glow" className="w-full group" type="submit">
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info (unchanged) */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="space-y-6">
              <div className="service-card rounded-xl p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Email Us</h4>
                    <p className="text-muted-foreground">codora.ai@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="service-card rounded-xl p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Call Us</h4>
                    <p className="text-muted-foreground">+91 9984845854</p>
                    <p className="text-muted-foreground">+91 9359572867</p>
                  </div>
                </div>
              </div>

              <div className="service-card rounded-xl p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Visit Us</h4>
                    <p className="text-muted-foreground">
                      Vrindapuram, Mathura<br />
                      Uttar Pradesh, India - 281406
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-border bg-background shadow-md">
              <h4 className="text-xl font-semibold text-foreground mb-4">Why Choose Codora AI?</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm"><div className="w-2 h-2 rounded-full bg-secondary mr-3" /><span className="text-muted-foreground">Free initial consultation</span></div>
                <div className="flex items-center text-sm"><div className="w-2 h-2 rounded-full bg-secondary mr-3" /><span className="text-muted-foreground">Custom AI solutions</span></div>
                <div className="flex items-center text-sm"><div className="w-2 h-2 rounded-full bg-secondary mr-3" /><span className="text-muted-foreground">Enterprise-grade security</span></div>
                <div className="flex items-center text-sm"><div className="w-2 h-2 rounded-full bg-secondary mr-3" /><span className="text-muted-foreground">24/7 technical support</span></div>
                <div className="flex items-center text-sm"><div className="w-2 h-2 rounded-full bg-secondary mr-3" /><span className="text-muted-foreground">Proven track record</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
