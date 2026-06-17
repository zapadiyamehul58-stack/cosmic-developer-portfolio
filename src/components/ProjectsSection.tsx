import { Layout, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  accent: "cyan" | "green" | "purple" | "blue" | "pink";
}

const projects: Project[] = [
  {
    title: "India FileShare",
    desc: "High-speed file sharing with parallel 5MB chunk uploads. Instant download link on upload complete — no login needed.",
    tech: ["TypeScript", "React", "Node.js", "S3"],
    githubUrl: "https://github.com/zapadiyamehul58-stack/india_fileshare",
    liveUrl: "https://india-fileshare.vercel.app",
    image: "/india_fileshare.png",
    accent: "cyan",
  },
  {
    title: "Gujrat Eco Grid",
    desc: "Smart renewable energy grid monitoring for Gujarat. Real-time solar & wind tracking, energy flow analytics, and CO₂ savings.",
    tech: ["Python", "React", "Data Viz", "IoT"],
    githubUrl: "https://github.com/zapadiyamehul58-stack/Gujrat-eco-grid",
    image: "/eco_grid.png",
    accent: "green",
  },
  {
    title: "Prompt Extractor",
    desc: "Intelligent AI-powered tool that analyzes any uploaded image to generate high-fidelity, descriptive prompts for creative AI workflows.",
    tech: ["Python", "Vision API", "React", "AI/ML"],
    githubUrl: "https://github.com/zapadiyamehul58-stack/Prompt-Extractor",
    image: "/prompt_extractor.png",
    accent: "blue",
  },
  {
    title: "Swift Share",
    desc: "Real-time P2P file sharing via WebRTC — server-free, zero-latency direct device-to-device transfers.",
    tech: ["TypeScript", "WebRTC", "React"],
    githubUrl: "https://github.com/zapadiyamehul58-stack/swiftshere",
    image: "/swiftshare_new.png",
    accent: "purple",
  },
  {
    title: "DS with Python",
    desc: "Data Science notebooks with EDA, Matplotlib charts, and real-world dataset insights using Pandas.",
    tech: ["Python", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/zapadiyamehul58-stack/DS-with-Python",
    image: "/ds_python_new.png",
    accent: "pink",
  },
  {
    title: "VisionMorph AI",
    desc: "Advanced AI image generator that creates stunning visuals from text prompts while maintaining perfect facial identity through identity-preserving diffusion.",
    tech: ["Python", "AI/ML", "React", "LoRA"],
    githubUrl: "https://github.com/zapadiyamehul58-stack/Image-Generator",
    image: "/vision_morph.png",
    accent: "purple",
  },
];

type AccentKey = Project["accent"];

const accents: Record<AccentKey, {
  border: string;
  glow: string;
  tag: string;
  btn: string;
  bar: string;
  liveBadge: string;
  liveBtn: string;
  titleHover: string;
}> = {
  cyan: {
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-[0_8px_40px_rgba(6,182,212,0.2)]",
    tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    btn: "group-hover:bg-cyan-500/90 group-hover:text-white group-hover:border-cyan-500",
    bar: "from-cyan-500/0 via-cyan-500 to-cyan-500/0",
    liveBadge: "bg-cyan-500/20 border-cyan-500/40 text-cyan-400",
    liveBtn: "bg-green-500/10 text-green-400 border-green-500/25 hover:bg-green-500/20 hover:border-green-400/50",
    titleHover: "group-hover:text-cyan-400",
  },
  green: {
    border: "hover:border-green-500/40",
    glow: "group-hover:shadow-[0_8px_40px_rgba(34,197,94,0.2)]",
    tag: "bg-green-500/10 text-green-400 border-green-500/25",
    btn: "group-hover:bg-green-500/90 group-hover:text-white group-hover:border-green-500",
    bar: "from-green-500/0 via-green-500 to-green-500/0",
    liveBadge: "bg-green-500/20 border-green-500/40 text-green-400",
    liveBtn: "bg-green-500/10 text-green-400 border-green-500/25 hover:bg-green-500/20 hover:border-green-400/50",
    titleHover: "group-hover:text-green-400",
  },
  purple: {
    border: "hover:border-purple-500/40",
    glow: "group-hover:shadow-[0_8px_40px_rgba(139,92,246,0.2)]",
    tag: "bg-purple-500/10 text-purple-400 border-purple-500/25",
    btn: "group-hover:bg-purple-500/90 group-hover:text-white group-hover:border-purple-500",
    bar: "from-purple-500/0 via-purple-500 to-purple-500/0",
    liveBadge: "bg-purple-500/20 border-purple-500/40 text-purple-400",
    liveBtn: "bg-purple-500/10 text-purple-400 border-purple-500/25 hover:bg-purple-500/20 hover:border-purple-400/50",
    titleHover: "group-hover:text-purple-400",
  },
  blue: {
    border: "hover:border-blue-500/40",
    glow: "group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.2)]",
    tag: "bg-blue-500/10 text-blue-400 border-blue-500/25",
    btn: "group-hover:bg-blue-500/90 group-hover:text-white group-hover:border-blue-500",
    bar: "from-blue-500/0 via-blue-500 to-blue-500/0",
    liveBadge: "bg-blue-500/20 border-blue-500/40 text-blue-400",
    liveBtn: "bg-blue-500/10 text-blue-400 border-blue-500/25 hover:bg-blue-500/20 hover:border-blue-400/50",
    titleHover: "group-hover:text-blue-400",
  },
  pink: {
    border: "hover:border-pink-500/40",
    glow: "group-hover:shadow-[0_8px_40px_rgba(236,72,153,0.2)]",
    tag: "bg-pink-500/10 text-pink-400 border-pink-500/25",
    btn: "group-hover:bg-pink-500/90 group-hover:text-white group-hover:border-pink-500",
    bar: "from-pink-500/0 via-pink-500 to-pink-500/0",
    liveBadge: "bg-pink-500/20 border-pink-500/40 text-pink-400",
    liveBtn: "bg-pink-500/10 text-pink-400 border-pink-500/25 hover:bg-pink-500/20 hover:border-pink-400/50",
    titleHover: "group-hover:text-pink-400",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="section-fade text-center lg:text-left mb-14">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
            <Layout size={15} className="text-primary fill-primary" />
            <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold">// PORTFOLIO</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto lg:mx-0" />
        </div>

        {/* ── Project Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {projects.map((p) => {
            const a = accents[p.accent];
            return (
              <div
                key={p.title}
                className={`section-fade relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] ${a.border} bg-[#080d1a]/80 backdrop-blur-md transition-all duration-300 group ${a.glow} hover:-translate-y-1.5`}
              >
                {/* ── Image — full visible, no crop ── */}
                <div className="relative w-full overflow-hidden flex-shrink-0 bg-[#0a1020]" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Bottom fade overlay so text blends smoothly */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#080d1a] to-transparent" />

                  {/* Live badge */}
                  {p.liveUrl && (
                    <div className={`absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 backdrop-blur-md px-2.5 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest ${a.liveBadge}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      Live
                    </div>
                  )}
                </div>

                {/* ── Card Body ── */}
                <div className="flex flex-col flex-1 p-4 pt-3">
                  <h3 className={`text-[15px] font-bold text-foreground mb-1.5 transition-colors leading-snug ${a.titleHover}`}>
                    {p.title}
                  </h3>

                  <p className="text-[11px] text-muted-foreground mb-3 flex-1 leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 text-[9px] uppercase font-mono font-bold rounded-md border ${a.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className={`grid gap-2 ${p.liveUrl ? "grid-cols-2" : "grid-cols-1"}`}>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/[0.08] text-foreground/80 font-bold text-[11px] transition-all duration-300 border border-white/10 ${a.btn}`}
                    >
                      <Github size={12} /> Get Code
                    </a>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 py-2 rounded-xl font-bold text-[11px] transition-all duration-300 border ${a.liveBtn}`}
                      >
                        <ExternalLink size={12} /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Accent glow bar at very bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${a.bar}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
