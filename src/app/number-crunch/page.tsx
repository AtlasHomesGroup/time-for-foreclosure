"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import BackLink from "@/components/BackLink";
import { numberCrunchScenarios } from "@/data/gameData";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const diffBadge: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-red-100 text-red-700",
};

export default function NumberCrunchPage() {
  const [scenarios] = useState(() => shuffle(numberCrunchScenarios));
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const total = scenarios.length;
  const current = scenarios[index];
  const completed = index + (submitted ? 1 : 0);

  useEffect(() => {
    if (!submitted && inputRef.current) inputRef.current.focus();
  }, [index, submitted]);

  const checkAnswer = useCallback(() => {
    if (!answer.trim()) return;
    const num = parseFloat(answer);
    if (isNaN(num)) return;
    const tol = Math.max(Math.abs(current.correctAnswer) * 0.05, 1);
    const isCorrect = Math.abs(num - current.correctAnswer) <= tol;
    if (isCorrect) {
      setCorrect((c) => c + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
    setSubmitted(true);
  }, [answer, current]);

  const next = useCallback(() => {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setAnswer("");
      setSubmitted(false);
    }
  }, [index, total]);

  const restart = useCallback(() => {
    setIndex(0);
    setAnswer("");
    setSubmitted(false);
    setCorrect(0);
    setStreak(0);
    setFinished(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        if (!submitted) checkAnswer();
        else next();
      }
    },
    [submitted, checkAnswer, next]
  );

  const isCorrect =
    submitted &&
    Math.abs(parseFloat(answer) - current.correctAnswer) <=
      Math.max(Math.abs(current.correctAnswer) * 0.05, 1);

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <BackLink />

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
          Number Crunch
        </h1>
        <p className="text-[#666] text-sm mb-6">
          Solve problems using the playbook&apos;s formulas and benchmarks.
        </p>

        {/* Score */}
        <div className="flex gap-3 mb-4 flex-wrap">
          <span className="score-badge">
            Score: {correct}/{completed}
          </span>
          {streak >= 2 && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
              🔥 Streak: {streak}
            </span>
          )}
        </div>

        {/* Progress */}
        <div className="progress-bar w-full mb-6">
          <div
            className="progress-fill"
            style={{ width: `${(completed / total) * 100}%` }}
          />
        </div>

        {finished ? (
          <div className="game-card p-8 text-center w-full">
            <div className="text-5xl mb-4">
              {correct / total >= 0.9
                ? "🏆"
                : correct / total >= 0.7
                  ? "🔥"
                  : correct / total >= 0.5
                    ? "💪"
                    : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              {correct / total >= 0.9
                ? "Number Master!"
                : correct / total >= 0.7
                  ? "Solid Math!"
                  : correct / total >= 0.5
                    ? "Getting There!"
                    : "Keep Practicing!"}
            </h2>
            <p className="text-[#666] mb-6">
              You got {correct} out of {total} correct (
              {Math.round((correct / total) * 100)}%).
            </p>
            <button onClick={restart} className="btn-coral">
              Play Again
            </button>
          </div>
        ) : (
          <div className="game-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#999]">
                Problem {index + 1} of {total}
              </span>
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${diffBadge[current.difficulty]}`}
              >
                {current.difficulty}
              </span>
            </div>

            <p className="text-[#1A1A1A] font-semibold text-base mb-5 leading-relaxed">
              {current.question}
            </p>

            {/* Inputs display */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {Object.entries(current.inputs).map(([key, val]) => (
                <div
                  key={key}
                  className="bg-[#fdf0ec] rounded-lg px-3 py-2 text-sm"
                >
                  <span className="text-[#999]">{key}:</span>{" "}
                  <span className="font-mono font-bold text-[#1A1A1A]">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Answer input */}
            <div className="flex items-center gap-2 mb-4">
              <input
                ref={inputRef}
                type="number"
                step="any"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={submitted}
                placeholder="Your answer"
                className="flex-1 px-4 py-2.5 border-2 border-[#f0d8d0] rounded-xl text-[#1A1A1A] font-mono text-lg focus:outline-none focus:border-[#E8705A] disabled:bg-gray-50 transition-colors"
              />
              <span className="text-sm text-[#999] min-w-fit">
                {current.unit}
              </span>
            </div>

            {!submitted ? (
              <button
                onClick={checkAnswer}
                disabled={!answer.trim()}
                className="btn-coral w-full"
              >
                Submit
              </button>
            ) : (
              <>
                <div
                  className={`rounded-xl p-4 mb-4 border-2 ${
                    isCorrect
                      ? "border-green-300 bg-green-50"
                      : "border-red-300 bg-red-50"
                  }`}
                >
                  <p className="font-bold text-sm mb-1">
                    {isCorrect ? "✓ Correct!" : `✗ Incorrect — answer: ${current.correctAnswer} ${current.unit}`}
                  </p>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {current.explanation}
                  </p>
                </div>
                <button onClick={next} className="btn-coral w-full">
                  {index + 1 >= total ? "See Results" : "Next Problem →"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
