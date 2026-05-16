import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import MidCTA from "@/components/MidCTA";
import Expertise from "@/components/Expertise";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <MidCTA />
      <Expertise />
      <Testimonials />
      <Pricing />
      {/* <Articles /> */}
      <Footer />
    </main>
  );
}
