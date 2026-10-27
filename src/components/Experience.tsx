import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experienceData = [
  {
    title: "AI Engineer", company: "Tkxel", period: "Mar 2025 – Sep 2025", location: "Lahore, Pakistan",
    description: "Built enterprise AI systems for Insphere, Tkxel’s GenAI platform.",
    achievements: [
      "Built multi-agent orchestration coordinating specialized sub-agents for multi-step reasoning and task delegation.",
      "Designed an Agentic RAG architecture with LangChain and LangGraph, cutting response latency by 15% and improving retrieval accuracy by 7% over baseline.",
      "Developed backend services and ingestion pipelines with FastAPI, PostgreSQL, and Redis; assessed client requirements and recommended AI solution opportunities.",
    ],
  },
  {
    title: "AI Engineer", company: "Ninety Nine Technologies", period: "Jun 2023 – Mar 2025", location: "Islamabad, Pakistan",
    description: "Developed multimodal retrieval systems and scalable data pipelines.",
    achievements: [
      "Built multimodal RAG over company documents in Google Drive, automatically updating the vector database as source documents changed.",
      "Integrated text and vision embeddings with LLMs and VLMs to process and retrieve information from text, images, audio, and video.",
      "Re-engineered sequential product scraping into concurrent execution, increasing data collection throughput by 10×.",
    ],
  },
  {
    title: "Research Assistant", company: "GIK Institute of Engineering Sciences and Technology", period: "Aug 2023 – Jun 2024", location: "Topi, Pakistan",
    description: "Researched multilingual video translation and video-based question answering under Dr. Khurram Khan Jadoon.",
    achievements: ["Combined speech recognition, text-to-speech, machine translation, vision-language models, and OCR to support understanding of spoken and visual video content."],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="portfolio-section">
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
                    <p className="text-accent font-medium mb-3">{exp.company} <span className="text-sm text-muted-foreground font-normal">· {exp.location}</span></p>
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
