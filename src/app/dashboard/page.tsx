import ChartCard from "@/components/ChartsCard";
import { TopCards } from "../../components/TopCards";
import TableDemo from "@/components/AvailablePropsTable";

import {DashboardHeader} from "@/components/SubHeader";

export default function MainDashboard() {
  return (
    <div className="">
      <div className="mb-10">
        <DashboardHeader />
      </div>

      <TopCards />

      <ChartCard />

      <TableDemo />
    </div>
  );
}
