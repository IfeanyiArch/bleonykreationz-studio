import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Heart, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button variant="hero">Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white">
        <div className="container mx-auto px-6">
          <Link 
            to="/shop" 
            className="inline-flex items-center font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-pink-soft to-white rounded-3xl flex items-center justify-center shadow-soft">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-card">
                  <span className="font-display text-7xl text-primary">{product.name.charAt(0)}</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-gradient-to-br from-pink-soft/50 to-white rounded-xl flex items-center justify-center cursor-pointer hover:ring-2 ring-primary/30 transition-all"
                  >
                    <span className="font-display text-2xl text-primary/50">{product.name.charAt(0)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="font-body text-sm font-medium text-primary bg-pink-soft px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-2">
                  {product.name}
                </h1>
                <p className="font-display text-3xl font-semibold text-primary">
                  ${product.price}
                </p>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex gap-3">
                <Button variant="hero" size="lg" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingBag size={20} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <Heart size={20} />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-soft rounded-full flex items-center justify-center mx-auto mb-2">
                    <Truck size={20} className="text-primary" />
                  </div>
                  <p className="font-body text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-soft rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <p className="font-body text-xs text-muted-foreground">Quality Guarantee</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-soft rounded-full flex items-center justify-center mx-auto mb-2">
                    <RotateCcw size={20} className="text-primary" />
                  </div>
                  <p className="font-body text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4 pt-6 border-t border-border/50">
                <h3 className="font-display text-xl font-semibold text-foreground">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="font-body text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Care Instructions */}
              <div className="space-y-4 pt-6 border-t border-border/50">
                <h3 className="font-display text-xl font-semibold text-foreground">Care Instructions</h3>
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="font-body text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-muted-foreground/30 rounded-full mr-3"></span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-border/30 hover:border-primary/20 hover:shadow-card transition-all duration-500"
                >
                  <div className="aspect-square bg-gradient-to-br from-pink-soft to-white flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft">
                      <span className="font-display text-xl text-primary">{relatedProduct.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="font-body text-base font-semibold text-primary mt-1">
                      ${relatedProduct.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
