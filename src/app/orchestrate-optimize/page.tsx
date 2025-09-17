"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrchestrateOptimizePage() {
  const packageData = [
    {
      id: "810212024",
      description:
        "Barang berupa monitor LCD impor asal Tiongkok dengan muatan 1.200 unit. Dokumen invoice menyebutkan ukuran layar 24 inci, namun di manifest tercatat 27 inci. Perbedaan detail ini berpotensi menyebabkan delay clearance karena butuh verifikasi manual dari Bea Cukai.",
    },
    {
      id: "810212024",
      description:
        "Barang berupa monitor LCD impor asal Tiongkok dengan muatan 1.200 unit. Dokumen invoice menyebutkan ukuran layar 24 inci, namun di manifest tercatat 27 inci. Perbedaan detail ini berpotensi menyebabkan delay clearance karena butuh verifikasi manual dari Bea Cukai.",
    },
    {
      id: "810212024",
      description:
        "Barang berupa monitor LCD impor asal Tiongkok dengan muatan 1.200 unit. Dokumen invoice menyebutkan ukuran layar 24 inci, namun di manifest tercatat 27 inci. Perbedaan detail ini berpotensi menyebabkan delay clearance karena butuh verifikasi manual dari Bea Cukai.",
    },
  ];

  const declarationData = {
    hsCode: "8528.72.00",
    kategori: "LCD TV",
    risiko: "LOW",
    berat: "45Kg",
  };

  return (
    <div className="grid w-screen [align-items:start] justify-items-center bg-transparent">
      <div className="relative h-[1024px] w-[1440px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(50,182,233,1)_100%)]">
        {/* Tracking Package */}
        <div className="absolute top-[40px] left-[50px] w-[480px]">
          <h2 className="mb-6 text-2xl font-bold text-[#4A90E2]">Tracking Package</h2>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="flex items-center">
              <div className="relative flex-1">
                <svg
                  className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button className="ml-3 rounded-lg border border-gray-300 p-3 hover:bg-gray-50">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Package Cards */}
          <div className="space-y-4">
            {packageData.map((pkg, index) => (
              <Card
                key={index}
                className="rounded-lg border-2 border-[#32b6e9] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="p-4">
                  <div className="mb-3">
                    <div className="mb-1 text-sm font-semibold text-gray-700">PACKAGE ID:</div>
                    <div className="inline-block border-b-2 border-[#32b6e9] pb-1 text-lg font-bold text-black">
                      {pkg.id}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Document Checker */}
        <div className="absolute top-[40px] right-[50px] w-[680px]">
          <h2 className="mb-6 text-2xl font-bold text-[#4A90E2]">AI Document Checker</h2>
          <Card className="h-[400px] rounded-lg border-2 border-[#32b6e9] bg-white shadow-sm">
            <CardContent className="flex h-full flex-col items-center justify-center p-8">
              {/* Hidden native file input for opening File Explorer */}
              <input id="ai-doc-file" type="file" className="hidden" />
              <div className="mb-6">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-lg bg-[#4A90E2]">
                  <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#4A90E2]">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Drop or Choose File</h3>
                <p className="text-gray-500">Upload your documents for AI verification</p>
              </div>

              <label
                htmlFor="ai-doc-file"
                className="mt-6 cursor-pointer rounded-lg bg-[#4A90E2] px-6 py-2 text-white transition-colors hover:bg-[#4A90E2]/90"
              >
                Choose File
              </label>
            </CardContent>
          </Card>
        </div>

        {/* Smart Declaration Sorting */}
        <div className="absolute right-[50px] bottom-[50px] w-[680px]">
          <h2 className="mb-6 text-2xl font-bold text-[#4A90E2]">Smart Declaration Sorting</h2>
          <Card className="rounded-lg border-2 border-[#32b6e9] bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="mb-3 rounded-lg bg-[#4A90E2] px-4 py-3 text-white">
                    <div className="text-sm font-medium">HS CODE</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800">{declarationData.hsCode}</div>
                </div>
                <div className="text-center">
                  <div className="mb-3 rounded-lg bg-[#4A90E2] px-4 py-3 text-white">
                    <div className="text-sm font-medium">Kategori</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800">{declarationData.kategori}</div>
                </div>
                <div className="text-center">
                  <div className="mb-3 rounded-lg bg-[#4A90E2] px-4 py-3 text-white">
                    <div className="text-sm font-medium">Risiko</div>
                  </div>
                  <div className="text-lg font-bold text-green-600">{declarationData.risiko}</div>
                </div>
                <div className="text-center">
                  <div className="mb-3 rounded-lg bg-[#4A90E2] px-4 py-3 text-white">
                    <div className="text-sm font-medium">Berat</div>
                  </div>
                  <div className="text-lg font-bold text-gray-800">{declarationData.berat}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 left-8 flex gap-4">
          <Link
            href="/predict-track"
            className="rounded-lg bg-[#0475bc] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#0475bc]/90"
          >
            ← Back to Predict & Track
          </Link>
          <Link
            href="/resilience-response"
            className="rounded-lg bg-[#32b6e9] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#32b6e9]/90"
          >
            Next: Resilience & Response →
          </Link>
        </div>
      </div>
    </div>
  );
}