import { Palette, Sparkles, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting unique brand identities that resonate with your audience",
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description: "Every pixel and stitch is placed with intention and care",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Passion drives every project, from logos to crochet creations",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-pink-soft via-accent/20 to-secondary overflow-hidden shadow-elevated">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center shadow-soft">
                      <span className="font-display text-6xl text-primary">B</span>
                    </div>
                    <p className="font-display text-3xl text-foreground">Bleony</p>
                    <p className="font-body text-muted-foreground mt-2">Designer & Maker</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <span className="font-body text-sm font-medium text-primary bg-pink-soft px-4 py-2 rounded-full">
                About Me
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Blending Design 
              <span className="text-gradient"> & Craft</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Hi, I'm the creative soul behind BleonyKreationz! With a passion for 
              visual storytelling and a love for handmade artistry, I help brands 
              find their unique voice while creating cozy crochet pieces that bring 
              warmth to everyday life.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Whether it's designing a memorable logo or crafting a one-of-a-kind 
              amigurumi, I pour my heart into every creation. My goal is to bring 
              beauty and meaning to everything I make.
            </p>

            <div className="grid gap-6 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={item.title} 
                  className="flex gap-4 items-start group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-soft flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
