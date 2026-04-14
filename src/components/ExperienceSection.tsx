import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Imbusoft, Rajkot",
    role: "Data Science Intern",
    period: "13-01-2026 – Present",
    description: [
      "Worked on real-world Data Science and Machine Learning tasks using Python",
      "Performed data cleaning, preprocessing, and visualization using Pandas and Matplotlib",
      "Assisted in building ML models for prediction-based projects",
      "Gained practical experience in project workflow and deployment concepts",
      "Collaborated with team members to improve model accuracy and project structure",
    ],
    icon: Briefcase,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <Briefcase size={18} className="text-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase font-bold">
              // Experience
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-blue-500 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Date Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 mb-4">
                  <Calendar size={12} className="text-primary" />
                  <span className="text-xs font-mono font-bold text-primary">
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
                <div className="glass hover-glow p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <exp.icon size={28} className="text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-4 italic">
                        {exp.role}
                      </p>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                            <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
