import {BuildingsLineChart} from "./Cards/charts/BuildingsChartLine";
import ChartCard from "./Cards/charts/ChartsCard";
import TopCards from "./Cards/TopCards";
import TableDemo from "./Cards/BuildingsCard";

export default function MainDashboard() {
  return (
    <main className="flex-1 bg-zinc-300 text-blue-500 p-6 font-semibold text-lg ">
      <TopCards />

      <ChartCard />

      <TableDemo />
    </main>
  );
}
