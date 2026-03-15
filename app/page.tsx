import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Contraste from "@/components/sections/Contraste";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Diferenciacion from "@/components/sections/Diferenciacion";
import Equipo from "@/components/sections/Equipo";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problema />
      <Contraste />
      <ComoFunciona />
      <Diferenciacion />
      <Equipo />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
