
import { Hotel, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hotel className="h-8 w-8 text-accent" />
            <span className="text-2xl font-serif font-bold text-primary">Prestige Hospitality</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
            <Button className="bg-accent hover:bg-accent/90 text-white">Book Now</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
              <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
              <Button className="bg-accent hover:bg-accent/90 text-white w-full">Book Now</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
