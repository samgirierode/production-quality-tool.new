import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background paintings */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Magnetic field painting */}
        <svg
          className="absolute left-1/2 top-[10%] -translate-x-1/2 opacity-20 blur-[0.5px] animate-pulse"
          width="1200"
          height="600"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="mag" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="600" cy="300" rx="400" ry="200" fill="url(#mag)" />
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M ${600 + 80 * Math.cos((i * Math.PI) / 6)} ${
                300 + 40 * Math.sin((i * Math.PI) / 6)
              } C ${600 + 200 * Math.cos((i * Math.PI) / 6)} ${
                300 + 100 * Math.sin((i * Math.PI) / 6)
              } ${600 + 320 * Math.cos((i * Math.PI) / 6)} ${
                300 + 160 * Math.sin((i * Math.PI) / 6)
              } ${600 + 380 * Math.cos((i * Math.PI) / 6)} ${
                300 + 190 * Math.sin((i * Math.PI) / 6)
              }`}
              stroke="url(#mag)"
              strokeWidth="1.5"
              fill="none"
              opacity={0.4 + (i % 3) * 0.2}
            />
          ))}
        </svg>

        {/* Cloud painting */}
        <svg
          className="absolute -right-40 top-[40%] opacity-15"
          width="600"
          height="400"
          viewBox="0 0 600 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloud" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="80" ry="40" fill="url(#cloud)" />
          <ellipse cx="260" cy="190" rx="90" ry="45" fill="url(#cloud)" />
          <ellipse cx="320" cy="200" rx="75" ry="38" fill="url(#cloud)" />
          <ellipse cx="240" cy="220" rx="85" ry="42" fill="url(#cloud)" />
        </svg>

        {/* Comet painting */}
        <svg
          className="absolute -left-60 top-[70%] opacity-25 animate-[float_8s_ease-in-out_infinite]"
          width="400"
          height="200"
          viewBox="0 0 400 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="comet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M 20 100 Q 150 90 280 60 L 320 40 L 310 70 L 290 110 Q 170 130 40 120 Z"
            fill="url(#comet)"
          />
          <circle cx="310" cy="70" r="3" fill="#fcd34d" opacity="0.9" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-violet-400" />
          <span className="text-sm font-medium tracking-tight">Surface</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <Link href="#features" className="transition hover:text-white">
            Features
          </Link>
          <Link href="#download" className="transition hover:text-white">
            Download
          </Link>
          <Link href="#docs" className="transition hover:text-white">
            Docs
          </Link>
        </nav>
        <Link
          href="#download"
          className="rounded-full border border-white/10 px-4 py-1.5 text-sm transition hover:border-white/20 hover:bg-white/5"
        >
          Get Agent
        </Link>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Now in beta</span>
          </div>
          <h1 className="text-balance text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl">
            Agent by Surface
          </h1>
          <p className="mt-6 text-balance text-lg text-white/60 sm:text-xl">
            A fast, focused AI coding agent built for the flow. Clean as
            Linear, precise as Cursor.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#download"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Download Agent
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 3.5L11 8L6.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-sm transition hover:border-white/20 hover:bg-white/5"
            >
              See features
            </Link>
          </div>
        </div>

        {/* Subtle product preview */}
        <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
          <div className="absolute -inset-x-20 -top-20 -bottom-40 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent shadow-[0_60px_120px_-80px_rgba(139,92,246,0.6)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <div className="ml-4 text-xs text-white/40">agent.surface</div>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-[220px_1fr] md:p-8">
              <div className="hidden flex-col gap-2 text-sm text-white/40 md:flex">
                <div className="text-white/80">Explorer</div>
                <div>src/</div>
                <div>components/</div>
                <div>lib/</div>
                <div>app/</div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="text-white/40">
                  <span className="text-violet-300">function</span>{" "}
                  <span className="text-white">buildAgent</span>() {"{"}
                </div>
                <div className="pl-4 text-white/60">
                  <span className="text-cyan-300">const</span> flow ={" "}
                  <span className="text-emerald-300">await</span> planTask();
                </div>
                <div className="pl-4 text-white/60">
                  <span className="text-cyan-300">const</span> diff ={" "}
                  <span className="text-emerald-300">await</span> apply(flow);
                </div>
                <div className="pl-4 text-white/60">
                  <span className="text-emerald-300">return</span>{" "}
                  <span className="text-amber-200">verify</span>(diff);
                </div>
                <div className="text-white/40">{"}"}</div>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Agent thinking · Applying changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Built for focus
          </h2>
          <p className="mt-4 text-balance text-white/60">
            Everything you need, nothing in the way.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Agent-native",
              desc: "Plan, edit, and verify in one continuous flow.",
            },
            {
              title: "Context aware",
              desc: "Understands your codebase without overexplaining.",
            },
            {
              title: "Lightning fast",
              desc: "Snappy responses with minimal latency.",
            },
            {
              title: "Keyboard-first",
              desc: "Stay in flow with shortcuts that just work.",
            },
            {
              title: "Safe by default",
              desc: "Clear diffs, easy to review and apply.",
            },
            {
              title: "Cross-platform",
              desc: "Native on macOS, Windows, and Linux.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition hover:border-white/20"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/60">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section
        id="download"
        className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24"
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-2xl px-6 py-12 text-center md:py-16">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Download Agent
            </h2>
            <p className="mt-4 text-balance text-white/60">
              Available for web, macOS, Windows, and Linux.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">
                Download for macOS
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-sm transition hover:border-white/20 hover:bg-white/5">
                Download for Windows
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-sm transition hover:border-white/20 hover:bg-white/5">
                Download for Linux
              </button>
            </div>
            <p className="mt-4 text-xs text-white/40">
              Web app available at app.surface.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-400" />
            <span>Surface</span>
          </div>
          <div>© 2026 Surface. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}


