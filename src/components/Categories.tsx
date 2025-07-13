import { Card, CardContent } from "@/components/ui/card";
import vegetablesImg from "@/assets/vegetables.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import dairyImg from "@/assets/dairy.jpg";
import grainsImg from "@/assets/grains.jpg";

const categories = [
  {
    id: 1,
    name: "Fresh Vegetables",
    image: vegetablesImg,
    count: "50+ items",
    description: "Organic, locally grown vegetables"
  },
  {
    id: 2,
    name: "Seasonal Fruits",
    image: fruitsImg,
    count: "40+ items",
    description: "Sweet, juicy fruits picked fresh"
  },
  {
    id: 3,
    name: "Dairy Products",
    image: dairyImg,
    count: "25+ items",
    description: "Farm-fresh milk, cheese & eggs"
  },
  {
    id: 4,
    name: "Grains & Cereals",
    image: grainsImg,
    count: "30+ items",
    description: "Wholesome grains and cereals"
  }
];

export function Categories() {
  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our wide selection of fresh, organic products sourced directly from local farms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-product hover:scale-105 border-0 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">{category.count}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}