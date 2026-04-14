import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    institution: "Atmiya University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2024 – 2027",
    details: "Focus Areas: Data Science, Artificial Intelligence, Web Development. Built AI/ML and Streamlit-based real-world projects. Participated in hackathons and technical project development.",
    grades: "SGPA: 8.57 • Overall CGPA: 9.20 (up to 3rd semester)",
    icon: GraduationCap,
  },
  {
    institution: "AASTHA School",
    degree: "Higher Secondary Education (12th Commerce)",
    period: "2022 – 2024",
    details: "Studied Mathematics/Statistics/Computer - (Commerce stream). Developed strong interest in programming and technology. Started learning basic coding and logical problem solving.",
    grades: "Achieved 93.71 Percentile Rank",
    icon: BookOpen,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <BookOpen size={18} className="text-secondary" />
            <span className="text-secondary font-mono text-sm tracking-[0.2em] uppercase font-bold">
              // Education
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Education & <span className="text-gradient">Learning</span>
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-secondary to-blue-500 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary via-blue-500 to-primary rounded-full" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-secondary bg-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>

                {/* Date Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-secondary/30 mb-4">
                  <Calendar size={12} className="text-secondary" />
                  <span className="text-xs font-mono font-bold text-secondary">
                    {edu.period}
                  </span>
                </div>

                {/* Card */}
                <div className="glass hover-glow p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/10 via-blue-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                      <edu.icon size={28} className="text-secondary" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-2 italic">
                        {edu.degree}
                      </p>

                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                        {edu.details}
                      </p>

                      {edu.grades && (
                        <div className="inline-block px-3 py-1.5 rounded-lg bg-secondary/5 border border-secondary/20 text-xs font-mono text-secondary">
                          {edu.grades}
                        </div>
                      )}
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

export default EducationSection;
