import { BuildingsLineChart } from "./charts/Chart";

export default function ChartCard(){
	return ( 
	<div className="border mt-5 drop-shadow-lg rounded-lg p-2 bg-zinc-200 h-96 ">
		<BuildingsLineChart />
	</div>
	)
}