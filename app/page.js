import About from "@/components/About";
import Contacts from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TopButton from "@/components/TopButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
      <TopButton />
    </>
  );
}
