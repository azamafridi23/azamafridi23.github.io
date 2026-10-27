import { FileText, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Research = () => (
  <section id="research" className="portfolio-section section-alt">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div className="text-center mb-10"><h2 className="mb-4">Research</h2><p className="text-muted-foreground">Studying how demonstration selection improves LLM-based structured prediction.</p></div>
      <Card className="p-6 md:p-8 border-[hsl(var(--card-border))]">
        <p className="text-sm font-medium text-accent mb-3">arXiv preprint · October 2026</p>
        <h3 className="text-xl md:text-2xl mb-3">POS-Signature Demonstration Retrieval for In-Context Dependency Parsing</h3>
        <p className="text-sm text-muted-foreground mb-5">Muhammad Azam Afridi, Rajab Ali, Marco Passarotti</p>
        <p className="text-foreground/80 leading-relaxed mb-5">Can examples with similar grammatical structure help a language model parse sentences better than examples with similar meaning? I designed a retrieval method combining part-of-speech statistics and length filtering, and benchmarked six prompting strategies across two open-weight LLMs.</p>
        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          {[ ["+1.9 / +2.7 pp", "LAS over semantic retrieval"], ["2,077", "English-EWT test sentences"], ["2 models", "gpt-oss-120b · Qwen2.5-72B"] ].map(([value, label]) => <div key={label} className="rounded-lg bg-secondary p-4"><p className="text-xl font-semibold mb-1">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div>)}
        </div>
        <p className="text-sm text-muted-foreground mb-6">Paired-bootstrap 95% confidence intervals exclude zero for both improvements. Findings are scoped to English-EWT; prompts, archived outputs, and evaluation code are available for reproduction.</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild><a href="https://arxiv.org/abs/2610.31966" target="_blank" rel="noopener noreferrer"><FileText className="mr-2 h-4 w-4" />Paper</a></Button>
          <Button variant="outline" asChild><a href="https://github.com/azamafridi23/pos-signature-parsing" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />Code</a></Button>
        </div>
      </Card>
    </div>
  </section>
);
export default Research;
