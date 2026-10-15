import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshay Kumar — Biotechnology & Web Tech Explorer" },
      { name: "description", content: "Portfolio of Akshay Kumar, Biotechnology undergraduate at LPU blending science with web development." },
      { property: "og:title", content: "Akshay Kumar — Biotech & Web Tech" },
      { property: "og:description", content: "Combining scientific principles with web development to build purposeful digital solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { group: "Web Technologies", items: [["HTML5", 75], ["Web Fundamentals", 70]] },
  { group: "Software & Tools", items: [["MS Word", 85], ["Productivity Tools", 80]] },
  { group: "Domain Focus", items: [["Biotechnology Concepts", 80], ["Tech & Bio Interfaces", 65]] },
] as const;

const lab = [
  { tag: "WEB_DEV", title: "Web Projects", desc: "Upcoming web builds and interactive experiments." },
  { tag: "RESEARCH", title: "Academic Research", desc: "Biotechnology research work in progress at LPU." },
  { tag: "BIO_TECH", title: "Bio × Tech", desc: "Tools exploring technology's interface with biology." },
];

function Label({ n, t }: { n: string; t: string }) {
  return (
    <p className="font-mono text-sm text-primary mb-3">
      <span className="text-accent">{n}.</span> // {t}
    </p>
  );
}

function Index() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message.slice(0, 1000)}\n\n— ${form.name.slice(0, 100)} (${form.email.slice(0, 255)})`);
    window.location.href = `mailto:akshay6204kumar@gmail.com?subject=${encodeURIComponent("Portfolio contact from " + form.name.slice(0, 100))}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-[60%] -right-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl" />

      <nav className="sticky top-0 z-20 border-b backdrop-blur bg-background/70">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16 font-mono text-sm">
          <a href="#home" className="text-primary">&lt;AK /&gt;</a>
          <div className="flex gap-6 text-muted-foreground">
            {["about", "skills", "lab", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative mx-auto max-w-6xl px-6">
        <section id="home" className="min-h-[90vh] grid md:grid-cols-[1.3fr_1fr] gap-12 items-center py-20">
          <div>
            <p className="font-mono text-sm text-accent mb-4">&gt; init portfolio --user akshay</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Akshay <span className="text-gradient">Kumar</span>
            </h1>
            <p className="mt-4 font-mono text-lg text-primary">Biotechnology & Web Tech Explorer</p>
            <p className="mt-6 max-w-xl text-muted-foreground text-lg leading-relaxed">
              Combining scientific principles with web development to build purposeful digital solutions and explore technology's interface with human biology.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
              <a href="#about" className="rounded-md bg-primary px-6 py-3 text-primary-foreground glow hover:opacity-90 transition">About Me</a>
              <a href="#contact" className="rounded-md border border-primary px-6 py-3 text-primary hover:bg-primary/10 transition">Contact Information</a>
            </div>
          </div>
          <div className="relative mx-auto h-72 w-72 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full ring-spin blur-[2px]" />
            <div className="absolute inset-[6px] rounded-full bg-background flex items-center justify-center overflow-hidden">
              <div className="grid-bg absolute inset-0" />
              <span className="relative font-mono text-6xl font-bold text-gradient">AK</span>
            </div>
            <span className="absolute -top-2 -right-2 font-mono text-xs text-accent border border-accent/40 rounded px-2 py-1 bg-background">[bio.online]</span>
            <span className="absolute -bottom-2 -left-2 font-mono text-xs text-primary border border-primary/40 rounded px-2 py-1 bg-background">[dev.mode]</span>
          </div>
        </section>

        <section id="about" className="py-24 grid md:grid-cols-2 gap-12">
          <div>
            <Label n="01" t="about_me" />
            <h2 className="text-4xl font-bold mb-6">Where biology meets code.</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Biotechnology undergraduate at Lovely Professional University (LPU), blending scientific curiosity with digital skills. I'm fascinated by how technology can decode, model and support living systems — and I'm learning web development to build tools at that intersection.
            </p>
          </div>
          <ol className="relative border-l border-primary/30 pl-8 space-y-10 mt-4">
            {[
              ["Currently Pursuing", "B.Tech in Biotechnology", "Lovely Professional University"],
              ["Completed", "Secondary School Education", "D.P.S. Gaya, Bihar"],
            ].map(([when, what, where]) => (
              <li key={what} className="relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-accent glow" />
                <p className="font-mono text-xs text-accent">{when}</p>
                <h3 className="text-xl font-semibold mt-1">{what}</h3>
                <p className="text-muted-foreground">{where}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="py-24">
          <Label n="02" t="skills" />
          <h2 className="text-4xl font-bold mb-10">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.group} className="rounded-lg border bg-card/60 p-6 hover:border-primary hover:glow transition">
                <h3 className="font-mono text-primary mb-6">{s.group}</h3>
                <div className="space-y-5">
                  {s.items.map(([name, v]) => (
                    <div key={name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{name}</span><span className="font-mono text-muted-foreground">{v}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="lab" className="py-24">
          <Label n="03" t="in_the_lab" />
          <h2 className="text-4xl font-bold mb-10">Upcoming Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {lab.map((p) => (
              <div key={p.title} className="rounded-lg border border-dashed border-primary/40 p-6 bg-card/40 hover:border-accent transition">
                <div className="flex justify-between font-mono text-xs mb-8">
                  <span className="text-accent">{p.tag}</span>
                  <span className="text-muted-foreground animate-pulse">● compiling</span>
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24 grid md:grid-cols-2 gap-12">
          <div>
            <Label n="04" t="contact" />
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-3 font-mono text-sm">
              <a href="mailto:akshay6204kumar@gmail.com" className="block text-primary hover:underline">→ akshay6204kumar@gmail.com</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="block text-accent hover:underline">→ GitHub Profile</a>
            </div>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <input required maxLength={100} placeholder="Name" className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" maxLength={255} placeholder="Email" className="field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea required maxLength={1000} rows={5} placeholder="Message" className="field" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button className="w-full rounded-md bg-primary py-3 font-mono text-primary-foreground glow hover:opacity-90 transition">send_message()</button>
          </form>
        </section>
      </main>
      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">© 2026 Akshay Kumar</footer>
    </div>
  );
}
