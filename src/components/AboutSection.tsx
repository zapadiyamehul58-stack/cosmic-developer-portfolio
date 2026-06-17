import { GraduationCap, Code, Brain, Sparkles, User, Cpu, Rocket } from "lucide-react";

const interests = [
  { icon: Code, label: "Python & Web Dev", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Brain, label: "Data Science & ML", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { icon: Sparkles, label: "AI & Automation", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { icon: Cpu, label: "Deep Learning", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { icon: GraduationCap, label: "Continuous Learning", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="section-fade text-center lg:text-left mb-16">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <User size={16} className="text-primary fill-primary" />
            <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold">// BIOGRAPHY</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="section-fade max-w-4xl mx-auto">
          <div className="relative glass glow-border p-8 sm:p-10 overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="flex items-start gap-3 mb-6">
              <Rocket size={22} className="text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground/90 leading-relaxed text-lg">
                I'm a <span className="text-primary font-semibold">BCA student at Atmiya University, Rajkot</span> with
                a strong passion for building intelligent, real-world applications using{" "}
                <span className="text-primary font-semibold">Python, AI/ML, and modern web technologies</span>.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Over the past 2+ years, I've developed multiple full-stack projects — from{" "}
              <span className="text-foreground/80 font-medium">high-speed file sharing platforms</span> to{" "}
              <span className="text-foreground/80 font-medium">AI-powered image generators</span> and{" "}
              <span className="text-foreground/80 font-medium">prompt extraction tools</span>. I actively
              participate in hackathons, earning certificates from national-level coding competitions and
              AI summits.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              My toolkit includes <span className="text-foreground/80 font-medium">React, TypeScript, Python, Pandas, TensorFlow, and Scikit-learn</span>.
              I'm driven by curiosity and always exploring the intersection of{" "}
              <span className="text-primary font-medium">data science</span>,{" "}
              <span className="text-primary font-medium">AI automation</span>, and{" "}
              <span className="text-primary font-medium">creative web experiences</span>.
            </p>

            {/* Interest pills */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {interests.map(({ icon: Icon, label, color, bg, border }) => (
                <div
                  key={label}
                  className={`${bg} ${border} border rounded-xl p-3 text-center group cursor-default hover:scale-[1.04] transition-all duration-300`}
                >
                  <Icon
                    size={22}
                    className={`mx-auto mb-1.5 ${color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-[11px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors leading-tight block">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
