import { Mail, Instagram, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-body text-sm font-medium text-primary bg-pink-soft px-4 py-2 rounded-full">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-6 mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or interested in a custom crochet piece? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-up">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="How can I help you?" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Info
              </h3>
              <div className="space-y-6">
                <a 
                  href="mailto:hello@bleonykreationz.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email</p>
                    <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                      hello@bleonykreationz.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/bleonykreationz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Instagram className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Instagram</p>
                    <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors">
                      @bleonykreationz
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Location</p>
                    <p className="font-body font-medium text-foreground">
                      Working Remotely
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-soft to-accent/30 rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Custom Orders Welcome
              </h3>
              <p className="font-body text-muted-foreground">
                Looking for a custom crochet piece or a personalized brand design? 
                Let's create something special together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
