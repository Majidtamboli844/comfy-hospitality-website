
import { Bed, Utensils, Wine, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Bed className="h-8 w-8" />,
      title: "Luxury Accommodations",
      description: "Premium rooms and suites with world-class amenities and personalized service."
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fine Dining",
      description: "Gourmet cuisine crafted by renowned chefs using the finest ingredients."
    },
    {
      icon: <Wine className="h-8 w-8" />,
      title: "Beverage Services",
      description: "Curated wine collections and premium spirits from around the world."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Concierge",
      description: "24/7 personalized assistance for all your hospitality needs and requests."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive hospitality solutions designed to exceed expectations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
