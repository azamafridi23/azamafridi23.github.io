import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const educationData = [
  {
    degree: "Erasmus Mundus Joint MSc in Linguistic Data Science (EMLDS)",
    institution: "Consortium of: Universidade NOVA de Lisboa (Portugal), Università Cattolica del Sacro Cuore (Italy), University of Zaragoza (Spain)",
    period: "Sep 2025 – Present",
    description:
      "Fully funded Erasmus Mundus scholarship.\nCoursework: Machine Learning & Deep Learning, Language Models, NLP, Speech Processing.",
    gpa: "Weighted average: 29.46/30 · Three of four completed examinations: 30 e lode (October 2026)",
  },
  {
    degree: "Bachelor of Science in Artificial Intelligence",
    institution: "GIK Institute of Engineering Sciences and Technology",
    period: "Sep 2020 – Jun 2024",
    description:
      "• Gold Medalist (Rank: 1/55)\n• Thesis: LLM-Powered Multilingual Video Translation and Multimodal Question Answering",
    gpa: "Cumulative GPA: 3.75/4.0",
  },
];

const Education = () => {
  return (
    <section id="education" className="portfolio-section section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="p-6 border-[hsl(var(--card-border))] card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{edu.institution}</p>
                    <div className="text-foreground/80 mb-2">
                      {edu.description.split('\n').map((line, index) => (
                        <p key={index} className="mb-1">{line}</p>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{edu.gpa}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
