import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Visual - Cards */}
          <div className="relative h-[500px] flex items-center justify-center">
             {/* Back Card */}
             <div className="absolute w-72 h-[420px] bg-black rounded-2xl transform -rotate-6 translate-x-8 shadow-2xl flex flex-col justify-between p-6">
                <div className="flex justify-between">
                  <div className="text-white font-bold text-lg">VISA</div>
                  <div className="text-white/50">Debit</div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="w-10 h-6 bg-white/20 rounded" />
                    <div className="w-8 h-6 bg-white/10 rounded" />
                  </div>
                  <div className="text-white font-mono text-xl tracking-widest">**** 4242</div>
                </div>
             </div>

             {/* Front Card */}
             <div className="absolute w-72 h-[420px] bg-primary rounded-2xl transform rotate-6 -translate-x-8 shadow-[0_20px_50px_-12px_rgba(253,106,24,0.5)] flex flex-col justify-between p-6 overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-start z-10">
                  <div className="text-3xl font-black text-white tracking-tighter -rotate-90 origin-top-left translate-y-24 -translate-x-2">
                    just tap.
                  </div>
                  <div className="w-8 h-8 rounded border border-white/30 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/20 rounded-full" />
                  </div>
                </div>

                <div className="z-10">
                  <div className="text-white/80 text-xs font-mono mb-1">RALPH EDWARDS</div>
                  <div className="text-white font-bold text-lg">Just Tap Member</div>
                </div>
             </div>

             {/* Indicators */}
             <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-black" />
               <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
               <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
             </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Benefits</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-black mb-8 leading-none">
              Shopping On <br/>
              International
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-black" />
                </div>
                <p className="text-zinc-600 font-medium">Get 2% cashback on all purchases.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3 text-zinc-400" />
                </div>
                <p className="text-zinc-400 font-medium line-through">Access exclusive travel deals and discounts on flights and hotels.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>
                <p className="text-zinc-600 font-medium">Includes travel insurance and purchase protection.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12">
                Learn More
              </Button>
              <Button variant="outline" className="rounded-full border-zinc-200 text-black px-4 h-12 w-12 flex items-center justify-center p-0">
                <ArrowRight className="w-5 h-5 -rotate-45" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
