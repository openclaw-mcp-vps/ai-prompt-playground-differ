export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual Diff for{" "}
          <span className="text-[#58a6ff]">AI Prompt Iterations</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Compare AI prompt outputs side-by-side with precise diff highlighting.
          Track every iteration, spot regressions instantly, and ship better prompts faster.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No lock-in.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-24">
        {[
          { icon: "⚡", title: "Instant Diff", desc: "Character and line-level diffing across prompt versions in real time." },
          { icon: "📜", title: "Prompt History", desc: "Every iteration saved. Roll back or branch from any previous version." },
          { icon: "🔍", title: "Change Insights", desc: "Understand exactly what changed and how it affected the output." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited prompt comparisons",
              "Full version history",
              "Side-by-side diff viewer",
              "Export diffs as HTML or JSON",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "What AI models does it support?",
              a: "You paste any text output — from GPT-4, Claude, Gemini, or any other model. The differ is model-agnostic."
            },
            {
              q: "Is my prompt data private?",
              a: "Yes. Your prompts and outputs are stored encrypted and are never used for training or shared with third parties."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Absolutely. Cancel any time from your billing portal with one click. No questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} AI Prompt Playground Differ. All rights reserved.
      </footer>
    </main>
  )
}
