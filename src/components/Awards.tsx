import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const awards = [
  ["Fully funded Erasmus Mundus scholarship", "EMLDS · September 2025"],
  ["Faculty Gold Medal", "GIK Institute · June 2024"],
  ["Academic Honors · Six-time recipient", "GIK Institute · May 2024"],
  ["Best AI Project Competition Winner", "PAF-IAST · May 2024"],
  ["Best CS Project Competition Winner", "NaSCon · March 2024"],
];
const Awards = () => (
  <section id="awards" className="portfolio-section">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <h2 className="text-center mb-10">Awards & Recognition</h2>
      <div className="grid sm:grid-cols-2 gap-4">{awards.map(([title, context]) => <Card key={title} className="p-5 flex items-start gap-3"><Award className="h-5 w-5 shrink-0 text-accent mt-1" /><div><h3 className="text-base font-semibold">{title}</h3><p className="text-sm text-muted-foreground mt-1">{context}</p></div></Card>)}</div>
      <details className="mt-6 border border-border rounded-xl p-5">
        <summary className="cursor-pointer font-medium">Certifications & Community</summary>
        <div className="grid sm:grid-cols-2 gap-6 mt-5 text-sm leading-relaxed">
          <div><h3 className="text-base mb-2">Certifications</h3><ul className="space-y-2 text-accent">
            <li><a className="underline underline-offset-4" href="https://www.coursera.org/account/accomplishments/specialization/J225Z7JZW8YH" target="_blank" rel="noopener noreferrer">Deep Learning Specialization · Coursera</a></li>
            <li><a className="underline underline-offset-4" href="https://www.coursera.org/account/accomplishments/specialization/TX2VWTCYTLZT" target="_blank" rel="noopener noreferrer">Machine Learning Specialization · Coursera</a></li>
            <li><a className="underline underline-offset-4" href="https://www.udemy.com/certificate/UC-83a5461e-7766-4ad7-b9bd-89b9cafbef70/" target="_blank" rel="noopener noreferrer">Python for Machine Learning & Data Science · Udemy</a></li>
          </ul></div>
          <div><h3 className="text-base mb-2">Community</h3><ul className="space-y-2 text-muted-foreground"><li>Team Techno · Executive Admin Events, 2022–2024. Organized four technical workshops and a coding competition.</li><li>Project Topi · IT Team Lead, 2021–2024. Built a community resource web application and organized digital literacy workshops.</li><li>GIKI Sports Society · Event Coordinator, 2021–2024. Coordinated three intramural competitions and led a national sports event.</li></ul></div>
        </div>
      </details>
    </div>
  </section>
);
export default Awards;
