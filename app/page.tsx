import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Gallery from "@/components/Gallery";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Gallery />
        <Clients />
        <Contact />
        <Footer />
      </main>

      <WhatsAppButton />
    </>
  );
}