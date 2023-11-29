import ChartLine from "./Chart";
import TopCards from "./TopCards";

export default function MainDashboard() {
  return (
    <main className="flex-1 bg-zinc-300 text-blue-500 p-6 font-semibold text-lg ">
      <h1 className="border">Resumo Geral</h1>

      <TopCards />

      <ChartLine />

      <div className="border mt-5 h-40 rounded-lg p-2 flex justify-between">
        <div className="border rounded-lg w-1/2 m-2">Imóveis disponíveis</div>
        <div className="border rounded-lg w-1/2 m-2">Lista disponíveis</div>
      </div>

      <div className="border h-40 rounded-lg flex justify-between">
        <div className="border rounded-lg w-1/2 m-2">Imóveis disponíveis</div>
        <div className="border rounded-lg w-1/2 m-2">Lista disponíveis</div>
      </div>
    </main>
  );
}
