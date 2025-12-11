import  { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  question: string;
  options: string[];
  selected: number | null; // previously answered index or null
  onSelect: (index: number) => void;
};

export default function QuestionCard({ question, options, selected, onSelect }: Props) {
  const [local, setLocal] = useState<number | null>(selected ?? null);

  useEffect(() => {
    // update local when parent provides a pre-selected value (navigating back)
    setLocal(selected ?? null);
  }, [selected]);

  useEffect(() => {
    // whenever local changes notify parent (so parent keeps answers in sync)
    if (local === null) return;
    onSelect(local);
    // NOTE: We intentionally don't call onSelect when local becomes null to avoid clearing parent's stored answer
    // This ensures when user clicks an option, the parent knows immediately.
  }, [local]);

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
      <div className="bg-transparent space-y-6">
        <div className="option font-semibold text-center">{question}</div>

        <div className="mt-6 space-y-4">
          {options.map((opt, i) => {
            const isSelected = local === i;
            return (
              <motion.button
                key={i}
                onClick={() => setLocal(i)}
                whileTap={{ scale: 0.995 }}
                className={`option ${isSelected ? "option-selected" : ""}`}
                aria-pressed={isSelected}
                aria-label={`Option ${i + 1}: ${opt}`}
              >
                <div className="flex items-center justify-center">{opt}</div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
