
import { Hotel, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Hotel className="h-8 w-8 text-accent" />
              <span className="text-2xl font-serif font-bold">Prestige Hospitality</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Excellence in hospitality services and products for the luxury market.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Luxury Accommodations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fine Dining</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Beverage Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Concierge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Bedding Collection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Minibar Selection</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Spa & Wellness</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-white/80 hover:text-accent transition-colors cursor-pointer" />
              <Instagram className="h-6 w-6 text-white/80 hover:text-accent transition-colors cursor-pointer" />
              <Twitter className="h-6 w-6 text-white/80 hover:text-accent transition-colors cursor-pointer" />
              <Linkedin className="h-6 w-6 text-white/80 hover:text-accent transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Prestige Hospitality. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
