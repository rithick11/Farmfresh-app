import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Truck, Award, Users, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All our products are certified organic, grown without harmful pesticides or chemicals."
    },
    {
      icon: Heart,
      title: "Health First",
      description: "We prioritize your health by providing the freshest, most nutritious produce available."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available in select areas. Fresh from farm to your door."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every product undergoes strict quality checks to ensure you get the best."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Partner Farms" },
    { number: "200+", label: "Products Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Former agricultural scientist with 15 years of farming experience."
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Operations",
      description: "Logistics expert ensuring fresh delivery to your doorstep."
    },
    {
      name: "Emily Chen",
      role: "Quality Manager",
      description: "Food safety specialist maintaining our high quality standards."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About FarmFresh</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We're passionate about connecting communities with fresh, organic produce 
              directly from local farms. Our mission is to make healthy eating accessible, 
              sustainable, and delicious for everyone.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  Founded in 2019, FarmFresh began as a small initiative to bridge the gap between 
                  local farmers and health-conscious consumers. What started as a weekend farmers 
                  market booth has grown into a thriving online marketplace serving hundreds of 
                  families across the region.
                </p>
                <p className="mb-6">
                  Our founder, Sarah Johnson, grew up on a family farm and witnessed firsthand 
                  the challenges small farmers face in reaching consumers directly. After years 
                  in agricultural science, she decided to create a platform that would benefit 
                  both farmers and consumers by eliminating unnecessary middlemen.
                </p>
                <p>
                  Today, we work with over 50 local farms to bring you the freshest produce, 
                  dairy products, and grains. Every purchase supports local agriculture and 
                  sustainable farming practices while providing you with the highest quality 
                  food for your family.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{member.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Visit Our Store</h2>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold">123 Farm Fresh Lane, Green Valley, CA 94534</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Stop by our physical store to see our products firsthand and meet our team. 
                We're open Monday through Saturday, 8 AM to 7 PM.
              </p>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-sm text-muted-foreground">
                  🚗 Free parking available | 🚲 Bike-friendly location | ♿ Wheelchair accessible
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;