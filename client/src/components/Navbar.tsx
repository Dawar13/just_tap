import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full opacity-90" />
          </div>
          <span className="text-xl font-bold tracking-tight">Just Tap</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#partners" className="hover:text-white transition-colors">Partners</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex text-muted-foreground hover:text-white hover:bg-transparent">
            Log in
          </Button>
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6">
            Sign up <span className="ml-1">→</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
