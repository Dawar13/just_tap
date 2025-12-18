import { Button } from "@/components/ui/button";

export function Partners() {
  return (
    <section className="py-24 bg-black" id="partners">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Text */}
          <div className="lg:col-span-5">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Our Trusted Partners</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-8">
              Real-Time Financial <br/>
              Monitoring
            </h2>

            <div className="mb-12">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary font-black">98%</div>
               </div>
               <h3 className="text-6xl font-black text-white mb-4">98<span className="text-3xl align-top">%</span></h3>
               <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                 Partners are happy with our collaboration, noting increased efficiency and mutual growth since joining us.
               </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-7">
             <div className="flex flex-col gap-6">
                <div className="text-right mb-4">
                  <p className="text-sm text-zinc-500 max-w-xs ml-auto leading-relaxed">
                    Just like us, Just Tap believes in building long-term relationships with clients. Their focus on customer service aligns perfectly with our own value.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   {/* Partner 1 - Apple Pay Style */}
                   <div className="bg-primary aspect-square rounded-[2rem] flex items-center justify-center p-8 hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-2 text-white">
                         <AppleIcon className="w-8 h-8" />
                         <span className="font-bold text-2xl">Pay</span>
                      </div>
                   </div>

                   {/* Partner 2 - Paypal Style */}
                   <div className="bg-primary aspect-square rounded-[2rem] flex items-center justify-center p-8 hover:scale-[1.02] transition-transform">
                      <div className="text-white">
                         <PaypalIcon className="w-12 h-12" />
                      </div>
                   </div>

                   {/* Partner 3 - Stripe Style (Abstract) */}
                   <div className="bg-primary aspect-square rounded-[2rem] flex items-center justify-center p-8 hover:scale-[1.02] transition-transform">
                      <div className="text-white font-black text-4xl italic">S</div>
                   </div>

                   {/* Partner 4 - Google Pay Style */}
                   <div className="bg-primary aspect-square rounded-[2rem] flex items-center justify-center p-8 hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-2 text-white">
                         <span className="font-bold text-2xl">G Pay</span>
                      </div>
                   </div>

                   {/* CTA Block */}
                   <div className="absolute right-6 bottom-[-100px] hidden lg:block">
                      <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/5 max-w-[200px]">
                         <p className="text-xs font-bold text-white uppercase mb-4">
                           Creating Impactful Solutions and Lasting Partnerships
                         </p>
                         <Button size="sm" variant="secondary" className="rounded-full text-xs">
                           Join Now Together
                         </Button>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.55 1.37.28 2.62.24 2.82-1.2.04-2.67-.79-3.22-2.32-.53-1.45.28-2.8 1.46-2.82 1.04-.03 2.09.96 1.52 2.32" />
    </svg>
  );
}

function PaypalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
       <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01.96 1.387 2.29 1.07 4.107-.21 1.4-.764 2.613-1.75 3.69-1.375 1.5-3.52 2.433-6.215 2.433h-1.2l-.65 4.14-.14.902c-.06.417.26.793.682.793h4.08c.55 0 .983.47.886 1.01l-.634 3.73a.634.634 0 0 1-.625.526h-4.32a.64.64 0 0 1-.632-.738l.41-2.482.417-2.593z" />
    </svg>
  );
}
