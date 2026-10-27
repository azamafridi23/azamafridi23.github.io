import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CVLinks from "./CVLinks";

const Hero = () => (
  <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <p className="text-sm font-medium tracking-widest uppercase text-accent">LLM Agents · Reasoning · Multimodal AI</p>
        <h1 className="font-bold gradient-text">Muhammad Azam Afridi</h1>
        <p className="text-xl md:text-2xl font-medium">AI Engineer · Erasmus Mundus Scholar</p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          I build and evaluate AI systems spanning LLM agents, retrieval, and multimodal understanding.
          I’m an Erasmus Mundus scholar in Linguistic Data Science and a Gold Medalist in Artificial Intelligence,
          with industry experience developing enterprise AI systems and research on demonstration retrieval for LLM-based dependency parsing.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <Button size="lg" asChild><a href="#projects">Explore My Work<ArrowDown className="ml-2 h-4 w-4" /></a></Button>
          <CVLinks />
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>Gold Medal · 1st of 55</span><span>Fully funded Erasmus Mundus scholarship</span><span>Milan, Italy</span>
        </div>
        <div className="flex items-center justify-center gap-5 pt-2">
          <a href="https://github.com/azamafridi23" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-accent"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com/in/azam-afridi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:azamafridi.ai@gmail.com" aria-label="Email Azam" className="text-muted-foreground hover:text-accent"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
