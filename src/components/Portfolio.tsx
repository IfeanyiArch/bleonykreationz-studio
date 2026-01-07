import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Bloom Bakery",
    category: "Brand Identity",
    description: "Complete brand identity for an artisan bakery",
    color: "from-pink-soft to-accent/30",
  },
  {
    id: 2,
    title: "Luna Wellness",
    category: "Logo Design",
    description: "Minimalist logo for a wellness studio",
    color: "from-accent/20 to-pink-soft",
  },
  {
    id: 3,
    title: "Petals & Co",
    category: "Packaging Design",
    description: "Elegant packaging for a floral boutique",
    color: "from-secondary to-pink-soft/50",
  },
  {
    id: 4,
    title: "Sunrise Café",
    category: "Brand Identity",
    description: "Warm and inviting brand for a local café",
    color: "from-pink-soft/60 to-cream",
  },
  {
    id: 5,
    title: "Meadow Events",
    category: "Marketing Materials",
    description: "Event collateral and social media designs",
    color: "from-accent/30 to-secondary",
  },
  {
    id: 6,
    title: "Artisan Goods",
    category: "E-commerce Design",
    description: "Online store design for handmade products",
    color: "from-cream to-pink-soft",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-body text-sm font-medium text-primary bg-pink-soft px-4 py-2 rounded-full">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-6 mb-4">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of branding and design projects that tell unique stories 
            and create lasting impressions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
                <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <div className="text-center p-6 transform group-hover:scale-105 transition-transform duration-500">
                    <span className="font-display text-4xl text-primary/60">{item.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-body text-xs font-medium text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-soft">
                    <ExternalLink size={18} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
