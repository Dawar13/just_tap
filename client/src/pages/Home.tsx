import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Partners } from "@/components/Partners";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <Benefits />
        <Partners />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
