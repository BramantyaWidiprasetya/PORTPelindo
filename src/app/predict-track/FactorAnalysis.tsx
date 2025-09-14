"use client";

import * as React from "react";

type FactorItem = {
  title: string;
  value: string; // e.g., "8%"
  color: string; // tailwind bg color class
  top: string; // e.g., "top-[52px]"
  left: string; // e.g., "left-[23px]"
};

interface FactorAnalysisProps {
  items: FactorItem[];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function FactorAnalysis({ items }: FactorAnalysisProps) {
  const bases = React.useMemo(
    () => items.map((it) => parseInt(it.value.replace(/[^0-9]/g, ""), 10)),
    [items]
  );

  const limits = React.useMemo(
    () => bases.map((b) => ({ min: Math.max(0, b - 2), max: Math.min(100, b + 2) })),
    [bases]
  );

  const [values, setValues] = React.useState<number[]>(bases);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) =>
        prev.map((v, idx) => {
          const delta = [-1, 0, 1][Math.floor(Math.random() * 3)];
          const next = clamp(v + delta, limits[idx].min, limits[idx].max);
          return next;
        })
      );
    }, 1000); // update setiap 1 detik

    return () => clearInterval(interval);
  }, [limits]);

  return (
    <>
      {items.map((factor, index) => (
        <div key={index} className={`absolute ${factor.top} ${factor.left}`}>
          <div className="h-[90px] w-[104px] rounded-[5px] bg-[#d9d9d9]" />
          <div className={`absolute top-0 left-0 h-2.5 w-[104px] ${factor.color} rounded-[5px]`} />
          <div className="absolute top-[13px] left-1 h-6 w-[94px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-black">
            {factor.title}
          </div>
          <div className="absolute top-[54px] left-2 h-6 w-[85px] text-right [font-family:'Inter',Helvetica] text-3xl leading-[normal] font-bold tracking-[0] whitespace-nowrap text-black">
            {values[index]}%
          </div>
        </div>
      ))}
    </>
  );
}
