import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "01",
    title: "Secure and Easy Transactions",
    description: "Simplify your review collection with one-tap NFC technology securely."
  },
  {
    id: "02",
    title: "Real Time Analytics Monitoring",
    description: "Track your taps and reviews in real-time with our comprehensive dashboard."
  },
  {
    id: "03",
    title: "Fast & EASY INTERACTIONS",
    description: "No app required. Customers simply tap and review in seconds."
  },
  {
    id: "04",
    title: "Comprehensive Custom Branding",
    description: "Customize your NFC cards with your logo and brand colors."
  }
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState("03");

  return (
    <section className="py-16 lg:py-24 bg-background" id="features">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Features</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white max-w-md leading-tight">
              All-In-One Platform For Growth
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Simplify your business growth by securely connecting your customers to your online presence automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`group cursor-pointer border-b border-white/5 py-8 transition-all duration-300 ${activeFeature === feature.id ? "bg-white/5 px-6 rounded-xl border-none" : "px-2"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-mono text-muted-foreground">{feature.id}</span>
                    <h3 className={`text-lg font-bold uppercase transition-colors ${activeFeature === feature.id ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeFeature === feature.id ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"}`}>
                    {activeFeature === feature.id ? <ArrowRight className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                <AnimatePresence>
                  {activeFeature === feature.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground pl-12 pt-4 text-sm max-w-md">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Visual - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-zinc-900 rounded-2xl border border-white/10 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="h-2 w-20 bg-zinc-800 rounded-full" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Latest Interactions</div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[67%] bg-primary" />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>67% Success</span>
                    <span>14% Pending</span>
                    <span>19% Cancel</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-700" />
                        <div>
                          <div className="w-24 h-2 bg-zinc-700 rounded mb-1" />
                          <div className="w-16 h-2 bg-zinc-800 rounded" />
                        </div>
                      </div>
                      <div className="h-6 w-16 bg-primary/20 rounded text-primary text-[10px] flex items-center justify-center font-bold uppercase">
                        Review
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                <ArrowRight className="text-white w-6 h-6 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
