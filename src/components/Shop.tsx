import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Cozy Blanket",
    price: 85,
    description: "Hand-crocheted throw blanket in soft cotton blend",
    color: "from-pink-soft to-accent/20",
  },
  {
    id: 2,
    name: "Amigurumi Bunny",
    price: 35,
    description: "Adorable handmade stuffed bunny toy",
    color: "from-accent/30 to-pink-soft",
  },
  {
    id: 3,
    name: "Granny Square Bag",
    price: 55,
    description: "Vintage-style crochet tote bag",
    color: "from-secondary to-pink-soft/40",
  },
  {
    id: 4,
    name: "Baby Booties Set",
    price: 28,
    description: "Soft crochet booties for newborns",
    color: "from-pink-soft/70 to-cream",
  },
  {
    id: 5,
    name: "Plant Hanger",
    price: 42,
    description: "Macramé-style crochet plant holder",
    color: "from-cream to-accent/30",
  },
  {
    id: 6,
    name: "Winter Beanie",
    price: 32,
    description: "Warm chunky knit winter hat",
    color: "from-accent/20 to-secondary",
  },
];

const Shop = () => {
  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-body text-sm font-medium text-primary bg-pink-soft px-4 py-2 rounded-full">
            Handmade with Love
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-6 mb-4">
            Crochet Shop
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is lovingly handcrafted, making every item unique. 
            Discover cozy creations made just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className={`aspect-square bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-background/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="font-display text-3xl text-primary">{product.name.charAt(0)}</span>
                  </div>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-body text-lg font-semibold text-primary">
                    ${product.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {product.description}
                </p>
                <Button variant="soft" className="w-full">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
