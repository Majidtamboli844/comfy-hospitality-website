
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Premium Bedding Collection",
      description: "Luxurious Egyptian cotton linens and designer bedding delivered to your doorstep.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      price: "From $299",
      delivery: "Same-day delivery available"
    },
    {
      title: "Gourmet Minibar Selection",
      description: "Curated premium snacks, beverages, and local delicacies with refrigerated delivery.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      price: "From $149",
      delivery: "Temperature-controlled delivery"
    },
    {
      title: "Spa & Wellness Package",
      description: "Complete relaxation experience with premium spa products delivered fresh.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop",
      price: "From $199",
      delivery: "Next-day delivery"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium hospitality products delivered directly to your location
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  Delivery
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-primary">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm text-accent font-medium mb-4">
                  🚚 {product.delivery}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold text-accent">{product.price}</span>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Delivery Coverage Area
            </h3>
            <p className="text-muted-foreground mb-6">
              We deliver to all major metropolitan areas with same-day and next-day options. 
              Free delivery on orders over $500.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Check Your Area
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
