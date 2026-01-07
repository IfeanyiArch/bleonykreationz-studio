import { ShoppingBag, Heart, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const allProducts = [
  {
    id: 1,
    name: "Cozy Blanket",
    price: 85,
    description: "Hand-crocheted throw blanket in soft cotton blend",
    category: "Home",
  },
  {
    id: 2,
    name: "Amigurumi Bunny",
    price: 35,
    description: "Adorable handmade stuffed bunny toy",
    category: "Toys",
  },
  {
    id: 3,
    name: "Granny Square Bag",
    price: 55,
    description: "Vintage-style crochet tote bag",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Baby Booties Set",
    price: 28,
    description: "Soft crochet booties for newborns",
    category: "Baby",
  },
  {
    id: 5,
    name: "Plant Hanger",
    price: 42,
    description: "Macramé-style crochet plant holder",
    category: "Home",
  },
  {
    id: 6,
    name: "Winter Beanie",
    price: 32,
    description: "Warm chunky knit winter hat",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Table Runner",
    price: 65,
    description: "Elegant lace crochet table runner",
    category: "Home",
  },
  {
    id: 8,
    name: "Amigurumi Bear",
    price: 38,
    description: "Cuddly handmade teddy bear",
    category: "Toys",
  },
  {
    id: 9,
    name: "Market Bag",
    price: 45,
    description: "Reusable mesh crochet shopping bag",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Baby Cardigan",
    price: 52,
    description: "Delicate crochet cardigan for infants",
    category: "Baby",
  },
  {
    id: 11,
    name: "Coaster Set",
    price: 18,
    description: "Set of 4 decorative crochet coasters",
    category: "Home",
  },
  {
    id: 12,
    name: "Headband",
    price: 22,
    description: "Stylish ear warmer headband",
    category: "Accessories",
  },
];

const categories = ["All", "Home", "Accessories", "Toys", "Baby"];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-pink-soft to-background">
        <div className="container mx-auto px-6 text-center">
          <span className="font-body text-sm font-medium text-primary bg-card px-4 py-2 rounded-full">
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
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`font-body text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
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
                  className="pl-10 bg-background"
                />
              </div>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-card transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-pink-soft via-secondary to-card flex items-center justify-center">
                    <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center shadow-soft">
                      <span className="font-display text-2xl text-primary">{product.name.charAt(0)}</span>
                    </div>
                  </div>
                  <button className="absolute top-3 right-3 w-9 h-9 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-border">
                    <Heart size={16} />
                  </button>
                  <span className="absolute top-3 left-3 font-body text-xs font-medium text-muted-foreground bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
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
                  <Button variant="soft" className="w-full" size="sm">
                    <ShoppingBag size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-pink-soft via-card to-secondary">
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
