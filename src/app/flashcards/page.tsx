"use client";

import { useState, useMemo, useCallback } from "react";
import BackLink from "@/components/BackLink";
import { flashcards } from "@/data/gameData";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const categories = ["All", ...Array.from(new Set(flashcards.map((c) => c.category)))];

export default function FlashcardsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [deck, setDeck] = useState(() => shuffle(flashcards));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [reviewing, setReviewing] = useState(0);
  const [finished, setFinished] = useState(false);

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? deck
        : deck.filter((c) => c.category === selectedCategory),
    [deck, selectedCategory]
  );

  const total = filtered.length;
  const current = filtered[index];
  const completed = known + reviewing;

  const handleCategoryChange = useCallback((cat: string) => {
    setSelectedCategory(cat);
    setIndex(0);
    setFlipped(false);
    setKnown(0);
    setReviewing(0);
    setFinished(false);
  }, []);

  const handleFlip = useCallback(() => setFlipped((f) => !f), []);

  const advance = useCallback(
    (gotIt: boolean) => {
      if (gotIt) setKnown((k) => k + 1);
      else setReviewing((r) => r + 1);
      setFlipped(false);
      if (index + 1 >= total) {
        setFinished(true);
      } else {
        setIndex((i) => i + 1);
      }
    },
    [index, total]
  );

  const restart = useCallback(() => {
    setDeck(shuffle(flashcards));
    setIndex(0);
    setFlipped(false);
    setKnown(0);
    setReviewing(0);
    setFinished(false);
  }, []);

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <BackLink />

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
          Flashcard Blitz
        </h1>
        <p className="text-[#666] text-sm mb-6">
          Flip cards to test your recall. Filter by category, then mark each card.
        </p>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-[#E8705A] text-white"
                  : "bg-white text-[#666] border border-[#f0d8d0] hover:border-[#E8705A] hover:text-[#E8705A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Score badges */}
        <div className="flex gap-3 mb-4">
          <span className="score-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
            Known: {known}
          </span>
          <span className="score-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
            Review: {reviewing}
          </span>
        </div>

        {/* Progress */}
        <div className="progress-bar w-full mb-6">
          <div
            className="progress-fill"
            style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
          />
        </div>

        {finished ? (
          /* End screen */
          <div className="game-card p-8 text-center w-full">
            <div className="text-5xl mb-4">
              {known / total >= 0.9 ? "🏆" : known / total >= 0.7 ? "🔥" : known / total >= 0.5 ? "💪" : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              {known / total >= 0.9
                ? "Operator Master!"
                : known / total >= 0.7
                  ? "Solid Knowledge!"
                  : known / total >= 0.5
                    ? "Getting There!"
                    : "Keep Studying!"}
            </h2>
            <p className="text-[#666] mb-6">
              You knew {known} out of {total} cards ({Math.round((known / total) * 100)}%).{" "}
              {reviewing > 0 && `${reviewing} cards need review.`}
            </p>
            <button onClick={restart} className="btn-coral">
              Shuffle &amp; Restart
            </button>
          </div>
        ) : current ? (
          <>
            <p className="text-xs text-[#999] mb-2 text-center">
              Card {index + 1} of {total} &middot;{" "}
              <span className="font-medium text-[#E8705A]">{current.category}</span>
            </p>

            {/* Flashcard */}
            <div className="flashcard-container w-full" onClick={handleFlip}>
              <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
                <div className="flashcard-front">
                  <p className="text-lg font-semibold text-[#1A1A1A] leading-relaxed">
                    {current.front}
                  </p>
                </div>
                <div className="flashcard-back">
                  <p className="text-base leading-relaxed">{current.back}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            {flipped && (
              <div className="flex gap-3 mt-6 justify-center">
                <button
                  onClick={() => advance(true)}
                  className="btn-coral"
                >
                  Got it!
                </button>
                <button
                  onClick={() => advance(false)}
                  className="btn-outline"
                >
                  Review again
                </button>
              </div>
            )}

            {!flipped && (
              <p className="text-center text-[#999] text-xs mt-4">
                Tap the card to flip
              </p>
            )}
          </>
        ) : (
          <p className="text-[#666] text-center">No cards in this category.</p>
        )}
      </div>
    </main>
  );
}
