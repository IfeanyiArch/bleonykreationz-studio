import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, isOpen, setIsOpen } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
          <ShoppingBag size={22} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 bg-pink-soft rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={32} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Your cart is empty
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Discover our handmade creations and add your favorites!
            </p>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              <Button variant="hero">Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-muted/30 rounded-xl"
                >
                  <Link 
                    to={`/product/${item.product.id}`}
                    onClick={() => setIsOpen(false)}
                    className="w-20 h-20 bg-gradient-to-br from-pink-soft to-white rounded-lg flex items-center justify-center shrink-0"
                  >
                    <span className="font-display text-2xl text-primary">
                      {item.product.name.charAt(0)}
                    </span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-display text-sm font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-body text-xs text-muted-foreground mb-2">
                      {item.product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-white border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-body text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-white border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-display text-sm font-semibold text-primary">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="self-start p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">${totalPrice}</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">Calculated at checkout</span>
                </div>
              </div>
              <div className="flex justify-between font-display text-lg font-semibold">
                <span>Total</span>
                <span className="text-primary">${totalPrice}</span>
              </div>
              <Button variant="hero" className="w-full" size="lg">
                Checkout
              </Button>
              <Link 
                to="/shop" 
                onClick={() => setIsOpen(false)}
                className="block text-center font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
