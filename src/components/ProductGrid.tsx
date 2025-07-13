import { useState } from "react";
import { Plus, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Mock product data
const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 4.99,
    originalPrice: 6.99,
    image: "/placeholder.svg",
    category: "Vegetables",
    rating: 4.8,
    reviews: 124,
    isOrganic: true,
    isOnSale: true
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: 2.99,
    image: "/placeholder.svg",
    category: "Vegetables",
    rating: 4.6,
    reviews: 89,
    isOrganic: true,
    isOnSale: false
  },
  {
    id: 3,
    name: "Farm Eggs (12 pack)",
    price: 5.49,
    image: "/placeholder.svg",
    category: "Dairy",
    rating: 4.9,
    reviews: 256,
    isOrganic: true,
    isOnSale: false
  },
  {
    id: 4,
    name: "Organic Bananas",
    price: 3.29,
    originalPrice: 3.99,
    image: "/placeholder.svg",
    category: "Fruits",
    rating: 4.7,
    reviews: 167,
    isOrganic: true,
    isOnSale: true
  },
  {
    id: 5,
    name: "Whole Wheat Bread",
    price: 4.49,
    image: "/placeholder.svg",
    category: "Grains",
    rating: 4.5,
    reviews: 78,
    isOrganic: true,
    isOnSale: false
  },
  {
    id: 6,
    name: "Fresh Strawberries",
    price: 6.99,
    image: "/placeholder.svg",
    category: "Fruits",
    rating: 4.8,
    reviews: 203,
    isOrganic: true,
    isOnSale: false
  }
];

export function ProductGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { toast } = useToast();

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product: any) => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hand-picked selection of our finest organic products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-card hover:shadow-product transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isOrganic && (
                      <Badge className="bg-farm-green text-white">Organic</Badge>
                    )}
                    {product.isOnSale && (
                      <Badge className="bg-farm-orange text-white">Sale</Badge>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors ${
                        favorites.includes(product.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>

                  {/* Quick Add Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="cart"
                      size="icon"
                      onClick={() => addToCart(product)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}