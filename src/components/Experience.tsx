import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experienceData = [
  {
    title: "Data Scientist",
    company: "Tkxel",
    period: "March 2025 – Sep 2025",
    location: "Islamabad, Pakistan",
    description:
      "Worked as a Data Scientist / AI Engineer (Hybrid Role), specializing in Large Language Models, Machine Learning, and Backend Development.",
    achievements: [
      "Led the development of AI agents for Insphere, Tkxel's enterprise GenAI platform, leveraging Python, FastAPI, PostgreSQL, Redis, and modern agentic frameworks (LangChain, LangGraph, LlamaIndex)",
      "Collaborated with enterprise clients in pre-sales engagements, delivering tailored demonstrations of Insphere's capabilities and implementing customized solutions for their use cases",
      "Contributed to bridging AI research and production deployment, ensuring optimized performance and real-world adaptability",
    ],
  },
  {
    title: "AI Engineer",
    company: "Ninety Nine Technologies",
    period: "Jun 2024 – March 2025",
    location: "Islamabad, Pakistan",
    description:
      "Designed and implemented AI-driven solutions to automate processes and improve system efficiency.",
    achievements: [
      "Designed and implemented an AI Agent–driven workflow to automate BIOS provisioning, reducing manual intervention and improving system efficiency",
      "Developed and scaled a data collection pipeline into a parallel processing system, where throughput increased proportionally with the number of running instances",
    ],
  },
  {
    title: "Research Assistant",
    company: "GIK Institute of Engineering Sciences and Technology",
    period: "Aug 2023 – Jun 2024",
    location: "Topi, Pakistan",
    description:
      "Conducted research on developing scalable and accurate systems for multilingual video translation and video-based question answering at the Artificial Intelligence (AI) Lab under the supervision of Dr. Khurram Khan Jadoon.",
    achievements: [
      "Fine-tuned the Helsinki-NLP/opus-mt-en-ar model using the Web Inventory of Transcribed and Translated Talks (WIT3) dataset, improving the BLEU score by 6 points for more accurate translation of scientific terminology",
      "Integrated OpenAI's GPT-4 to leverage its multimodal capabilities, enabling advanced visual question answering and enhancing the system's ability to process and respond to complex queries involving both text and images",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <Card
                key={index}
                className="p-6 border-[hsl(var(--card-border))] card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-3">{exp.company}</p>
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-accent font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
