
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
          Premium Hospitality
          <span className="block text-accent">Delivered to Your Door</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience luxury hospitality products with convenient doorstep delivery. From premium bedding to gourmet selections, we bring excellence directly to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
            Order Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
            View Delivery Areas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
