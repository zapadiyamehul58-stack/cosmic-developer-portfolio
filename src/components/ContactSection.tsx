import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, Loader2, MessageSquare, Zap } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("access_key", "1cd56e23-4876-4c77-afd1-b2bb2dea4983");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject || `Portfolio Contact from ${form.name}`);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="section-fade text-center lg:text-left mb-16">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <MessageSquare size={16} className="text-primary fill-primary" />
            <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase font-bold">// CONTACT</p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary/30 rounded-full mt-4 mx-auto lg:mx-0" />
        </div>

        <div className="section-fade max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

            <div className="space-y-4">
              <a href="mailto:zapadiyamehul58@gmail.com" className="group block glass-strong p-4 rounded-xl border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</p>
                    <p className="text-sm font-semibold text-foreground/90">zapadiyamehul58@gmail.com</p>
                  </div>
                </div>
              </a>

              <a href="tel:+919313296581" className="group block glass-strong p-4 rounded-xl border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Phone</p>
                    <p className="text-sm font-semibold text-foreground/90">+91 93132 96581</p>
                  </div>
                </div>
              </a>

              <a href="https://github.com/zapadiyamehul58-stack" target="_blank" rel="noopener noreferrer" className="group block glass-strong p-4 rounded-xl border-white/5 hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary-foreground transition-all duration-300">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Github</p>
                    <p className="text-sm font-semibold text-foreground/90">github.com/zapadiyamehul58-stack</p>
                  </div>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group block glass-strong p-4 rounded-xl border-white/5 hover:accent/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-foreground transition-all duration-300">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Linkedin</p>
                    <p className="text-sm font-semibold text-foreground/90">Mehul Zapadiya</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-strong p-8 sm:p-10 rounded-3xl border-white/5 space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Subject (optional)</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-muted-foreground/30"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:to-blue-500 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {status === "sending" ? (
                  <><Loader2 size={20} className="animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle size={20} /> Message Sent!</>
                ) : status === "error" ? (
                  <>Error — Try Again</>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
