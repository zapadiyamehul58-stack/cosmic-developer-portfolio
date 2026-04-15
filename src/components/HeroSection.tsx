import { useEffect, useState, useRef } from "react";
import { ArrowDown, Download, Mail, Code2, Database, Layout, Cpu, GraduationCap, Server, Brain, Github, Globe, FileCode, BarChart2, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/mehul_profile.png";

const ROLES = [
  "Web Developer",
  "Python Developer",
  "BCA Student",
  "Data Science Enthusiast",
];

const TECH_ICONS = [
  // Inner orbit
  { icon: Code2,    label: "Python",       color: "text-green-400",   bg: "bg-green-500",    orbitRadius: 155, speed: 0.006,  delay: 0     },
  { icon: Globe,    label: "HTML / CSS",   color: "text-orange-400",  bg: "bg-orange-500",   orbitRadius: 155, speed: 0.006,  delay: 3.14  },
  // Second orbit
  { icon: Layout,   label: "React",        color: "text-cyan-400",    bg: "bg-cyan-500",     orbitRadius: 200, speed: 0.0045, delay: 0     },
  { icon: FileCode, label: "JavaScript",   color: "text-yellow-400",  bg: "bg-yellow-500",   orbitRadius: 200, speed: 0.0045, delay: 2.1   },
  { icon: Github,   label: "GitHub",       color: "text-white",        bg: "bg-gray-500",     orbitRadius: 200, speed: 0.0045, delay: 4.2   },
  // Third orbit
  { icon: Brain,    label: "AI / ML",      color: "text-purple-400",  bg: "bg-purple-500",   orbitRadius: 248, speed: 0.003,  delay: 0     },
  { icon: Database, label: "SQL",          color: "text-pink-400",    bg: "bg-pink-500",     orbitRadius: 248, speed: 0.003,  delay: 2.09  },
  { icon: BarChart2,label: "Pandas",       color: "text-teal-400",    bg: "bg-teal-500",     orbitRadius: 248, speed: 0.003,  delay: 4.18  },
  // Outer orbit
  { icon: Cpu,      label: "TensorFlow",   color: "text-orange-400",  bg: "bg-orange-500",   orbitRadius: 298, speed: 0.002,  delay: 0     },
  { icon: Server,   label: "Cloud / API",  color: "text-blue-400",    bg: "bg-blue-500",     orbitRadius: 298, speed: 0.002,  delay: 1.57  },
  { icon: Layers,   label: "Streamlit",    color: "text-red-400",     bg: "bg-red-500",      orbitRadius: 298, speed: 0.002,  delay: 3.14  },
  { icon: Zap,      label: "Scikit-learn", color: "text-lime-400",    bg: "bg-lime-500",     orbitRadius: 298, speed: 0.002,  delay: 4.71  },
];

interface FloatingIconProps {
  icon: React.ElementType;
  color: string;
  bg: string;
  orbitRadius: number;
  speed: number;
  delay: number;
  label: string;
}

const FloatingIcon = ({ icon: Icon, color, bg, orbitRadius, speed, delay, label }: FloatingIconProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const angleRef = useRef(delay);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      angleRef.current += speed;
      setPos({
        x: Math.cos(angleRef.current) * orbitRadius,
        y: Math.sin(angleRef.current) * orbitRadius,
      });
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [orbitRadius, speed]);

  return (
    <div
      className="absolute z-20 group cursor-pointer"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.35, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        {/* Pulse ring */}
        <div className={`absolute -inset-1 rounded-xl ${bg} opacity-0 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500 blur-[6px]`} />
        {/* Card — compact */}
        <div className="relative glass p-1.5 rounded-xl shadow-lg border border-white/10 bg-[#080d1a]/90 backdrop-blur-md z-10">
          <Icon className={`${color} drop-shadow-sm`} size={14} />
          <span className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${bg} animate-pulse`} />
        </div>
        {/* Tooltip */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-white bg-black/80 px-1.5 py-0.5 rounded backdrop-blur-sm border border-white/10 z-30 pointer-events-none">
          {label}
        </div>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Text Content ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="text-xl">👋</span>
              <p className="text-primary font-mono text-sm tracking-[0.2em] uppercase font-bold">Hello, I'm</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight"
            >
              Mehul <span className="text-gradient">Zapadiya</span>
            </motion.h1>

            <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl text-foreground/90 font-mono flex items-center">
                <span className="text-primary mr-3">&gt;</span>
                {text}
                <span className="inline-block w-1 h-8 bg-primary ml-2 animate-pulse" />
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Motivated IT student with a strong foundation in Data Science and Web Development,
              seeking an internship opportunity to apply practical coding skills and gain professional experience.
            </motion.p>

            {/* Buttons — single row, compact */}
            <div className="flex flex-nowrap gap-2.5 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_16px_rgba(6,182,212,0.4)] whitespace-nowrap"
              >
                <Layout size={15} />
                View Projects
              </button>

              <a
                href="/Mehul_Zapadiya_Resume.pdf"
                download="Mehul_Zapadiya_Resume.pdf"
                className="group glass glow-border px-4 py-2.5 rounded-lg font-semibold text-sm text-foreground hover:bg-card/60 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Download size={15} className="text-primary" />
                Download Resume
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="group glass glow-border px-4 py-2.5 rounded-lg font-semibold text-sm text-foreground hover:bg-card/60 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Mail size={15} className="text-primary" />
                Contact Me
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-12 border-t border-white/5 pt-10">
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-bold text-primary">2+</h4>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mt-1">Year Learning</p>
              </div>
            </div>
          </div>

          {/* ── Profile Visual — Solar System ── */}
          <div className="flex-shrink-0 relative mt-10 lg:mt-0">
            <div
              id="hero-center"
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[620px] lg:h-[620px] flex items-center justify-center"
            >
              {/* 4 Orbit Rings — each matches an icon orbit radius */}
              <div className="absolute rounded-full border border-white/[0.06]"   style={{ width: 310,  height: 310  }} />
              <div className="absolute rounded-full border border-white/[0.08]"   style={{ width: 400,  height: 400  }} />
              <div className="absolute rounded-full border border-white/[0.06]"   style={{ width: 496,  height: 496  }} />
              <div className="absolute rounded-full border border-dashed border-white/[0.05]" style={{ width: 596, height: 596 }} />

              {/* Profile Image */}
              <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full group cursor-pointer"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 opacity-20 group-hover:opacity-100 group-hover:animate-spin-slow blur-sm transition-all duration-700" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white/20 shadow-2xl backdrop-blur-sm z-10 bg-[#0a1020]">
                  <img
                    src={profileImg}
                    alt="Mehul Zapadiya"
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.12] transition-all duration-700 ease-out"
                  />
                </div>

                {/* Badge: Python */}
                <div className="absolute top-4 -left-12 sm:-left-20 glass-strong px-4 py-2 rounded-xl flex items-center gap-2 border-green-500/30 animate-float shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Code2 size={14} className="text-green-400" />
                  </div>
                  <span className="text-xs font-bold text-foreground/90 whitespace-nowrap">Python Dev</span>
                </div>

                {/* Badge: BCA */}
                <div className="absolute bottom-12 -right-12 sm:-right-20 glass-strong px-4 py-2 rounded-xl flex items-center gap-2 border-primary/30 animate-float shadow-[0_0_15px_rgba(6,182,212,0.2)]" style={{ animationDelay: "1.5s" }}>
                  <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                    <GraduationCap size={14} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold text-foreground/90 whitespace-nowrap">BCA Student</span>
                </div>
              </motion.div>

              {/* Floating Orbiting Icons */}
              {TECH_ICONS.map((item, i) => (
                <FloatingIcon key={i} {...item} />
              ))}
            </div>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold font-mono">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
