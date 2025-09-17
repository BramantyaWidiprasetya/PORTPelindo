export const metadata = {
  title: "Resilience & Response",
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { FactorAnalysisLive } from "./FactorAnalysisLive";

export default function ResilienceResponsePage() {
  const chartYAxisLabels = [
    { value: "100%", top: "top-[53px]" },
    { value: "90%", top: "top-[74px]" },
    { value: "80%", top: "top-[95px]" },
    { value: "70%", top: "top-[116px]" },
    { value: "60%", top: "top-[138px]" },
    { value: "50%", top: "top-[159px]" },
    { value: "40%", top: "top-[180px]" },
    { value: "30%", top: "top-[201px]" },
    { value: "20%", top: "top-[222px]" },
    { value: "50%", top: "top-[226px]" },
  ];
  const chartXAxisLabels = [
    { value: "0%", left: "left-[95px]" },
    { value: "10%", left: "left-[159px]" },
    { value: "20%", left: "left-[223px]" },
    { value: "30%", left: "left-[286px]" },
    { value: "40%", left: "left-[350px]" },
    { value: "50%", left: "left-[414px]" },
  ];
  const chartDataPoints = [
    { top: "top-[75px]", left: "left-[78px]" },
    { top: "top-[88px]", left: "left-[106px]" },
    { top: "top-[130px]", left: "left-[137px]" },
    { top: "top-[193px]", left: "left-[275px]" },
    { top: "top-[161px]", left: "left-[385px]" },
  ];
  const factorAnalysisData = [
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
  ];
  const factorAnalysisBottomData = [
    { title: "Kecepatan", left: "left-7" },
    { title: "Gelombang laut", left: "left-[141px]" },
    { title: "Historis", left: "left-[255px]" },
    { title: "Maintenance", left: "left-[368px]" },
  ];
  const incidentResponseData = [
    {
      caseId: "FCL192732",
      caseNumber: "001822937",
      routeFrom: "ILHFA",
      routeTo: "USLAX",
      routeType: "Direct",
      reportedDate: "08 May 25",
      reportedTime: "6:06 PM",
      predictedDate: "08 May 25",
      predictedTime: "6:06 PM",
      status: "Arrived",
      statusColor: "bg-[#1ca52c]",
    },
    {
      caseId: "FCL192732",
      caseNumber: "001822937",
      routeFrom: "ILHFA",
      routeTo: "USLAX",
      routeType: "Direct",
      reportedDate: "08 May 25",
      reportedTime: "6:06 PM",
      predictedDate: "08 May 25",
      predictedTime: "6:06 PM",
      status: "Delayed",
      statusColor: "bg-[#d6900f]",
    },
    {
      caseId: "FCL192732",
      caseNumber: "001822937",
      routeFrom: "ILHFA",
      routeTo: "USLAX",
      routeType: "Direct",
      reportedDate: "08 May 25",
      reportedTime: "6:06 PM",
      predictedDate: "08 May 25",
      predictedTime: "6:06 PM",
      status: "Not Yet",
      statusColor: "bg-[#d02323]",
    },
    {
      caseId: "FCL192732",
      caseNumber: "001822937",
      routeFrom: "ILHFA",
      routeTo: "USLAX",
      routeType: "Direct",
      reportedDate: "08 May 25",
      reportedTime: "6:06 PM",
      predictedDate: "08 May 25",
      predictedTime: "6:06 PM",
      status: "Delayed",
      statusColor: "bg-[#d6900f]",
    },
    {
      caseId: "FCL192732",
      caseNumber: "001822937",
      routeFrom: "ILHFA",
      routeTo: "USLAX",
      routeType: "Direct",
      reportedDate: "08 May 25",
      reportedTime: "6:06 PM",
      predictedDate: "08 May 25",
      predictedTime: "6:06 PM",
      status: "Arrived",
      statusColor: "bg-[#1ca52c]",
    },
  ];

  return (
    <div className="grid w-screen [align-items:start] justify-items-center bg-transparent">
      <div className="relative h-[1024px] w-[1440px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(50,182,233,1)_100%)]">
        {/* Navigating vs Operational Time */}
        <Card className="absolute top-[607px] left-[11px] h-[263px] w-[482px] cursor-pointer rounded-[10px] border border-solid border-[#32b6e9] bg-white shadow-[0px_4px_4px_#00000040] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <CardHeader className="absolute top-0 left-[19px] h-[46px] w-[409px] p-0">
            <CardTitle className="[font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Navigating vs Operational Time
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="absolute top-[63px] left-[83px] h-[172px] w-px bg-[#dcdcdc]" />
            <div className="absolute top-[63px] left-[132px] h-[172px] w-px bg-[#dcdcdc]" />
            <div className="absolute top-[100px] left-[60px] h-px w-[398px] bg-[#dcdcdc]" />
            {chartDataPoints.map((p, i) => (
              <div
                key={i}
                className={`absolute h-[9px] w-[9px] ${p.top} ${p.left} rotate-[-44.53deg] bg-[linear-gradient(0deg,rgba(0,84,137,1)_0%,rgba(0,84,137,1)_100%),linear-gradient(0deg,rgba(0,84,137,1)_0%,rgba(0,84,137,1)_100%)]`}
              />
            ))}
            {chartYAxisLabels.map((l, i) => (
              <div
                key={i}
                className={`absolute left-[11px] ${l.top} h-3 w-[41px] text-right [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-[#bcbbbb]`}
              >
                {l.value}
              </div>
            ))}
            {chartXAxisLabels.map((l, i) => (
              <div
                key={i}
                className={`absolute top-[236px] ${l.left} h-[15px] w-[33px] text-center [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-[#bcbbbb]`}
              >
                {l.value}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Factor Analysis */}
        <Card className="absolute top-[878px] left-[11px] h-[261px] w-[482px] cursor-pointer rounded-[10px] border border-solid border-[#32b6e9] bg-white shadow-[0px_4px_4px_#00000040] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <CardHeader className="absolute top-0 left-[19px] h-[46px] w-[260px] p-0">
            <CardTitle className="[font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Factor Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <FactorAnalysisLive items={factorAnalysisData} />
            {factorAnalysisBottomData.map((fa, i) => (
              <div
                key={i}
                className={`absolute top-[163px] ${fa.left} h-6 w-[94px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] text-black`}
              >
                {fa.title}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Digital Twin Port */}
        <div className="absolute top-[135px] left-[18px] h-[466px] w-[1419px] cursor-pointer overflow-hidden rounded-[10px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl">
          <Image
            src="/digital-twin.png"
            alt="Digital Twin Port"
            fill
            sizes="1419px"
            className="object-cover"
            priority
          />
          <div className="absolute top-0 left-1 h-[327px] w-[1411px] rounded-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,0)_100%)]" />
          <div className="absolute top-[57px] left-[39px] h-[66px] w-[879px] shadow-[0px_4px_4px_#00000040]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`absolute top-0 h-[66px] w-[214px] rounded-[10px] bg-[#ffffff80] backdrop-blur-sm transition-all duration-200 ease-in-out hover:-translate-y-1 hover:bg-white/90 hover:shadow-lg ${i === 0 ? "left-0" : i === 1 ? "left-[222px]" : i === 2 ? "left-[443px]" : "left-[665px]"}`}
              />
            ))}
          </div>
          <div className="absolute top-2.5 left-[31px] h-[46px] w-[260px] [font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
            Digital Twin Port
          </div>
          {[
            { value: "250", label: "Completed", color: "bg-[#005489]", left: "left-[99px]" },
            { value: "360", label: "Early", color: "bg-[#039114]", left: "left-[321px]" },
            { value: "578", label: "On Time", color: "bg-[#d6900f]", left: "left-[543px]" },
            { value: "136", label: "Delay", color: "bg-[#d02323]", left: "left-[765px]" },
          ].map((s, i) => (
            <div key={i}>
              <div
                className={`absolute top-[102px] ${s.left} z-30 h-4 w-[147px] [font-family:'Inter',Helvetica] text-[11px] leading-[normal] font-medium tracking-[0] text-black`}
              >
                {s.label}
              </div>
              <div
                className={`absolute top-[66px] ${s.left} z-30 h-[26px] w-[90px] [font-family:'Inter',Helvetica] text-[28px] leading-[normal] font-bold tracking-[0] text-black`}
              >
                {s.value}
              </div>
              <div
                className={`absolute top-[72px] ${i === 0 ? "left-[54px]" : i === 1 ? "left-[276px]" : i === 2 ? "left-[498px]" : "left-[720px]"} h-[35px] w-[35px] rounded-[5px] ${i === 0 ? "bg-[#005489]" : i === 1 ? "bg-[#039114]" : i === 2 ? "bg-[#d6900f]" : "bg-[#d02323]"}`}
              />
            </div>
          ))}
        </div>

        {/* Incident Response List */}
        <Card className="absolute top-[610px] left-[793px] h-[408px] w-[640px] cursor-pointer rounded-[10px] border border-solid border-[#32b6e9] bg-white shadow-[0px_4px_4px_#00000040] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <CardHeader className="absolute top-2.5 left-[21px] h-[46px] w-[482px] p-0">
            <CardTitle className="[font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Incident Response List
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="absolute top-[125px] left-0 h-0.5 w-[639px] bg-gray-200" />
            <div className="absolute top-[180px] left-0 h-0.5 w-[639px] bg-gray-200" />
            <div className="absolute top-[235px] left-0 h-0.5 w-[639px] bg-gray-200" />
            <div className="absolute top-[290px] left-0 h-0.5 w-[639px] bg-gray-200" />
            <div className="absolute top-[345px] left-0 h-0.5 w-[639px] bg-gray-200" />
            <div className="absolute top-[78px] left-[65px] h-[35px] w-[93px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] text-black">
              Case ID
            </div>
            <div className="absolute top-[78px] left-[173px] h-[35px] w-[103px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] text-black">
              Route
            </div>
            <div className="absolute top-[78px] left-[291px] h-[35px] w-[101px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] text-black">
              Reported
            </div>
            <div className="absolute top-[78px] left-[407px] h-[35px] w-[101px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] text-black">
              AI Predicted ETA
            </div>
            <div className="absolute top-[78px] left-[508px] h-[35px] w-[101px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-normal tracking-[0] text-black">
              Incident Status
            </div>
            {incidentResponseData.map((incident, index) => {
              const top = [135, 190, 245, 300, 355][index];
              const second = top + 15;
              return (
                <div key={index} className="transition-colors duration-200 hover:bg-blue-50/30">
                  <Checkbox
                    className="absolute h-[22px] w-[22px] rounded-[5px] border border-black transition-all duration-200 hover:border-blue-500 hover:shadow-md"
                    style={{ top: `${top}px`, left: "21px" }}
                  />
                  <div
                    className="absolute left-[65px] h-[13px] w-[93px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] whitespace-nowrap text-black"
                    style={{ top: `${top}px` }}
                  >
                    {incident.caseId}
                  </div>
                  <div
                    className="absolute left-[65px] h-[13px] w-[93px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]"
                    style={{ top: `${second}px` }}
                  >
                    {incident.caseNumber}
                  </div>
                  <div
                    className="absolute left-[173px] h-[13px] w-[49px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] whitespace-nowrap text-black"
                    style={{ top: `${top}px` }}
                  >
                    {incident.routeFrom}
                  </div>
                  <div
                    className="absolute left-[223px] h-[13px] w-[53px] text-right [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] whitespace-nowrap text-black"
                    style={{ top: `${top}px` }}
                  >
                    {incident.routeTo}
                  </div>
                  <div
                    className="absolute left-[173px] h-[13px] w-[93px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]"
                    style={{ top: `${second}px` }}
                  >
                    {incident.routeType}
                  </div>
                  <div
                    className="absolute left-[173px] h-0.5 w-[103px] bg-gray-300"
                    style={{ top: `${second + 10}px` }}
                  />
                  <div
                    className="absolute left-[291px] h-[13px] w-[101px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] whitespace-nowrap text-black"
                    style={{ top: `${top}px` }}
                  >
                    {incident.reportedDate}
                  </div>
                  <div
                    className="absolute left-[291px] h-[13px] w-[101px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]"
                    style={{ top: `${second}px` }}
                  >
                    {incident.reportedTime}
                  </div>
                  <div
                    className="absolute left-[407px] h-[13px] w-[101px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] whitespace-nowrap text-black"
                    style={{ top: `${top}px` }}
                  >
                    {incident.predictedDate}
                  </div>
                  <div
                    className="absolute left-[407px] h-[13px] w-[101px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-medium tracking-[0] whitespace-nowrap text-[#bcbbbb]"
                    style={{ top: `${second}px` }}
                  >
                    {incident.predictedTime}
                  </div>
                  <div
                    className="absolute left-[509px] h-[35px] w-[121px]"
                    style={{ top: `${top + 1}px` }}
                  >
                    <div className="absolute top-0 left-0 h-[13px] w-[121px] [font-family:'Inter',Helvetica] text-xs leading-[normal] font-bold tracking-[0] whitespace-nowrap text-black">
                      {incident.status}
                    </div>
                    <div
                      className={`absolute top-px left-[95px] h-[34px] w-[26px] rounded-[5px] shadow-[0px_4px_4px_#00000040] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${incident.statusColor}`}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Safety Copilot */}
        <Card className="absolute top-[610px] left-[502px] h-[408px] w-[282px] cursor-pointer rounded-[10px] border border-solid border-[#32b6e9] bg-white shadow-[0px_4px_4px_#00000040] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
          <CardHeader className="absolute top-[9px] left-[13px] h-[46px] w-[260px] p-0">
            <CardTitle className="[font-family:'Inter',Helvetica] text-[25px] leading-[normal] font-bold tracking-[0] text-[#0475bc]">
              Safety Copilot
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="absolute top-[77px] left-[13px] h-[35px] w-[254px] [font-family:'Inter',Helvetica] text-[15px] leading-[normal] font-medium tracking-[0] text-black">
              Rainfall Rate
            </div>
            <div className="absolute top-[187px] left-3 h-[209px] w-[254px] [font-family:'Inter',Helvetica] text-[15px] leading-[30px] font-medium tracking-[0] text-black italic transition-colors duration-300 hover:text-blue-800">
              Peringatan: Hujan deras terdeteksi di area operasional. Harap hentikan sementara
              aktivitas bongkar muat, gunakan perlengkapan pelindung hujan, dan pastikan peralatan
              listrik atau crane dalam kondisi aman sebelum melanjutkan pekerjaan.
            </div>
            <div className="absolute top-[120px] left-[52px] h-6 w-44 text-center [font-family:'Inter',Helvetica] text-3xl leading-[normal] font-bold tracking-[0] text-[#1ca52c] transition-all duration-300 hover:scale-110 hover:text-green-600">
              87.1%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
