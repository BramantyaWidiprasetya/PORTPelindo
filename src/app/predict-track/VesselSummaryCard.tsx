"use client";

import * as React from "react";

type Item = { label: string; value: string; color: string };

interface Props {
  items: Item[];
}

export function VesselSummaryCard({ items }: Props) {
  const [hoverIdx, setHoverIdx] = React.useState<number | null>(null);

  const topPositions = ["top-[77px]", "top-[147px]", "top-[217px]", "top-[287px]"];
  const valueTopPositions = ["top-28", "top-[187px]", "top-[255px]", "top-[330px]"];

  const detailByLabel: Record<string, string> = {
    "Utilization Rate":
      "Persentase pemanfaatan armada terhadap kapasitas tersedia. Nilai tinggi menunjukkan penggunaan aset efisien dan stabil. Pantau fluktuasi untuk mencegah bottleneck.",
    "Exploitation Costs":
      "Total biaya operasional seperti bahan bakar, awak, dan perawatan. Tren biaya membantu mengidentifikasi peluang penghematan. Bandingkan dengan produktivitas rute.",
    Distance:
      "Jarak pelayaran selama periode pengamatan. Indikator intensitas operasi dan utilisasi jadwal. Korelasikan dengan konsumsi bahan bakar dan cuaca.",
    "Fuel Consumption":
      "Estimasi konsumsi bahan bakar aktual. Dipengaruhi kecepatan, muatan, dan kondisi laut. Optimasi rute dan kecepatan dapat menurunkan angka ini.",
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoverIdx(index)}
          onMouseLeave={() => setHoverIdx((prev) => (prev === index ? null : prev))}
        >
          <div
            className={`absolute h-[35px] w-[254px] ${topPositions[index]} left-[13px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] text-black`}
          >
            {item.label}
          </div>
          <div
            className={`h-6 w-44 ${valueTopPositions[index]} left-[52px] font-bold ${item.color} absolute text-center [font-family:'Inter',Helvetica] text-3xl leading-[normal] tracking-[0] whitespace-nowrap`}
          >
            {item.value}
          </div>

          {hoverIdx === index && (
            <div
              className={`absolute left-[52px] mt-2 w-[260px] rounded-md border border-gray-200 bg-white p-3 text-xs leading-relaxed text-gray-700 shadow-md ${valueTopPositions[index]}`}
            >
              {detailByLabel[item.label] ?? "Detail informasi tidak tersedia untuk metrik ini."}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
