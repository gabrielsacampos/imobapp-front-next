import { BuildingsLineChart } from "./Cards/charts/BuildingsChartLine";
import ChartCard from "./Cards/charts/ChartsCard";
import TopCards from "./Cards/TopCards";
import TableDemo from "./Cards/BuildingsCard";

export default function MainDashboard() {
  return (
    <div className="flex flex-col p-6">
      <TopCards/>

      <ChartCard />

      <TableDemo />
    </div>
  );
}
