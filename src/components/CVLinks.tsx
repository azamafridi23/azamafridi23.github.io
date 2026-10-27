import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const cvPath = "/cv/Muhammad-Azam-Afridi-CV.pdf";

const CVLinks = () => (
  <div className="flex flex-wrap justify-center gap-3">
    <Button variant="outline" size="lg" asChild>
      <a href={cvPath} target="_blank" rel="noopener noreferrer"><FileText className="mr-2 h-4 w-4" />View CV</a>
    </Button>
    <Button variant="ghost" size="lg" asChild>
      <a href={cvPath} download="Muhammad-Azam-Afridi-CV.pdf"><Download className="mr-2 h-4 w-4" />Download CV</a>
    </Button>
  </div>
);
export default CVLinks;
