import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh farm products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Fresh From Farm
          <span className="block text-farm-orange">To Your Table</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Discover the finest organic produce, dairy, and grains directly from local farms. 
          Taste the difference that fresh, sustainable farming makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="shadow-2xl">
            Shop Now
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}