import { BuildingsLineChart } from "./Cards/charts/BuildingsChartLine";
import ChartCard from "./Cards/charts/ChartsCard";
import TopCards from "./Cards/TopCards";
import TableDemo from "./Cards/BuildingsCard";
import SubHeader from "../SubHeader";
import SubHeaderDashboard from "../SubHeader";

export default function Dashboard() {
  return (
    <div className="">

      <SubHeaderDashboard/>

      <TopCards/>

      <ChartCard />
 
      <TableDemo />
    </div>
  );
}
