import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import MidCTA from "@/components/MidCTA";
import Expertise from "@/components/Expertise";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip w-full max-w-full">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Expertise />
      <MidCTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
