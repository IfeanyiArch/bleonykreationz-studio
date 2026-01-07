import { ShoppingBag, Heart, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const categories = ["All", "Home", "Accessories", "Toys", "Baby"];

const ShopPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="font-body text-sm font-medium text-primary bg-pink-soft px-4 py-2 rounded-full border border-primary/10">
            Handmade with Love
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-6 mb-4">
            Crochet Shop
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece is lovingly handcrafted, making every item unique. 
            Discover cozy creations made just for you.
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 border-b border-border/50 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`font-body text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                    category === "All"
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10 bg-muted border-0"
                />
              </div>
              <Button variant="outline" size="icon" className="shrink-0 border-border/50">
                <Filter size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-border/30 hover:border-primary/20 hover:shadow-card transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-pink-soft to-white flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-soft">
                      <span className="font-display text-2xl text-primary">{product.name.charAt(0)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => e.preventDefault()}
                    className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-soft"
                  >
                    <Heart size={16} />
                  </button>
                  <span className="absolute top-3 left-3 font-body text-xs font-medium text-foreground/70 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-soft">
                    {product.category}
                  </span>
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-body text-base font-semibold text-primary">
                      ${product.price}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Button 
                    variant="soft" 
                    className="w-full" 
                    size="sm"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <ShoppingBag size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-pink-soft">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Custom Orders Welcome
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
            Looking for something special? I'd love to create a custom piece just for you. 
            Get in touch to discuss your ideas!
          </p>
          <Button variant="hero" size="lg">
            Request Custom Order
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;
