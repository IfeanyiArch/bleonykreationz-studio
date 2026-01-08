import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import CartDrawer from "@/components/CartDrawer";
import { FEATURES } from "@/config/features";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isShopPage = location.pathname === "/shop" || location.pathname.startsWith("/product/");

  const homeNavLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "Portfolio", href: isHomePage ? "#portfolio" : "/#portfolio" },
    ...(FEATURES.SHOP_ENABLED ? [{ name: "Shop", href: "/shop" }] : []),
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const shopNavLinks = [
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Shop", href: "/shop" },
  ];

  const navLinks = isShopPage ? shopNavLinks : homeNavLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-semibold text-foreground">
            Bleony<span className="text-primary">Kreationz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            ))}
            {FEATURES.SHOP_ENABLED && <CartDrawer />}
            {!isShopPage && (
              <Button variant="hero" size="sm">
                Get in Touch
              </Button>
            )}
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="md:hidden flex items-center gap-2">
            {FEATURES.SHOP_ENABLED && isShopPage && <CartDrawer />}
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button variant="hero" size="default" className="mt-2">
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
