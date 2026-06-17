import { Trophy, Award, Cpu, Code, Medal, Palette, ShieldCheck, ExternalLink, Users, Terminal, Code2, PenTool, MessageSquare, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Cpu,
    title: "AI Hackathon Participant",
    subtitle: "Atmiya AI Summit 2026",
    desc: "Built AI solutions for renewable energy and climate action, focusing on social and rural empowerment.",
    link: "https://drive.google.com/file/d/1d3CI_d25zn5Pa5zncc79LskemoMUpeiQ/view?usp=sharing",
  },
  {
    icon: Code,
    title: "National Level Hackathon",
    subtitle: "Code Carnival Season 02",
    desc: "Solved real-world technical problems through coding and innovation in a 36-hour national competition.",
    link: "https://drive.google.com/file/d/1IBrd5rJOVwsIl_iXQo7aLdHKEIOXHWEM/view?usp=sharing",
  },
  {
    icon: Medal,
    title: "Academic Excellence",
    subtitle: "Certificate of Appreciation",
    desc: "Recognized for securing a Top Rank and active engagement in Computer Science academic activities.",
    link: "https://drive.google.com/file/d/15W9dShnBQxPYB8P21nPKeS1_F8O7uQro/view?usp=sharing",
  },
  {
    icon: Palette,
    title: "Sanskriti Creation Fest 2025",
    subtitle: "Participant",
    desc: "Explored creativity and technical collaboration at Atmiya University's annual creation festival.",
    link: "https://drive.google.com/file/d/1FyHKSmIdIP9SXLCbwuxPSvDfYTAuVgOl/view?usp=sharing",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Treasure Hunt (CTF)",
    subtitle: "AU Fest 2026",
    desc: "Solved complex cybersecurity challenges in cryptography and web exploitation to strengthen analytical skills.",
    link: "https://drive.google.com/file/d/1bMq5mOXj9hIk81kRicNCTRTKhhv1SlwR/view?usp=sharing",
  },
  {
    icon: Users,
    title: "Volunteer",
    subtitle: "Atmiya Avsar Saptdhara 2025",
    desc: "Managed event coordination and smooth execution for the flagship art and cultural festival.",
    link: "https://drive.google.com/file/d/1VL7gxIeoBHIHRKWSBbl-jF8fASUE9-A9/view?usp=sharing",
  },
  {
    icon: Terminal,
    title: "Kali Linux Basics",
    subtitle: "Simplilearn SkillUp",
    desc: "Mastered fundamental Kali Linux concepts and cybersecurity tools for ethical hacking.",
    link: "https://drive.google.com/file/d/1XmhFj5wQNhUNHCoCGRSBiXMhPan7B6W3/view?usp=sharing",
  },
  {
    icon: Code2,
    title: "OOPs in Java",
    subtitle: "Simplilearn SkillUp",
    desc: "Strengthened software development skills through core OOP principles like inheritance and polymorphism.",
    link: "https://drive.google.com/file/d/1N-uLII0jdTxJLlev5jyaLPNAXKjntSLj/view?usp=sharing",
  },
  {
    icon: PenTool,
    title: "Blogging Basics",
    subtitle: "Simplilearn SkillUp",
    desc: "Developed digital communication skills through content writing strategies and online publishing techniques.",
    link: "https://drive.google.com/file/d/1ZsgJ_XiIKfJvuBEGPrG7GRmn1DanehFJ/view?usp=sharing",
  },
  {
    icon: MessageSquare,
    title: "Google Chat",
    subtitle: "Google Cloud & Simplilearn",
    desc: "Enhanced workplace productivity using professional team communication and collaboration platforms.",
    link: "https://drive.google.com/file/d/1cblhcjLafoiZP2k1lBCfv5qnneHI8RX7/view?usp=sharing",
  },
  {
    icon: Code,
    title: "Hackathon 2.0 Participant",
    subtitle: "Tech Innovation Challenge",
    desc: "Participated in Hackathon 2.0 — tackled real-world problems through rapid prototyping, collaborative coding, and innovative solution building under time constraints.",
    link: "https://drive.google.com/file/d/1KSd1HSKexuvFxrjr5EgIFZiTBdPqWeyz/view?usp=sharing",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="section-fade text-center lg:text-left mb-16">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <Award size={16} className="text-primary fill-primary" />
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold">// MILESTONES</p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Key <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary/30 rounded-full mt-4 mx-auto lg:mx-0" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4">
        {achievements.map((a) => (
          <div key={`${a.title}-${a.subtitle}`} className="snap-center section-fade card flex flex-col h-full group hover:border-primary/50 transition-all duration-300 w-full">
            <div className="mb-6 flex-grow">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <a.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{a.title}</h3>
              <p className="text-primary font-medium text-sm mb-4">{a.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>

            <div className="mt-auto pt-6 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href={a.link} target="_blank" rel="noopener noreferrer">
                  Show Certificate <ExternalLink size={14} />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
