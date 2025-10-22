import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Multimodal Conversational AI for Automated Candidate Screening",
    description:
      "Designed and implemented a multimodal conversational AI system for automated HR candidate screening, integrating speech-to-text (Whisper-like models), text-to-speech synthesis, voice activity detection (VAD), and turn-taking detection for natural interaction. Leveraged LiveKit for low-latency streaming and PostgreSQL for structured response storage, enabling scalable, real-time analysis of interview transcripts with potential applications in human–AI interaction research.",
    technologies: ["Python", "LiveKit", "PostgreSQL", "Whisper", "TTS", "VAD"],
    github: "https://github.com/azamafridi23/Real-Time-Voice-Interview-Application",
    demo: "https://github.com/azamafridi23/Real-Time-Voice-Interview-Application",
  },
  {
    title: "Email-Orchestrated Autonomous Agent for Personalized Recommendations",
    description:
      "Developed an email-driven autonomous agent leveraging LangGraph and LLM orchestration to handle end-to-end user workflows. Implemented functionalities for catalogue retrieval, personalized recommendations, cart management, and order placement entirely through natural language email exchanges.",
    technologies: ["Python", "LangGraph", "LLM", "Email Processing", "NLP"],
    github: "https://github.com/azamafridi23/Event-Planner-AI-Assistant",
    demo: "https://github.com/azamafridi23/Event-Planner-AI-Assistant",
  },
  {
    title: "Automated Embedding-Aware RAG Framework for Document Understanding",
    description:
      "Engineered a retrieval-augmented generation (RAG) system with real-time integration to Google Drive for dynamic document management. Designed automated pipelines for document ingestion, embedding updates using ChromaDB, and query processing through LLMs, supporting efficient Q&A over evolving datasets.",
    technologies: ["Python", "RAG", "ChromaDB", "Google Drive API", "LLM"],
    github: "https://github.com/azamafridi23/Document-Processing-RAG-System",
    demo: "https://github.com/azamafridi23/Document-Processing-RAG-System",
  },
  {
    title: "Multilingual Video Translation and Visual Question Answering System",
    description:
      "Developed an advanced system for translating videos between 26+ languages using large language models (LLMs), with an integrated Visual Question Answering (VQA) component that leverages retrieval-augmented generation (RAG) and multimodal AI to respond to user queries based on video content. Fine-tuned the T5 model for English-to-French translation, achieving a 17% improvement in BLEU score. Designed and implemented a VQA module using multimodal AI models to handle complex text-video queries, integrating OCR for text extraction from video frames.",
    technologies: ["Python", "T5", "VQA", "OCR", "Multimodal AI", "RAG"],
    github: "https://github.com/azamafridi23/2024-AI-Challenge-NatLearn",
    demo: "https://github.com/azamafridi23/2024-AI-Challenge-NatLearn",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <Card
                key={index}
                className="p-6 border-[hsl(var(--card-border))] card-hover flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
