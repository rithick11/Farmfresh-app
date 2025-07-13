import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Categories as CategoriesComponent } from "@/components/Categories";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Apple, Milk, Wheat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoryDetails = [
    {
      id: "vegetables",
      name: "Fresh Vegetables",
      description: "Farm-fresh vegetables picked daily. Rich in vitamins and minerals.",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      products: 45,
      featured: ["Organic Tomatoes", "Fresh Spinach", "Bell Peppers", "Carrots"]
    },
    {
      id: "fruits",
      name: "Seasonal Fruits",
      description: "Sweet, juicy fruits harvested at peak ripeness for maximum flavor.",
      icon: Apple,
      color: "text-red-600",
      bgColor: "bg-red-50",
      products: 32,
      featured: ["Organic Apples", "Fresh Strawberries", "Bananas", "Oranges"]
    },
    {
      id: "dairy",
      name: "Dairy Products",
      description: "Fresh dairy products from local farms. No artificial additives.",
      icon: Milk,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      products: 18,
      featured: ["Fresh Milk", "Organic Cheese", "Farm Butter", "Greek Yogurt"]
    },
    {
      id: "grains",
      name: "Grains & Cereals",
      description: "Wholesome grains and cereals for a healthy, balanced diet.",
      icon: Wheat,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      products: 28,
      featured: ["Organic Rice", "Whole Wheat", "Quinoa", "Oats"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Categories</h1>
          <p className="text-muted-foreground text-lg">
            Explore our wide range of fresh, organic products organized by category.
          </p>
        </div>

        <CategoriesComponent />

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Category Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryDetails.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${category.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.name}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {category.products} products available
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Featured Products:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {category.featured.map((product, index) => (
                          <li key={index}>• {product}</li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/products">
                      <Button className="w-full flex items-center justify-center gap-2">
                        Browse {category.name}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;