"use client";
import dynamic from "next/dynamic";
import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import PageMeta from "../../components/common/PageMeta";

const MonthlySalesChart = dynamic(
  () => import("../../components/ecommerce/MonthlySalesChart"),
  { ssr: false }
);
const StatisticsChart = dynamic(
  () => import("../../components/ecommerce/StatisticsChart"),
  { ssr: false }
);
const MonthlyTarget = dynamic(
  () => import("../../components/ecommerce/MonthlyTarget"),
  { ssr: false }
);
const DemographicCard = dynamic(
  () => import("../../components/ecommerce/DemographicCard"),
  { ssr: false }
);

export default function page() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
