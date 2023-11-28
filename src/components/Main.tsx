import {
  FileInput as ActiveDocsIcon,
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
} from "lucide-react";

export default function MainDashboard() {
  return (
    <main className="flex-1 bg-zinc-300 text-blue-500 p-6 font-semibold text-lg ">
      <h1 className="border">Resumo Geral</h1>

      <div className="grid h-20 grid-cols-6 gap-3  mt-5">
        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <ActiveDocsIcon />
          Contratos Ativos
        </p>

        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <DollarIcon />
          Total
        </p>

        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <TicketIcon />
          Ticket
        </p>

        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <RecycleIcon />
          Renovações
        </p>

        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <ToolIcon />
          Reajustes
        </p>

        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <DangerIcon />
          Inadimplência
        </p>
      </div>

      <div className="border mt-5 h-80 rounded-lg p-6">Chart</div>

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
