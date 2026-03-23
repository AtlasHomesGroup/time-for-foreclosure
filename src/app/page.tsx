import Link from "next/link";

const modes = [
  {
    href: "/flashcards",
    title: "Flashcard Blitz",
    description:
      "Flip through 54 cards covering Outreach Points, Money Windows, Desk/Field Modes, KPIs, and more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    href: "/number-crunch",
    title: "Number Crunch",
    description:
      "Calculate Outreach Points, funnel conversions, weekly benchmarks, and the 50/30/20 time split.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    href: "/funnel-doctor",
    title: "Funnel Doctor",
    description:
      "Diagnose bottlenecks in real operator funnels using the 6-stage pipeline and benchmark rates.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    href: "/quiz",
    title: "Operator Quiz",
    description:
      "30 questions across all 12 chapters — from overwhelm to operating system mastery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8705A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Brand badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#E8705A] text-white font-bold text-sm">
            N
          </span>
          <span className="text-sm font-semibold text-[#999]">Niche Playbook</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] mb-3 leading-tight">
          Foreclosure Time Mastery Game
        </h1>
        <p className="text-[#666] mb-10 text-base sm:text-lg leading-relaxed">
          Master every concept from{" "}
          <em>How to Use Your Time for Foreclosure Deals</em> by Michael Franke.
          Choose a game mode below to start learning.
        </p>

        {/* Game mode grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modes.map((mode) => (
            <Link key={mode.href} href={mode.href} className="block">
              <div className="game-card p-6 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fdf0ec] to-[#fae8e0] flex items-center justify-center mb-4">
                  {mode.icon}
                </div>
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  {mode.title}
                </h2>
                <p className="text-sm text-[#666] mb-4 flex-1">
                  {mode.description}
                </p>
                <span className="text-sm font-semibold text-[#E8705A]">
                  Play now →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer tagline */}
        <p className="text-center text-[#999] text-sm mt-12 italic">
          &ldquo;You don&apos;t rise to the level of your goals. You fall to the
          level of your daily behavior.&rdquo;
        </p>
      </div>
    </main>
  );
}
