import { GraduationCap, Calendar, BookOpen, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const entries = [
  {
    title: "Imbuesoft LLP, Rajkot",
    subtitle: "Data Science Intern",
    period: "Jan 2026 – Present",
    details: "Working on real-world Data Science and Machine Learning tasks using Python. Performing data cleaning, preprocessing, and visualization using Pandas, NumPy, and Matplotlib. Assisting in building ML models (Scikit-learn, TensorFlow) for prediction-based projects. Gaining practical experience in project workflow, data analysis, and deployment concepts.",
    grades: null,
    icon: GraduationCap, 
    color: "primary",
  },
  {
    title: "Atmiya University",
    subtitle: "Bachelor of Computer Applications (BCA)",
    period: "2024 – 2027",
    details: "Focus Areas: Data Science, Artificial Intelligence, Web Development. Built AI/ML and Streamlit-based real-world projects. Participated in hackathons and technical project development.",
    grades: "SGPA: 8.57 • Overall CGPA: 9.20 (up to 3rd semester)",
    icon: GraduationCap,
    color: "secondary",
  },
  {
    title: "AASTHA School",
    subtitle: "Higher Secondary Education (12th Commerce)",
    period: "2022 – 2024",
    details: "Studied Mathematics/Statistics/Computer - (Commerce stream). Developed strong interest in programming and technology. Started learning basic coding and logical problem solving.",
    grades: "Achieved 93.71 Percentile Rank",
    icon: GraduationCap,
    color: "primary",
  },
];

const EducationExperienceSection = () => {
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
            <BookOpen size={18} className="text-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase font-bold">
              // Evolution
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
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-blue-500 rounded-full" />

          <div className="space-y-12">
            {entries.map((item, index) => (
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 mb-4 bg-primary/5">
                  <Calendar size={12} className="text-primary" />
                  <span className="text-xs font-mono font-bold text-primary">
                    {item.period}
                  </span>
                </div>

                {/* Card */}
                <div className="glass hover-glow p-6 sm:p-8 rounded-2xl relative overflow-hidden group border-white/5 bg-[#080d1a]/80">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <item.icon size={28} className="text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-4 italic text-sm">
                        {item.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                        {item.details}
                      </p>
                      
                      {item.grades && (
                        <div className="inline-block px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-xs font-mono text-primary">
                          {item.grades}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download CTA — integrated into the flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://drive.google.com/file/d/1N3vQTstp3PMw1U3M5z4ljzOXRCyR-cDK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 glass-strong glow-border px-8 py-4 rounded-xl font-bold text-foreground hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest text-primary font-mono font-bold leading-none mb-1">Portfolio Asset</span>
                <span className="text-lg">Download Full Resume</span>
              </div>
            </div>
            
            <div className="ml-4 w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Calendar size={18} />
            </div>
          </a>
          <p className="mt-4 text-muted-foreground text-xs font-mono uppercase tracking-[0.2em]">PDF Formate • Direct Download</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
