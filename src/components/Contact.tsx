import { Mail, Github, Linkedin, FileText, MapPin, ChevronDown, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "azamafridi.ai@gmail.com",
    href: "mailto:azamafridi.ai@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/azamafridi23",
    href: "https://github.com/azamafridi23",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/azam-afridi",
    href: "https://linkedin.com/in/azam-afridi",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Milan, Italy",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              I'm currently open to new opportunities in AI research and engineering roles. Feel
              free to reach out if you'd like to discuss potential collaborations or positions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="p-6 border-[hsl(var(--card-border))] card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <contact.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-accent transition-colors break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="gap-2">
                  <FileText className="h-5 w-5" />
                  Download CV
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
