import {BuildingsLineChart} from "./Cards/charts/BuildingsChartLine";
import ChartCard from "./Cards/charts/ChartsCard";
import TopCards from "./Cards/TopCards";
import TableDemo from "./Cards/BuildingsCard";

export default function MainDashboard() {
  return (
    <>
      <TopCards />

      <ChartCard />

      <TableDemo />
    </>
  );
}
