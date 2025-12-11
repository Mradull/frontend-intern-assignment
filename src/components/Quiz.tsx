import React, { useMemo, useState } from "react";
import QuestionCard from "./QuestionCard";
import Progress from "./Progress";
import Result from "./Result";

type QA = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: QA[] = [
  { id: 1, question: "1. What sound does a cat make?", options: ["Meow-Meow", "Bhau-Bhau", "Oink-Oink", "Chirp"], correctIndex: 0 },
  { id: 2, question: "2. What would you probably find in your fridge?", options: ["Ice Cream", "Shoes", "Books", "Phone"], correctIndex: 0 },
  { id: 3, question: "3. How many stars are in the sky?", options: ["Two", "Infinite", "One Hundred", "None"], correctIndex: 1 },
  { id: 4, question: "4. Which is a programming language?", options: ["Banana", "Python", "Chair", "Pillow"], correctIndex: 1 },
];

export default function Quiz() {
  const total = QUESTIONS.length;

  const [answers, setAnswers] = useState<(number | undefined)[]>(new Array<number | undefined>(total).fill(undefined));
  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const answeredCount = answers.filter((a) => typeof a === "number").length;

  const score = useMemo(
    () =>
      answers.reduce((acc, choice, i) => {
        if (typeof choice === "number" && choice === QUESTIONS[i].correctIndex) return acc + 1;
        return acc;
      }, 0),
    [answers]
  );

  function handleSelectForCurrent(selectedIndex: number) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = selectedIndex;
      return copy;
    });
  }

  function handleNext() {
    if (answers[index] === undefined) return; // prevent skipping
    if (index < total - 1) setIndex((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrev() {
    if (index > 0) setIndex((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit() {
    if (answers[index] === undefined) return; // ensure last is answered
    setShowResult(true);
  }

  function handleRestart() {
    setAnswers(new Array<number | undefined>(total).fill(undefined));
    setIndex(0);
    setShowResult(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (showResult) {
    return (
      <div className="frame">
        <div className="inner mx-auto">
          <Result score={score} total={total} onRestart={handleRestart} />
        </div>
      </div>
    );
  }

  const current = QUESTIONS[index];

  return (
    <div className="frame">
      <div className="inner mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h1 className="h1">Test Your Knowledge</h1>
          <div className="mt-4 pill text-black">Answer all questions to see your results</div>

          {/* Pass answeredCount (how many questions already answered) */}
          <Progress current={answeredCount} total={total} />
        </div>

        {/* Question area */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl">
            <QuestionCard
              key={current.id}
              question={current.question}
              options={current.options}
              selected={answers[index] ?? null}
              onSelect={handleSelectForCurrent}
            />
          </div>
        </div>

        {/* Bottom-right navigation */}
        {/* Bottom-right navigation */}
<div className="bottom-nav mt-10 max-w-3xl mx-auto">

  {/* Not the last question → show arrows */}
  {index < total - 1 && (
    <>
      {/* BACK arrow */}
      <button
        className={
          "arrow-btn " +
          (index === 0 ? "arrow-disabled" : "arrow-active")
        }
        onClick={() => index > 0 && handlePrev()}
      >
        <span className="arrow-icon">
          {/* LEFT ARROW SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5m6-7l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* NEXT arrow */}
      <button
        className={
          "arrow-btn " +
          (answers[index] === undefined ? "arrow-disabled" : "arrow-active")
        }
        onClick={() => handleNext()}
        disabled={answers[index] === undefined}
      >
        <span className="arrow-icon">
          {/* RIGHT ARROW SVG */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </>
  )}

  {/* LAST QUESTION → submit only */}
  {index === total - 1 && (
    <button
      className={
        "submit-btn " +
        (answers[index] === undefined ? "opacity-60 cursor-not-allowed" : "")
      }
      disabled={answers[index] === undefined}
      onClick={handleSubmit}
    >
      Submit
    </button>
  )}
</div>


      </div>
    </div>
  );
}
