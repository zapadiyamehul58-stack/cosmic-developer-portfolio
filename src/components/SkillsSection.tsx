import { Code2, Layers, Brain, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={20} className="text-blue-500" />,
    skills: [
      { name: "SQL", level: 80 },
      { name: "HTML", level: 80 },
      { name: "JavaScript", level: 50 },
      { name: "CSS", level: 70 },
      { name: "C", level: 60 },
      { name: "Python", level: 90 },
      { name: "PHP", level: 75 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Frameworks",
    icon: <Layers size={20} className="text-purple-500" />,
    skills: [
      { name: "Basic Web App Deployment", level: 85 },
      { name: "Streamlit", level: 70 },
      { name: "Basic React", level: 45 },
      { name: "REST API Integration", level: 65 },
    ],
  },
  {
    title: "AI / ML",
    icon: <Brain size={20} className="text-cyan-400" />,
    skills: [
      { name: "Scikit-learn", level: 65 },
      { name: "Model Evaluation", level: 75 },
      { name: "Feature Engineering", level: 65 },
      { name: "Machine Learning Models", level: 60 },
      { name: "Data Preprocessing", level: 70 },
      { name: "TensorFlow", level: 50 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    title: "Tools & Infra",
    icon: <Wrench size={20} className="text-pink-500" />,
    skills: [
      { name: "Jupyter Lab", level: 80 },
      { name: "Jupyter Notebook", level: 80 },
      { name: "Google Colab", level: 65 },
      { name: "Vs Code", level: 85 },
      { name: "Atigravity", level: 75 },
      { name: "Github", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="section-fade text-center lg:text-left mb-16">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <Zap size={16} className="text-primary fill-primary" />
            <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold">// TECH STACK</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="section-fade card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 font-bold">
                <div className="bg-card/80 p-2 rounded-lg border border-white/5">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-mono font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

