import { TopCards } from "../../components/TopCards";
import { TableAvailableProps } from "@/components/TableAvailableProps";
import { DashboardHeader } from "@/components/DashboardHeader";
import BuildingsLineChart from "@/components/BuildingsChartLine";
import { TableLeasesToEnd } from "@/components/TableLeasesToEnd";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="mb-10 ">
      <main>
        <div className="mb-10 ">
          <DashboardHeader />
        </div>

        <div className=" overflow-x-auto relative">
          <TopCards />
        </div>

        <div>
          <BuildingsLineChart />
        </div>

        <div>
          <div className="flex justify-center text-zinc-500 mb-3 pb-1  mt-10 border-b border-white/10 ">
            Aqui você pode conferir os imóveis disponíveis e os contratos perto
            do fim.
          </div>
          <div className="items-center justify-center  md:gap-5 md:flex">
            <TableAvailableProps />
            <TableLeasesToEnd />
          </div>
        </div>
      </main>

    </div>
  );
}
