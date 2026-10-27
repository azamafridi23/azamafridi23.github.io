import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Awards from "@/components/Awards";
import Writing from "@/components/Writing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Experience />
        <Education />
        <Awards />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
