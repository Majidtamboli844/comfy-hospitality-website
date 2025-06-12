
import { Truck, Package, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Same-day and next-day delivery options for all premium hospitality products."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Secure Packaging",
      description: "Professional packaging ensures your luxury items arrive in perfect condition."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Choose your preferred delivery time slot to fit your schedule perfectly."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all delivered hospitality products and services."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Delivery Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional doorstep delivery for all your hospitality needs
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
