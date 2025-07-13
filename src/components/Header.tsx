import { useState } from "react";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CartSidebar } from "./CartSidebar";
import { Link } from "react-router-dom";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items count

  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌱</span>
              </div>
              <span className="text-xl font-bold text-foreground">FarmFresh</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/categories" className="text-foreground hover:text-primary transition-colors">Categories</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center bg-muted rounded-lg px-3 py-2 w-64">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-muted-foreground"
              />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Icon - Mobile */}
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="w-5 h-5" />
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>

              {/* Cart */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartItems > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-farm-orange text-white text-xs">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
                <Link to="/cart" className="absolute inset-0" />
              </div>

              {/* Mobile Menu */}
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}