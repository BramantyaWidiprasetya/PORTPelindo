export const metadata = {
  title: "Predict & Track",
};

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { VesselSummaryCard } from "./VesselSummaryCard";
import FactorAnalysisLive from "./FactorAnalysisLive";

export default function PredictTrackPage() {
  const navigationTabs = [
    { title: "Predict & Track", className: "w-[205px]" },
    { title: "Orchestrate & Optimize", className: "w-[315px]" },
    { title: "Resilience & Response", className: "w-[304px]" },
  ];

  const chartDataPoints = [
    { x: "left-[78px]", y: "top-[75px]" },
    { x: "left-[106px]", y: "top-[88px]" },
    { x: "left-[137px]", y: "top-[130px]" },
    { x: "left-[275px]", y: "top-[193px]" },
    { x: "left-[385px]", y: "top-[161px]" },
  ];

  const yAxisLabels = [
    { value: "100%", top: "top-[53px]" },
    { value: "90%", top: "top-[74px]" },
    { value: "80%", top: "top-[95px]" },
    { value: "70%", top: "top-[116px]" },
    { value: "60%", top: "top-[138px]" },
    { value: "50%", top: "top-[159px]" },
    { value: "40%", top: "top-[180px]" },
    { value: "30%", top: "top-[201px]" },
    { value: "20%", top: "top-[222px]" },
  ];

  const xAxisLabels = [
    { value: "0%", left: "left-[95px]" },
    { value: "10%", left: "left-[159px]" },
    { value: "20%", left: "left-[223px]" },
    { value: "30%", left: "left-[286px]" },
    { value: "40%", left: "left-[350px]" },
    { value: "50%", left: "left-[414px]" },
  ];

  const factorAnalysisData = [
    {
      title: "Cuaca & Kondisi Laut",
      value: "8%",
      color: "bg-[#1ca52c]",
      top: "top-[52px]",
      left: "left-[23px]",
    },
    {
      title: "Berat & Muatan Kapal",
      value: "45%",
      color: "bg-[#d6900f]",
      top: "top-[52px]",
      left: "left-[136px]",
    },
    {
      title: "Kepadatan Pelabuhan",
      value: "76%",
      color: "bg-[#d02323]",
      top: "top-[52px]",
      left: "left-[250px]",
    },
    { title: "Fuel", value: "67%", color: "bg-[#d02323]", top: "top-[52px]", left: "left-[363px]" },
    {
      title: "Kecepatan",
      value: "5%",
      color: "bg-[#1ca52c]",
      top: "top-[150px]",
      left: "left-[23px]",
    },
    {
      title: "Gelombang laut",
      value: "4%",
      color: "bg-[#1ca52c]",
      top: "top-[150px]",
      left: "left-[136px]",
    },
    {
      title: "Historis",
      value: "9%",
      color: "bg-[#1ca52c]",
      top: "top-[150px]",
      left: "left-[250px]",
    },
    {
      title: "Maintenance",
      value: "49%",
      color: "bg-[#d6900f]",
      top: "top-[150px]",
      left: "left-[363px]",
    },
  ];

  const speedDistributionYLabels = [
    { value: "100%", top: "top-[53px]" },
    { value: "90%", top: "top-[74px]" },
    { value: "80%", top: "top-[95px]" },
    { value: "70%", top: "top-[116px]" },
    { value: "60%", top: "top-[138px]" },
    { value: "50%", top: "top-[159px]" },
    { value: "40%", top: "top-[180px]" },
    { value: "30%", top: "top-[201px]" },
    { value: "20%", top: "top-[222px]" },
  ];

  const speedDistributionXLabels = [
    { value: "2", left: "left-[68px]" },
    { value: "4", left: "left-[110px]" },
    { value: "6", left: "left-[151px]" },
    { value: "8", left: "left-[193px]" },
    { value: "10", left: "left-[234px]" },
    { value: "12", left: "left-[276px]" },
    { value: "14", left: "left-[317px]" },
    { value: "16", left: "left-[359px]" },
    { value: "18", left: "left-[400px]" },
  ];

  const speedBars = [
    { height: "h-[88px]", top: "top-[145px]", left: "left-[75px]" },
    { height: "h-[148px]", top: "top-[85px]", left: "left-[117px]" },
    { height: "h-[125px]", top: "top-[108px]", left: "left-[159px]" },
    { height: "h-[57px]", top: "top-44", left: "left-[201px]" },
    { height: "h-10", top: "top-[193px]", left: "left-[243px]" },
    { height: "h-6", top: "top-[209px]", left: "left-[285px]" },
    { height: "h-[39px]", top: "top-[193px]", left: "left-[327px]" },
    { height: "h-[82px]", top: "top-[150px]", left: "left-[369px]" },
    { height: "h-[82px]", top: "top-[150px]", left: "left-[411px]" },
  ];

  const shipmentStats = [
    { label: "Completed", value: "250", color: "bg-[#005489]" },
    { label: "Early", value: "360", color: "bg-[#039114]" },
    { label: "On Time", value: "578", color: "bg-[#d6900f]" },
    { label: "Delay", value: "136", color: "bg-[#d02323]" },
  ];

  const vesselSummaryData = [
    { label: "Utilization Rate", value: "98.1%", color: "text-[#1ca52c]" },
    { label: "Exploitation Costs", value: "Rp 409.8M", color: "text-black" },
    { label: "Distance", value: "678 nm", color: "text-black" },
    { label: "Fuel Consumption", value: "17.8 T", color: "text-black" },
  ];

  const shipmentTrackingData = [
    {
      container: "FCL192732",
      bol: "001822937",
      origin: "ILHFA",
      destination: "USLAX",
      path: "Direct",
      carrierETA: "08 May 25",
      carrierTime: "6:06 PM",
      aiPrediction: "08 May 25",
      aiTime: "6:06 PM",
      status: "Arrive at POD",
      statusColor: "bg-[#1ca52c]",
    },
    {
      container: "FCL192732",
      bol: "001822937",
      origin: "ILHFA",
      destination: "USLAX",
      path: "Direct",
      carrierETA: "08 May 25",
      carrierTime: "6:06 PM",
      aiPrediction: "08 May 25",
      aiTime: "6:06 PM",
      status: "Transshipment delay",
      statusColor: "bg-[#d6900f]",
    },
    {
      container: "FCL192732",
      bol: "001822937",
      origin: "ILHFA",
      destination: "USLAX",
      path: "Direct",
      carrierETA: "08 May 25",
      carrierTime: "6:06 PM",
      aiPrediction: "08 May 25",
      aiTime: "6:06 PM",
      status: "Late departure",
      statusColor: "bg-[#d02323]",
    },
    {
      container: "FCL192732",
      bol: "001822937",
      origin: "ILHFA",
      destination: "USLAX",
      path: "Direct",
      carrierETA: "08 May 25",
      carrierTime: "6:06 PM",
      aiPrediction: "08 May 25",
      aiTime: "6:06 PM",
      status: "Roll over at POL",
      statusColor: "bg-[#d6900f]",
    },
    {
      container: "FCL192732",
      bol: "001822937",
      origin: "ILHFA",
      destination: "USLAX",
      path: "Direct",
      carrierETA: "08 May 25",
      carrierTime: "6:06 PM",
      aiPrediction: "08 May 25",
      aiTime: "6:06 PM",
      status: "Arrived at POD",
      statusColor: "bg-[#1ca52c]",
    },
  ];

  return (
    <div className="grid w-screen [align-items:start] justify-items-center bg-transparent">
      <div className="relative h-[1024px] w-[1440px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(50,182,233,1)_100%)]">
        <Card className="absolute top-[40px] left-[9px] h-[263px] w-[482px]">
          <CardHeader className="p-0">
            <CardTitle className="absolute top-0 left-[19px] h-[46px] w-[409px] [font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Navigating vs Operational Time
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-0">
            <div className="absolute top-[63px] left-[83px] h-[172px] w-px bg-[#dcdcdc]" />
            <div className="absolute top-[63px] left-[132px] h-[172px] w-px bg-[#dcdcdc]" />
            <div className="absolute top-[100px] left-[60px] h-px w-[398px] bg-[#dcdcdc]" />

            {chartDataPoints.map((point, index) => (
              <div
                key={index}
                className={`absolute h-[9px] w-[9px] ${point.y} ${point.x} rotate-[-44.53deg] bg-[linear-gradient(0deg,rgba(0,84,137,1)_0%,rgba(0,84,137,1)_100%),linear-gradient(0deg,rgba(0,84,137,1)_0%,rgba(0,84,137,1)_100%)]`}
              />
            ))}

            {yAxisLabels.map((label, index) => (
              <div
                key={index}
                className={`h-3 w-[41px] ${label.top} absolute left-[11px] text-right [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]`}
              >
                {label.value}
              </div>
            ))}

            {xAxisLabels.map((label, index) => (
              <div
                key={index}
                className={`top-[236px] h-[15px] w-[33px] ${label.left} absolute text-center [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-[#bcbbbb]`}
              >
                {label.value}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="absolute top-[311px] left-[9px] h-[261px] w-[482px]">
          <CardHeader className="p-0">
            <CardTitle className="absolute top-0 left-[19px] h-[46px] w-[260px] [font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Factor Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-0">
            <FactorAnalysisLive
              items={[
                {
                  title: "Cuaca & Kondisi Laut",
                  topValue: "8%",
                  bottomValue: "5%",
                  topColor: "bg-[#1ca52c]",
                  bottomColor: "bg-[#1ca52c]",
                  topLeft: "left-[23px]",
                  bottomLeft: "left-[23px]",
                },
                {
                  title: "Berat & Muatan Kapal",
                  topValue: "45%",
                  bottomValue: "4%",
                  topColor: "bg-[#d6900f]",
                  bottomColor: "bg-[#1ca52c]",
                  topLeft: "left-[136px]",
                  bottomLeft: "left-[136px]",
                },
                {
                  title: "Kepadatan Pelabuhan",
                  topValue: "76%",
                  bottomValue: "9%",
                  topColor: "bg-[#d02323]",
                  bottomColor: "bg-[#1ca52c]",
                  topLeft: "left-[250px]",
                  bottomLeft: "left-[250px]",
                },
                {
                  title: "Fuel",
                  topValue: "67%",
                  bottomValue: "49%",
                  topColor: "bg-[#d02323]",
                  bottomColor: "bg-[#d6900f]",
                  topLeft: "left-[363px]",
                  bottomLeft: "left-[363px]",
                },
              ]}
            />
            {[
              { title: "Kecepatan", left: "left-7" },
              { title: "Gelombang laut", left: "left-[141px]" },
              { title: "Historis", left: "left-[255px]" },
              { title: "Maintenance", left: "left-[368px]" },
            ].map((factor, index) => (
              <div
                key={index}
                className={`absolute top-[163px] ${factor.left} h-6 w-[94px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-black`}
              >
                {factor.title}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="absolute top-[580px] left-[9px] h-[263px] w-[482px]">
          <CardHeader className="p-0">
            <CardTitle className="absolute top-0 left-[19px] h-[46px] w-[260px] [font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Speed Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-0">
            <div className="absolute top-[232px] left-[60px] h-px w-[398px] bg-[#dcdcdc]" />

            {speedDistributionYLabels.map((label, index) => (
              <div
                key={index}
                className={`h-3 w-[41px] ${label.top} absolute left-[11px] text-right [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]`}
              >
                {label.value}
              </div>
            ))}

            {speedDistributionXLabels.map((label, index) => (
              <div
                key={index}
                className={`absolute top-[239px] h-3 w-[41px] ${label.left} text-center [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]`}
              >
                {label.value}
              </div>
            ))}

            {speedBars.map((bar, index) => (
              <div
                key={index}
                className={`absolute w-[27px] ${bar.height} ${bar.top} ${bar.left} bg-[#005489]`}
              />
            ))}
          </CardContent>
        </Card>

        <Card className="absolute top-[40px] left-[497px] h-[394px] w-[940px]">
          <CardContent className="relative p-0">
            <div className="absolute top-px right-0 left-0 h-[393px] overflow-hidden rounded-[10px] border border-solid border-[#32b6e9]">
              <Image
                src="/shipment-map.png"
                alt="Shipment map"
                fill
                sizes="940px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-white/10" />
            </div>
            <div className="absolute top-2 left-3 z-10 rounded-md bg-white/90 px-3 py-1.5 shadow">
              <CardTitle className="[font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
                Shipment Tracking
              </CardTitle>
            </div>
            <div className="absolute top-12 right-8 left-8 z-10">
              <div className="grid grid-cols-4 gap-4">
                {shipmentStats.map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white/80 p-4 shadow-md backdrop-blur-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 ${stat.color} rounded`} />
                      <div>
                        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute top-[435px] left-[793px] h-[408px] w-[640px]">
          <CardHeader className="p-0">
            <CardTitle className="absolute top-2.5 left-[21px] h-[46px] w-[482px] [font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Shipment Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-0">
            <div className="mx-4 mt-16">
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-2 py-3 text-left text-sm font-medium text-black">
                        Container & BOL
                      </th>
                      <th className="px-2 py-3 text-left text-sm font-medium text-black">Route</th>
                      <th className="px-2 py-3 text-left text-sm font-medium text-black">
                        Carrier ETA
                      </th>
                      <th className="px-2 py-3 text-left text-sm font-medium text-black">
                        AI Prediction
                      </th>
                      <th className="px-2 py-3 text-left text-sm font-medium text-black">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipmentTrackingData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-3">
                            <div className="h-4 w-4 rounded border border-gray-400"></div>
                            <div>
                              <div className="text-sm font-medium text-black">{item.container}</div>
                              <div className="text-xs text-gray-500">{item.bol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-3">
                          <div className="text-sm font-medium text-black">
                            {item.origin} → {item.destination}
                          </div>
                          <div className="text-xs text-gray-500">{item.path}</div>
                        </td>
                        <td className="px-2 py-3">
                          <div className="text-sm font-medium text-black">{item.carrierETA}</div>
                          <div className="text-xs text-gray-500">{item.carrierTime}</div>
                        </td>
                        <td className="px-2 py-3">
                          <div className="text-sm font-medium text-black">{item.aiPrediction}</div>
                          <div className="text-xs text-gray-500">{item.aiTime}</div>
                        </td>
                        <td className="px-2 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-black">{item.status}</span>
                            <div className={`h-6 w-4 ${item.statusColor} rounded shadow-sm`}></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute top-[436px] left-[509px] h-[408px] w-[282px]">
          <CardHeader className="p-0">
            <CardTitle className="absolute top-[9px] left-[13px] h-[46px] w-[260px] [font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Vessel Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="relative p-0">
            <VesselSummaryCard items={vesselSummaryData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
