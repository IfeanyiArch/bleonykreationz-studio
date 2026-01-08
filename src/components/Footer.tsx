import { Heart, Instagram, Mail } from "lucide-react";

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.167 10.167 0 012.25 6.375c-.328-.063-3.625-.735-6.953-.313-.078-.172-.14-.359-.219-.547-.234-.562-.484-1.125-.75-1.672 3.672-1.5 5.344-3.656 5.672-3.843zM12 1.828c2.578 0 4.938.984 6.719 2.578-.281.25-1.797 2.234-5.313 3.563-1.656-3.047-3.5-5.547-3.781-5.922A10.27 10.27 0 0112 1.828zM7.547 2.813c.266.344 2.078 2.859 3.766 5.828-4.75 1.266-8.938 1.25-9.391 1.25a10.232 10.232 0 015.625-7.078zM1.828 12v-.313c.438.016 5.359.063 10.438-1.453.297.563.563 1.156.828 1.734-.141.047-.297.094-.438.141-5.25 1.703-8.047 6.344-8.344 6.844a10.15 10.15 0 01-2.484-6.953zM12 22.172c-2.344 0-4.5-.797-6.219-2.125.234-.484 2.344-4.422 8.094-6.453.016-.016.047-.016.063-.031a35.9 35.9 0 012.172 7.719 10.134 10.134 0 01-4.11.89zm5.891-2.063a36.142 36.142 0 00-1.984-7.203c3.109-.5 5.828.328 6.172.438a10.178 10.178 0 01-4.188 6.765z"/>
  </svg>
);

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
                href="https://pinterest.com/bleonykreationz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <PinterestIcon />
              </a>
              <a 
                href="https://dribbble.com/bleonykreationz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <DribbbleIcon />
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
