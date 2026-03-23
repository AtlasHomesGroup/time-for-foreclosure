"use client";

import { useState, useCallback } from "react";
import BackLink from "@/components/BackLink";
import { quizQuestions } from "@/data/gameData";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const letters = ["A", "B", "C", "D"];

export default function QuizPage() {
  const [questions] = useState(() => shuffle(quizQuestions));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const current = questions[index];
  const correct = results.filter(Boolean).length;

  const handleSelect = useCallback(
    (optIndex: number) => {
      if (answered) return;
      setSelected(optIndex);
      setAnswered(true);
      setResults((r) => [...r, optIndex === current.correctIndex]);
    },
    [answered, current]
  );

  const next = useCallback(() => {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [index, total]);

  const restart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setResults([]);
    setFinished(false);
  }, []);

  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <BackLink />

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
          Operator Quiz
        </h1>
        <p className="text-[#666] text-sm mb-6">
          30 questions across all chapters. Test your deep understanding.
        </p>

        {/* Score */}
        <div className="flex gap-3 mb-4">
          <span className="score-badge">
            Score: {correct}/{results.length}
          </span>
        </div>

        {/* Progress */}
        <div className="progress-bar w-full mb-6">
          <div
            className="progress-fill"
            style={{ width: `${(results.length / total) * 100}%` }}
          />
        </div>

        {finished ? (
          <div className="game-card p-8 text-center w-full">
            <div className="text-5xl mb-4">
              {pct >= 90 ? "🏆" : pct >= 70 ? "🔥" : pct >= 50 ? "💪" : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              {pct >= 90
                ? "Operator Master!"
                : pct >= 70
                  ? "Solid Operator!"
                  : pct >= 50
                    ? "Getting There!"
                    : "Keep Studying!"}
            </h2>
            <p className="text-[#666] mb-6">
              You scored {correct} out of {total} ({pct}%).
            </p>

            {/* Result grid */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-6">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold text-white ${
                    r ? "bg-[#4ade80]" : "bg-[#f87171]"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <button onClick={restart} className="btn-coral">
              Play Again
            </button>
          </div>
        ) : (
          <div className="game-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#999]">
                Question {index + 1} of {total}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#fdf0ec] text-[#E8705A]">
                {current.chapter}
              </span>
            </div>

            <p className="text-[#1A1A1A] font-semibold text-base mb-5 leading-relaxed">
              {current.question}
            </p>

            <div className="space-y-3 mb-4">
              {current.options.map((opt, i) => {
                let classes = "quiz-option flex items-start gap-3";
                if (answered) {
                  classes += " disabled";
                  if (i === current.correctIndex) classes += " correct";
                  else if (i === selected) classes += " incorrect";
                } else if (i === selected) {
                  classes += " selected";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={answered}
                    className={classes}
                  >
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                        answered && i === current.correctIndex
                          ? "border-green-400 bg-green-100 text-green-700"
                          : answered && i === selected
                            ? "border-red-400 bg-red-100 text-red-700"
                            : "border-[#f0d8d0] text-[#999]"
                      }`}
                    >
                      {letters[i]}
                    </span>
                    <span className="pt-0.5">{opt}</span>
                  </button>
                );
              })}
            </div>

            {answered && (
              <>
                <div className="bg-[#fdf0ec] rounded-xl p-4 mb-4">
                  <p className="text-sm text-[#666] leading-relaxed">
                    {current.explanation}
                  </p>
                </div>
                <button onClick={next} className="btn-coral w-full">
                  {index + 1 >= total ? "See Results" : "Next Question →"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
