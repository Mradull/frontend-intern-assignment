import { useMemo, useState } from "react";
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

  // answers holds number OR null (NOT undefined)
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(total).fill(null)
  );

  const [index, setIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const answeredCount = answers.filter((a) => a !== null).length;

  // FIXED REDUCE ERROR — specify accumulator type AND never return undefined
  const score = useMemo(() => {
    return answers.reduce((acc: number, choice, i) => {
      if (choice !== null && choice === QUESTIONS[i].correctIndex) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [answers]);

  // FIX: selectedIndex always number — safe
  function handleSelectForCurrent(selectedIndex: number) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[index] = selectedIndex;
      return copy;
    });
  }

  function handleNext() {
    if (answers[index] === null) return;
    if (index < total - 1) setIndex(index + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrev() {
    if (index > 0) setIndex(index - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit() {
    if (answers[index] === null) return;
    setShowResult(true);
  }

  function handleRestart() {
    setAnswers(Array(total).fill(null));
    setIndex(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div className="main-content">
        <Result score={score} total={total} onRestart={handleRestart} />
      </div>
    );
  }

  const current = QUESTIONS[index];

  return (
    <div className="main-content">
      {/* Header */}
      <div className="flex flex-col items-center">
        <h1 className="h1">Test Your Knowledge</h1>
        <div className="mt-4 pill text-black">
          Answer all questions to see your results
        </div>

        <Progress current={answeredCount} total={total} />
      </div>

      {/* Question */}
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl">
          <QuestionCard
            key={current.id}
            question={current.question}
            options={current.options}
            selected={answers[index]} // ALWAYS number | null (TS safe)
            onSelect={handleSelectForCurrent}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="bottom-nav mt-10 max-w-3xl mx-auto">

        {index < total - 1 && (
          <>
            {/* Previous */}
            <button
              className={
                "arrow-btn " + (index === 0 ? "arrow-disabled" : "arrow-active")
              }
              onClick={handlePrev}
              disabled={index === 0}
            >
              <span className="arrow-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5m6-7l-7 7 7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {/* Next */}
            <button
              className={
                "arrow-btn " +
                (answers[index] === null ? "arrow-disabled" : "arrow-active")
              }
              onClick={handleNext}
              disabled={answers[index] === null}
            >
              <span className="arrow-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
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

        {/* SUBMIT */}
        {index === total - 1 && (
          <button
            className={
              "submit-btn " +
              (answers[index] === null ? "opacity-60 cursor-not-allowed" : "")
            }
            disabled={answers[index] === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
