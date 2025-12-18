import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="mb-12">
           <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">What They Say About Us</p>
        </div>

        <div className="max-w-4xl">
           <Quote className="w-12 h-12 text-primary mb-6 rotate-180" />
           <h2 className="text-3xl md:text-5xl font-medium text-black leading-tight mb-12">
             "Just Tap has completely transformed the way I manage my reviews. The real-time updates and personalized advice have been invaluable."
           </h2>

           <div className="flex items-center justify-between border-t border-zinc-200 pt-8">
              <div className="flex items-center gap-4">
                 <Avatar className="w-12 h-12">
                   <AvatarImage src="https://github.com/shadcn.png" />
                   <AvatarFallback>JD</AvatarFallback>
                 </Avatar>
                 <div>
                   <div className="font-bold text-black">Kelly Williams</div>
                   <div className="text-sm text-zinc-500">Head of Design, Layers</div>
                 </div>
              </div>

              <div className="flex gap-2">
                 <Button variant="outline" size="icon" className="rounded-full border-zinc-200 hover:bg-zinc-100">
                    <ArrowLeft className="w-4 h-4 text-black" />
                 </Button>
                 <Button variant="outline" size="icon" className="rounded-full border-zinc-200 hover:bg-zinc-100">
                    <ArrowRight className="w-4 h-4 text-black" />
                 </Button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
