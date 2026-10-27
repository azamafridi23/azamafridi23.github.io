import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Database } from "lucide-react";

const projects = [
  {
    title: "Vision-Language Robot Grounding", category: "Multimodal AI & Planning",
    result: "2nd runner-up · ZHAW Challenge, Hack Apertus 2026",
    description: "Built a vision-language robot planning pipeline with SAM 3, Depth Anything V2, and Apertus 1.5 70B. Combined three-agent planning, JSON-schema constrained decoding, and deterministic validation.",
    detail: "Achieved 63.0/65 automatic points. Three-agent scores ranged from 62.5–64.1, versus 58.9–60.5 for a single-call LLM approach.",
    tech: ["Vision-Language Models", "Multi-agent Planning", "SAM 3"],
    code: "https://github.com/azamafridi23/see-it-say-it-pick-it-hack-apertus", datasets: [],
  },
  {
    title: "LoRA Fine-Tuning for Code Intelligence", category: "Parameter-Efficient Fine-Tuning",
    result: "Trained 1.4% of Flan-T5-base parameters",
    description: "Fine-tuned a 250M-parameter model for Python generation and text-to-SQL on MBPP and SPIDER. Built preprocessing, training, and task-specific evaluation pipelines, and published processed datasets on Hugging Face.",
    detail: "SPIDER ROUGE-L improved from 10.38 to 48.57; relaxed exact match increased from 0% to 2.53%, indicating that exact SQL generation remains challenging.",
    tech: ["Flan-T5", "PEFT / LoRA", "MBPP", "SPIDER"],
    code: "https://github.com/azamafridi23/flan-t5-lora-finetuning-code-intelligence",
    datasets: [{label: "MBPP dataset", url: "https://huggingface.co/datasets/SuperMax991/mbpp-python-generation"}, {label: "SPIDER dataset", url: "https://huggingface.co/datasets/SuperMax991/spider-text2sql"}],
  },
  {
    title: "Agentic RAG for Document Intelligence", category: "Applied AI Engineering",
    result: "Asynchronous ingestion across three connected sources",
    description: "Built a platform for document question answering, summarization, and workflow automation with tool-calling LLM agents and semantic retrieval.",
    detail: "Integrated Google Drive, Gmail, and AWS S3 through asynchronous ingestion pipelines, with Celery background processing and a Streamlit interface.",
    tech: ["Agentic RAG", "Celery", "Streamlit", "AWS S3"],
    code: "https://github.com/azamafridi23/Document-Processing-RAG-System", datasets: [],
  },
  {
    title: "Multilingual Video Translation & QA", category: "Undergraduate Thesis",
    result: "Retrieval over spoken and visual video content",
    description: "Built an end-to-end pipeline combining Whisper-based speech recognition, machine translation, and text-to-speech to translate spoken video content.",
    detail: "Added a RAG chatbot using video transcripts, extracted frames, OCR, and FAISS/ChromaDB to answer questions about uploaded videos.",
    tech: ["Whisper", "Multimodal AI", "OCR", "RAG"],
    code: "https://github.com/azamafridi23/NatLearn-Multilingual-Video-Translator-and-Context-Specific-Chatbot", datasets: [],
  },
];

const Projects = () => (
  <section id="projects" className="portfolio-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="text-center mb-10"><h2 className="mb-4">Selected Projects</h2><p className="text-muted-foreground">From evaluated model adaptations to practical agent and multimodal systems.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.title} className="p-6 border-[hsl(var(--card-border))] card-hover flex flex-col">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">{project.category}</p>
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-sm font-medium text-accent mb-4">{project.result}</p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">{project.description}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">{project.detail}</p>
            <div className="flex flex-wrap gap-2 mb-5">{project.tech.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild><a href={project.code} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />Code</a></Button>
              {project.datasets.map(dataset => <Button key={dataset.url} variant="ghost" size="sm" asChild><a href={dataset.url} target="_blank" rel="noopener noreferrer"><Database className="mr-2 h-4 w-4" />{dataset.label}</a></Button>)}
            </div>
          </Card>
        ))}
      </div>
      <details className="mt-8 rounded-xl border border-border p-5">
        <summary className="cursor-pointer font-medium">More projects</summary>
        <div className="grid sm:grid-cols-2 gap-6 mt-5 text-sm">
          <div><a className="text-accent underline underline-offset-4" href="https://github.com/azamafridi23/Real-Time-Voice-Interview-Application" target="_blank" rel="noopener noreferrer">Real-Time Voice Interview Application</a><p className="text-muted-foreground mt-2">Conversational voice application using LiveKit, speech recognition, speech synthesis, and turn detection.</p></div>
          <div><a className="text-accent underline underline-offset-4" href="https://github.com/azamafridi23/Event-Planner-AI-Assistant" target="_blank" rel="noopener noreferrer">Email-Driven AI Assistant</a><p className="text-muted-foreground mt-2">LangGraph agent for recommendations and multi-step workflows through natural-language email exchanges.</p></div>
        </div>
      </details>
    </div>
  </section>
);
export default Projects;
