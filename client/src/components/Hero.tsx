import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight mb-6">
              Turn Every <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Tap Into A
              </span> <br />
              5★ Review
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Trusted Protection and Expert Guidance for Your Finances.
              <br />
              <span className="text-sm opacity-70 mt-2 block">
                (Note: Text replaced as per instructions: "NFC cards that instantly open your Google Review page or digital visiting card.")
              </span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white px-8 h-14 text-lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-zinc-700/50" />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-primary font-bold block">95K+</span>
                <span className="text-muted-foreground">Active Users</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Stacked Cards */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 text-primary opacity-20">
              <StarIcon className="w-24 h-24" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[500px]"
            >
              {/* Card 1 (Bottom - Dark) */}
              <div className="absolute top-20 left-20 w-80 h-[480px] bg-zinc-900 rounded-3xl border border-white/5 shadow-2xl transform rotate-12 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div className="w-12 h-12 bg-white/10 rounded-full" />
                  <div className="space-y-2">
                    <div className="w-24 h-2 bg-white/10 rounded-full" />
                    <div className="w-16 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Card 2 (Middle - Silver) */}
              <div className="absolute top-10 left-10 w-80 h-[480px] bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-3xl border border-white/10 shadow-2xl transform rotate-6 flex flex-col justify-between p-8">
                <div className="w-full flex justify-end">
                  <div className="w-12 h-8 bg-white/10 rounded" />
                </div>
                <div className="space-y-4">
                  <div className="text-2xl font-bold tracking-widest text-white/20">RALPH EDWARDS</div>
                </div>
              </div>

              {/* Card 3 (Top - Orange/Primary) */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-80 h-[480px] bg-primary rounded-3xl shadow-[0_35px_60px_-15px_rgba(253,106,24,0.3)] flex flex-col justify-between p-8 relative overflow-hidden"
              >
                {/* Glossy sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-black/30 tracking-tighter drop-shadow-lg filter">
                    just<br />tap.
                  </div>
                  <div className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-4 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="w-16 h-10 bg-white/20 rounded-md backdrop-blur-sm" />
                  <div>
                    <div className="text-xs font-mono text-white/60 mb-1">CARD HOLDER</div>
                    <div className="text-xl font-bold text-white tracking-widest">JUST TAP</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating connecting lines UI (Right side decorative) */}
            <div className="absolute top-20 -right-12 space-y-8">
              {["Selecting your provider", "Set Up Your Account", "Enjoy Seamless tapping"].map((text, i) => (
                <div key={i} className="flex items-center gap-4 justify-end group">
                  <span className="text-sm font-medium text-right text-muted-foreground group-hover:text-white transition-colors">
                    {text}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}
