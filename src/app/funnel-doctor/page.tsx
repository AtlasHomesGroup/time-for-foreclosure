"use client";

import { useState, useCallback } from "react";
import BackLink from "@/components/BackLink";
import { diagnosisScenarios, baselines } from "@/data/gameData";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FunnelDoctorPage() {
  const [scenarios] = useState(() => shuffle(diagnosisScenarios));
  const [index, setIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [diagnosed, setDiagnosed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = scenarios.length;
  const current = scenarios[index];
  const completed = index + (diagnosed ? 1 : 0);

  const handleDiagnose = useCallback(() => {
    if (!selectedKey) return;
    if (selectedKey === current.bottleneckKey) {
      setCorrect((c) => c + 1);
    }
    setDiagnosed(true);
  }, [selectedKey, current]);

  const next = useCallback(() => {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelectedKey(null);
      setDiagnosed(false);
    }
  }, [index, total]);

  const restart = useCallback(() => {
    setIndex(0);
    setSelectedKey(null);
    setDiagnosed(false);
    setCorrect(0);
    setFinished(false);
  }, []);

  const isCorrect = diagnosed && selectedKey === current.bottleneckKey;

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <BackLink />

        <h1 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
          Funnel Doctor
        </h1>
        <p className="text-[#666] text-sm mb-6">
          Analyze operator funnels and diagnose the bottleneck. Click the problem rate, then hit Diagnose.
        </p>

        {/* Score */}
        <div className="flex gap-3 mb-4">
          <span className="score-badge">
            Score: {correct}/{completed}
          </span>
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
                  ? "🩺"
                  : correct / total >= 0.5
                    ? "💪"
                    : "📚"}
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              {correct / total >= 0.9
                ? "Expert Diagnostician!"
                : correct / total >= 0.7
                  ? "Solid Diagnosis!"
                  : correct / total >= 0.5
                    ? "Getting There!"
                    : "Study the Funnel!"}
            </h2>
            <p className="text-[#666] mb-6">
              You correctly diagnosed {correct} out of {total} funnels (
              {Math.round((correct / total) * 100)}%).
            </p>
            <button onClick={restart} className="btn-coral">
              Play Again
            </button>
          </div>
        ) : (
          <div className="game-card p-6 sm:p-8">
            <span className="text-xs text-[#999]">
              Scenario {index + 1} of {total}
            </span>

            {/* Story */}
            <p className="text-[#1A1A1A] font-medium text-base mt-3 mb-5 leading-relaxed">
              {current.story}
            </p>

            {/* Raw data */}
            <h3 className="text-xs font-bold text-[#999] uppercase tracking-wider mb-2">
              Raw Numbers
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
              {Object.entries(current.data).map(([key, val]) => (
                <div
                  key={key}
                  className="bg-[#fdf0ec] rounded-lg px-3 py-2 text-sm"
                >
                  <span className="text-[#999] text-xs block">{key}</span>
                  <span className="font-mono font-bold text-[#1A1A1A]">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            {/* Rates vs benchmarks */}
            <h3 className="text-xs font-bold text-[#999] uppercase tracking-wider mb-2">
              Rates vs Benchmarks — Select the bottleneck
            </h3>
            <div className="space-y-2 mb-5">
              {Object.entries(current.rates).map(([key, val]) => {
                const baseline = baselines[key];
                const gap = baseline !== undefined ? val - baseline : null;
                const isSelected = selectedKey === key;
                const isBottleneck = key === current.bottleneckKey;

                let borderClass = "border-transparent";
                if (diagnosed && isBottleneck) borderClass = "border-green-400";
                else if (diagnosed && isSelected && !isBottleneck)
                  borderClass = "border-red-400";
                else if (isSelected) borderClass = "border-[#E8705A]";

                return (
                  <button
                    key={key}
                    onClick={() => !diagnosed && setSelectedKey(key)}
                    disabled={diagnosed}
                    className={`funnel-stage w-full flex items-center justify-between border-2 ${borderClass} ${
                      !diagnosed && isSelected ? "bg-[#fdf0ec]" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-[#1A1A1A]">
                      {key}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-[#1A1A1A]">
                        {val}%
                      </span>
                      {gap !== null && (
                        <span
                          className={`text-xs font-bold ${
                            gap >= 0 ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {gap >= 0 ? "+" : ""}
                          {gap}%
                        </span>
                      )}
                      {baseline !== undefined && (
                        <span className="text-xs text-[#999]">
                          (bench: {baseline}%)
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {!diagnosed ? (
              <button
                onClick={handleDiagnose}
                disabled={!selectedKey}
                className="btn-coral w-full"
              >
                Diagnose
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
                  <p className="font-bold text-sm mb-2">
                    {isCorrect ? "✓ Correct Diagnosis!" : "✗ Incorrect Diagnosis"}
                  </p>
                  <p className="text-sm text-[#1A1A1A] font-medium mb-2">
                    {current.bottleneck}
                  </p>
                  <div className="bg-white/60 rounded-lg p-3 mt-2">
                    <p className="text-xs font-bold text-[#E8705A] mb-1">
                      Prescription:
                    </p>
                    <p className="text-sm text-[#666] leading-relaxed">
                      {current.fix}
                    </p>
                  </div>
                </div>
                <button onClick={next} className="btn-coral w-full">
                  {index + 1 >= total ? "See Results" : "Next Scenario →"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
