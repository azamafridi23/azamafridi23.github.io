import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const researchData = [
  {
    title: "Quality over Quantity: Data Concentration is Key for Parameter-Efficient Domain Adaptation",
    authors: "Muhammad Azam Afridi, Rajab Ali, Khurram Khan Jadoon",
    venue: "[under progress]",
    abstract:
      "This research explores the critical role of data concentration in parameter-efficient domain adaptation, demonstrating that quality and strategic data selection significantly outperform quantity-based approaches in achieving effective model adaptation with minimal parameter updates.",
    links: {
      paper: "#",
      code: "#",
    },
  },
];

const Research = () => {
  return (
    <section id="research" className="section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Research & Publications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {researchData.map((paper, index) => (
              <Card
                key={index}
                className="p-6 border-[hsl(var(--card-border))] card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
                    <p className="text-sm text-accent font-medium mb-4">{paper.venue}</p>
                    <p className="text-foreground/80 mb-4">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Paper
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
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

export default Research;
