import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="relative py-8 border-t border-border/30">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2026 Mehul Zapadiya</p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/zapadiyamehul58-stack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:zapadiyamehul58@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
