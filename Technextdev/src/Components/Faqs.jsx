import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Copy, Printer } from "lucide-react";

// TechnextSolution FAQ React component (single-file .jsx)
// Tailwind CSS required in the host project.

const faqData = [
  {
    id: 1,
    q: "What services does TechnextSolution offer?",
    a: "TechnextSolution provides web & mobile app development, custom software solutions, UI/UX design, and cloud architecture & DevOps services tailored for startups and enterprises.",
    tags: ["Services", "Overview"],
  },
  {
    id: 2,
    q: "How do I request a project quote?",
    a: "Click the 'Get a Quote' button on our website or email us at contact@technextsolution.com with your project brief. We'll respond within 48 business hours with next steps.",
    tags: ["Sales", "Process"],
  },
  {
    id: 3,
    q: "What technologies does your team specialize in?",
    a: "Our team works with React, Next.js, Node.js, TypeScript, Flutter, Python (Django/Flask), AWS, Azure, Docker, and Kubernetes among others.",
    tags: ["Tech", "Stack"],
  },
  {
    id: 4,
    q: "Do you sign NDAs and handle confidential projects?",
    a: "Yes — we commonly sign NDAs and follow strict internal security protocols. We can also adapt to your legal and data-protection requirements.",
    tags: ["Legal", "Security"],
  },
  {
    id: 5,
    q: "What is your typical project timeline?",
    a: "Timelines vary by scope. A small MVP can take 6-10 weeks; medium sized apps 3-6 months. We provide a detailed timeline after scoping the project.",
    tags: ["Process", "Timeline"],
  },
  {
    id: 6,
    q: "How do you price your projects?",
    a: "We offer fixed-price proposals for well-defined scopes and time-and-materials (hourly) for iterative projects. We also provide retainer models for long-term partnerships.",
    tags: ["Pricing"],
  },
  {
    id: 7,
    q: "Can you integrate with third-party APIs and legacy systems?",
    a: "Absolutely — we have experience integrating payment gateways, CRMs, analytics, ERPs and bespoke legacy systems using secure, documented APIs.",
    tags: ["Integration", "Tech"],
  },
  {
    id: 8,
    q: "What post-launch support do you provide?",
    a: "We provide maintenance, monitoring, incident response, and feature-iteration services. Support SLAs are customizable depending on your needs.",
    tags: ["Support", "Maintenance"],
  },
  {
    id: 9,
    q: "How do you ensure quality and testing?",
    a: "We combine automated testing (unit, integration, E2E), code reviews, CI pipelines, and manual QA to ensure high-quality deliverables.",
    tags: ["QA", "Process"],
  },
  {
    id: 10,
    q: "Do you offer staff augmentation or dedicated teams?",
    a: "Yes — we provide dedicated engineers, designers, and product managers on a monthly contract basis to act as an extension of your team.",
    tags: ["Hiring", "Services"],
  },
];

export default function TechnextSolutionFAQ() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = useMemo(() => {
    const s = new Set();
    faqData.forEach((f) => f.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqData.filter((f) => {
      const matchQ = q === "" || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      const matchTag = selectedTag === "All" || f.tags.includes(selectedTag);
      return matchQ && matchTag;
    });
  }, [query, selectedTag]);

  function toggle(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  function copyFAQ() {
    const text = filtered.map((f) => `${f.q}\n${f.a}`).join('\n\n');
    navigator.clipboard?.writeText(text);
    // simple visual feedback could be added
  }

  function printFAQ() {
    window.print();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">TechnextSolution — FAQ</h1>
          <p className="text-sm text-slate-500">Answers to common questions about our services, process and support.</p>
        </div>

        <div className="flex gap-2 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="pl-10 pr-3 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <button onClick={copyFAQ} className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm">
            <Copy className="w-4 h-4" /> Copy
          </button>
          <button onClick={printFAQ} className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-md text-sm">
            <Printer className="w-4 h-4" /> Print
          </button>
        </div>
      </header>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              className={`px-3 py-1 rounded-full text-sm border ${selectedTag === t ? 'bg-indigo-600 text-white' : 'bg-slate-50'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <section className="space-y-3">
        {filtered.length === 0 ? (
          <div className="py-8 text-center text-slate-500">No FAQs match your search.</div>
        ) : (
          filtered.map((f) => (
            <article key={f.id} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(f.id)}
                className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-slate-50"
                aria-expanded={activeId === f.id}
              >
                <div>
                  <h3 className="font-medium">{f.q}</h3>
                  <div className="text-xs text-slate-500 mt-1">{f.tags.join(' • ')}</div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeId === f.id ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence initial={false}>
                {activeId === f.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 py-3 bg-slate-50 text-slate-700"
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))
        )}
      </section>

      <footer className="mt-6 text-sm text-slate-500">
        <p>
          Still have questions? <a href="mailto:contact@technextsolution.com" className="text-indigo-600 underline">Contact our team</a> — we usually reply within 48 business hours.
        </p>
      </footer>
    </div>
  );
}
