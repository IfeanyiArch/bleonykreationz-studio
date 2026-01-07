import { ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Cozy Blanket",
    price: 85,
    description: "Hand-crocheted throw blanket in soft cotton blend",
  },
  {
    id: 2,
    name: "Amigurumi Bunny",
    price: 35,
    description: "Adorable handmade stuffed bunny toy",
  },
  {
    id: 3,
    name: "Granny Square Bag",
    price: 55,
    description: "Vintage-style crochet tote bag",
  },
];

const Shop = () => {
  return (
    <section id="shop" className="py-24 bg-secondary/50">
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

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-pink-soft via-secondary to-card flex items-center justify-center">
                  <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center shadow-soft">
                    <span className="font-display text-3xl text-primary">{product.name.charAt(0)}</span>
                  </div>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-border">
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
          <Link to="/shop">
            <Button variant="hero" size="lg">
              View All Products
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shop;
