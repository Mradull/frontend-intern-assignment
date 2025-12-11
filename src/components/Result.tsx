import  { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = { score: number; total: number; onRestart: () => void };

export default function Result({ score, total, onRestart }: Props) {
  const percent = Math.round((score / total) * 100);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let rafId: number;
    let start: number | null = null;
    const duration = 1200;
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);
      setDisplay(Math.round(t * percent));
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      }
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [percent]);

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="pill">Keep Learning!</div>
      <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="h1 mt-6" style={{ fontSize: 44 }}>
        Your Final score is
      </motion.h2>

      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="mt-6">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 96, color: "#0e5670", fontWeight: 700 }}>
          {display} <span style={{ fontSize: 36, verticalAlign: "top" }}>%</span>
        </div>
      </motion.div>

      <button onClick={onRestart} className="mt-8 px-6 py-3 rounded-md bg-[#daf2fb]">
        Start Again
      </button>
    </div>
  );
}
