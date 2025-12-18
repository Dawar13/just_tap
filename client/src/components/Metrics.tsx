import { ArrowDown } from "lucide-react";

export function Metrics() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">About Us</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6">
            Getting To <br/>
            Know Just Tap
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Metric Card - Orange */}
          <div className="md:col-span-6 bg-primary rounded-[2rem] p-8 relative overflow-hidden min-h-[300px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute top-6 left-6 w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
              <ArrowDown className="text-white w-5 h-5" />
            </div>
            
            <div className="mt-12">
              <h3 className="text-7xl md:text-8xl font-black text-white tracking-tighter leading-none mb-2">
                500k
              </h3>
              <p className="text-3xl font-bold text-white/90">users</p>
            </div>
            
            <p className="text-white/80 max-w-sm mt-8 text-sm leading-relaxed">
              Taps generated worldwide. Our solution connects customers to your business reviews instantly.
            </p>
          </div>

          {/* Secondary Metric - Black */}
          <div className="md:col-span-3 bg-zinc-900 rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px] group hover:bg-zinc-800 transition-colors">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-sm" />
            </div>
            
            <div>
              <div className="flex items-start">
                <h3 className="text-6xl font-black text-white tracking-tighter mb-2">98</h3>
                <span className="text-3xl font-bold text-white mt-2">%</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Review completion rate. Users enjoy faster transaction processes.
              </p>
            </div>
          </div>

          {/* Tertiary Metric - White */}
          <div className="md:col-span-3 bg-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px] group">
            <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
               <div className="w-4 h-4 bg-zinc-900 rounded-sm" />
            </div>
            
            <div>
              <div className="flex items-start">
                <h3 className="text-6xl font-black text-black tracking-tighter mb-2">24</h3>
                <span className="text-3xl font-bold text-black mt-2">K</span>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                A network of over 24,000 businesses partner with us today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
