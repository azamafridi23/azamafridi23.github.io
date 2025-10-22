import { Github, Linkedin, Mail, FileText, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-start justify-center pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="font-bold">
              <span className="gradient-text">Muhammad Azam Afridi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Erasmus Mundus Master's in Linguistic Data Science Student
            </p>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I'm a Gold Medalist in Artificial Intelligence, now pursuing the Erasmus Mundus Master's in Linguistic Data Science (EMLDS). I love working where language meets intelligence — building AI systems that understand, communicate, and connect people better through LLMs, AI Agents, and Multimodal AI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="gap-2">
                  <FileText className="h-5 w-5" />
                  View CV
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <div className="p-2">
                  <div className="flex items-center justify-between p-2 hover:bg-accent rounded-sm">
                    <span className="text-sm font-medium">Academic CV</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://drive.google.com/file/d/1V4E0KzQ4mk_Is93ruChB7-RdsGVVjzhf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:bg-accent rounded"
                        title="View Academic CV"
                      >
                        <FileText className="h-4 w-4" />
                      </a>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1V4E0KzQ4mk_Is93ruChB7-RdsGVVjzhf"
                        download="Academic_CV_Muhammad_Azam_Afridi.pdf"
                        className="p-1 hover:bg-accent rounded"
                        title="Download Academic CV"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-accent rounded-sm">
                    <span className="text-sm font-medium">Professional Resume</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="https://drive.google.com/file/d/1xZs61LRvjvAU6QjTI67MSBO3y2e04zTf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:bg-accent rounded"
                        title="View Professional Resume"
                      >
                        <FileText className="h-4 w-4" />
                      </a>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1xZs61LRvjvAU6QjTI67MSBO3y2e04zTf"
                        download="Professional_Resume_Muhammad_Azam_Afridi.pdf"
                        className="p-1 hover:bg-accent rounded"
                        title="Download Professional Resume"
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="mailto:azamafridi.ai@gmail.com">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/azamafridi23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/azam-afridi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:azamafridi.ai@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
