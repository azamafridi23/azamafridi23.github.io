import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Programming Languages": ["Python", "Java", "C++", "JavaScript", "TypeScript", "R", "SQL"],
  "AI/ML Frameworks": [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Keras",
    "Hugging Face",
    "OpenCV",
  ],
  "Data Science": [
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
    "Statistical Analysis",
  ],
  "Web Development": ["React", "Node.js", "FastAPI", "Django", "REST APIs", "Docker"],
  "Tools & Platforms": ["Git", "AWS", "Google Cloud", "Linux", "PostgreSQL", "MongoDB"],
  "Research Skills": [
    "Experimental Design",
    "Technical Writing",
    "Literature Review",
    "Data Visualization",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="section-alt">
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
