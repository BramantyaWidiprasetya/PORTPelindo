"use client";

import * as React from "react";

type FactorItem = {
  title: string;
  topValue: string; // e.g., "45%"
  bottomValue: string; // e.g., "4%"
  topColor: string; // tailwind class
  bottomColor: string; // tailwind class
  topLeft: string; // e.g., "left-[136px]"
  bottomLeft: string; // e.g., "left-[136px]"
};

interface Props {
  items: FactorItem[];
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function FactorAnalysisLive({ items }: Props) {
  const topBases = React.useMemo(
    () => items.map((it) => parseInt(it.topValue.replace(/[^0-9]/g, ""), 10)),
    [items]
  );
  const bottomBases = React.useMemo(
    () => items.map((it) => parseInt(it.bottomValue.replace(/[^0-9]/g, ""), 10)),
    [items]
  );

  // For each item, choose a random band width in [3,5]
  const bands = React.useMemo(() => items.map(() => 3 + Math.floor(Math.random() * 3)), [items]);

  const topLimits = React.useMemo(
    () =>
      topBases.map((b, i) => ({
        min: Math.max(0, b - bands[i]),
        max: Math.min(100, b + bands[i]),
      })),
    [topBases, bands]
  );
  const bottomLimits = React.useMemo(
    () =>
      bottomBases.map((b, i) => ({
        min: Math.max(0, b - bands[i]),
        max: Math.min(100, b + bands[i]),
      })),
    [bottomBases, bands]
  );

  const [topVals, setTopVals] = React.useState<number[]>(topBases);
  const [bottomVals, setBottomVals] = React.useState<number[]>(bottomBases);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTopVals((prev) =>
        prev.map((v, i) =>
          clamp(v + [-1, 1][Math.floor(Math.random() * 2)], topLimits[i].min, topLimits[i].max)
        )
      );
      setBottomVals((prev) =>
        prev.map((v, i) =>
          clamp(
            v + [-1, 1][Math.floor(Math.random() * 2)],
            bottomLimits[i].min,
            bottomLimits[i].max
          )
        )
      );
    }, 500);
    return () => clearInterval(interval);
  }, [topLimits, bottomLimits]);

  return (
    <>
      {items.map((factor, index) => (
        <div key={index}>
          <div
            className={`absolute top-[52px] ${factor.topLeft} h-[90px] w-[104px] rounded-[5px] bg-[#d9d9d9]`}
          />
          <div
            className={`absolute top-[52px] ${factor.topLeft} h-2.5 w-[104px] rounded-[5px] ${factor.topColor}`}
          />
          <div
            className={`absolute top-[150px] ${factor.bottomLeft} h-[90px] w-[104px] rounded-[5px] bg-[#d9d9d9]`}
          />
          <div
            className={`absolute top-[150px] ${factor.bottomLeft} h-2.5 w-[104px] rounded-[5px] ${factor.bottomColor}`}
          />

          <div
            className={`absolute top-[65px] ${factor.topLeft === "left-[23px]" ? "left-7" : factor.topLeft === "left-[136px]" ? "left-[141px]" : factor.topLeft === "left-[250px]" ? "left-[255px]" : "left-[368px]"} h-6 w-[94px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-black`}
          >
            {factor.title}
          </div>

          <div
            className={`absolute ${factor.topLeft === "left-[23px]" ? "left-8" : factor.topLeft === "left-[136px]" ? "left-[145px]" : factor.topLeft === "left-[250px]" ? "left-[259px]" : "left-[372px]"} top-[106px] h-6 w-[85px] text-right [font-family:'Inter',Helvetica] text-3xl leading-[normal] font-bold tracking-[0] text-black`}
          >
            {topVals[index]}%
          </div>

          <div
            className={`absolute ${factor.bottomLeft === "left-[23px]" ? "left-[33px]" : factor.bottomLeft === "left-[136px]" ? "left-[146px]" : factor.bottomLeft === "left-[250px]" ? "left-[260px]" : "left-[373px]"} top-[204px] h-6 w-[85px] text-right [font-family:'Inter',Helvetica] text-3xl leading-[normal] font-bold tracking-[0] text-black`}
          >
            {bottomVals[index]}%
          </div>
        </div>
      ))}
    </>
  );
}
