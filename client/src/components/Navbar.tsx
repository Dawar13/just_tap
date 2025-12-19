import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
          <Button className="hidden md:flex rounded-full bg-primary hover:bg-primary/90 text-white font-medium px-6">
            Sign up <span className="ml-1">→</span>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-white/10 w-[300px]">
                <div className="flex flex-col gap-8 mt-10">
                  <div className="flex flex-col gap-6 text-lg font-medium text-muted-foreground">
                    <a href="#products" className="hover:text-white transition-colors">Products</a>
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
                    <a href="#partners" className="hover:text-white transition-colors">Partners</a>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button variant="ghost" className="justify-start px-0 text-muted-foreground hover:text-white hover:bg-transparent">
                      Log in
                    </Button>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium w-full">
                      Sign up <span className="ml-1">→</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
