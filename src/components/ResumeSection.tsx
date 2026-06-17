import { Download, GraduationCap, Briefcase, Code, Award } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="section-fade">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
            Academic journey and professional profile
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div className="section-fade glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={22} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                <h4 className="font-semibold text-foreground">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-primary text-sm font-mono">Atmiya University • 2024 – 2027</p>
                <p className="text-muted-foreground text-sm mt-1">SGPA: 8.57 • Overall CGPA: 9.20 (up to 3rd semester)</p>
              </div>
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground">Higher Secondary Certificate (12th – Commerce)</h4>
                <p className="text-primary text-sm font-mono">Aastha School • 2023 – 2024</p>
                <p className="text-muted-foreground text-sm mt-1">Achieved 93.71 Percentile Rank</p>
              </div>
            </div>
          </div>

          {/* Key Skills Summary */}
          <div className="section-fade glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code size={22} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Technical Highlights</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Python", "Java", "PHP", "HTML/CSS", "JavaScript", "Bootstrap", "Pandas", "NumPy", "Scikit-learn", "MySQL", "Oracle", "GitHub"].map((s) => (
                <div key={s} className="px-3 py-2 text-sm font-mono text-center rounded-lg bg-muted/50 text-muted-foreground border border-border/50">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements quick */}
          <div className="section-fade glass p-8">
            <div className="flex items-center gap-3 mb-4">
              <Award size={22} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Activities & Achievements</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Cyber Treasure Hunt & Gujarat Eco-Grid & Power participation</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Self-trained in Web Development & Data Science</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Developed mini projects using real-world datasets</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Participated in hackathons and technical workshops</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">▸</span> Exploring AI & Machine Learning fundamentals</li>
            </ul>
          </div>

          {/* Download CTA */}
          <div className="section-fade text-center">
            <a
              href="/Mehul_Zapadiya_Resume.pdf"
              download="Mehul_Zapadiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 glass glow-border px-8 py-4 font-semibold text-primary hover:bg-primary/10 transition-all glow-sm text-lg"
            >
              <Download size={20} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
