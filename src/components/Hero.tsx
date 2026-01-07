import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block">
              <span className="font-body text-sm font-medium text-primary bg-pink-soft px-4 py-2 rounded-full">
                Brand & Graphic Designer
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight">
              Creating <span className="text-gradient">Beautiful</span> Brands
              & Handcrafted Art
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed">
              Welcome to BleonyKreationz — where creative design meets handmade charm. 
              I specialize in branding, graphic design, and unique crocheted creations 
              made with love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="xl">
                Shop Crochet
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl bg-card-gradient shadow-elevated overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-soft via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-display text-5xl text-primary">B</span>
                    </div>
                    <p className="font-display text-2xl text-foreground">BleonyKreationz</p>
                    <p className="font-body text-muted-foreground mt-2">Design & Craft Studio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
