

type Props = { current: number; total: number };

export default function Progress({ current, total }: Props) {
  return (
    <div className="flex items-center justify-center gap-6 mt-4" aria-hidden>
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < current;
        return (
          <div
            key={i}
            className={`h-1 rounded transition-all duration-300 ${filled ? "bg-[#0f4b56]" : "bg-[#e6eef0]"}`}
            style={{ width: 120 }}
          />
        );
      })}
    </div>
  );
}
