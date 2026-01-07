import { Heart, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">
              Bleony<span className="text-primary">Kreationz</span>
            </h3>
            <p className="font-body text-background/70 text-sm leading-relaxed">
              Brand & Graphic Designer crafting beautiful identities 
              and handmade crochet creations with love.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#portfolio" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#shop" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Shop
              </a>
              <a href="#about" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/bleonykreationz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:hello@bleonykreationz.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-background/60">
            © {new Date().getFullYear()} BleonyKreationz. All rights reserved.
          </p>
          <p className="font-body text-sm text-background/60 flex items-center gap-1">
            Made with <Heart size={14} className="text-primary" /> and creativity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
