import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "About", "Skills", "Education", "Resume", "Projects", "Achievements", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Track active section
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 120) {
          setActiveSection(NAV_ITEMS[i].toLowerCase());
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="text-xl font-bold flex items-center gap-1 group">
          <span className="text-primary font-mono">&lt;</span>
          <span className="text-gradient">Mehul</span>
          <span className="text-primary font-mono">/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 glass p-1 rounded-full border-white/5 bg-black/20">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${activeSection === item.toLowerCase()
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border/30">
          <ul className="flex flex-col items-center gap-4 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
