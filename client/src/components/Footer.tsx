import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary pt-16 lg:pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">

        {/* Big 3D Text Effect Background (Visual Approximation) */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-20">
          <span className="text-[20vw] font-black text-black/10 tracking-tighter whitespace-nowrap">
            JUST TAP
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 border-b border-white/10 pb-16 mb-12">
          {/* CTA Section */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black uppercase text-white mb-6">
              Ready To Take <br />
              Control Of Your <br />
              Online Reputation?
            </h2>
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-zinc-100 px-8 h-14 font-bold">
              Get Started
            </Button>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Analytics</a></li>
                <li><a href="#" className="hover:text-white">Collaboration</a></li>
                <li><a href="#" className="hover:text-white">Data Management</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Legal</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Customers</a></li>
                <li><a href="#" className="hover:text-white">Strategic</a></li>
                <li><a href="#" className="hover:text-white">Financial Advice</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>
            © 2025 Just Tap Inc. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
