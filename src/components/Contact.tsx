
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Order & Delivery Info
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to have premium hospitality products delivered? Contact us or place your order today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="font-serif text-primary flex items-center">
                  <Truck className="mr-2 h-6 w-6 text-accent" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">orders@prestigehospitality.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Serving 50+ metropolitan areas nationwide</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Delivery Options</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Same-day delivery</span>
                    <span className="font-semibold">$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next-day delivery</span>
                    <span className="font-semibold">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard delivery (2-3 days)</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-accent font-medium">Free delivery on orders $500+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-primary">Place Your Order</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Delivery Address" />
                <Input placeholder="Phone Number" />
                <Textarea placeholder="Product requirements and special delivery instructions" rows={4} />
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Request Quote & Delivery
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
