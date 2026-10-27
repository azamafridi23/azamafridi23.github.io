import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Programming": ["Python", "JavaScript"],
  "LLMs & Agents": ["LangChain", "LangGraph", "Agentic RAG", "Multi-agent Systems", "Language Models"],
  "Machine Learning & Multimodal AI": ["PyTorch", "TensorFlow", "Hugging Face", "PEFT / LoRA", "Vision-Language Models", "Object Detection", "OCR"],
  "Backend & Data": ["FastAPI", "Django", "PostgreSQL", "pgvector", "Redis", "Celery"],
  "Cloud & Development": ["AWS", "Azure", "Docker", "Git"],
  "Research & Evaluation": ["Experimental Design", "Prompting Strategies", "Benchmark Evaluation", "Statistical Analysis", "Technical Writing"],
};

const Skills = () => {
  return (
    <section id="skills" className="portfolio-section section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <Card
                key={index}
                className="p-6 border-[hsl(var(--card-border))] card-hover"
              >
                <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
