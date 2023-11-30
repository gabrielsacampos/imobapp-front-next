import {
  FileInput as ActiveDocsIcon,
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
} from "lucide-react";

const leases = [{ value: 100 }, { value: 50 }, { value: 90 }, { value: 120 }];

export default function TopCards() {
  return (
    <div key="box-top-cards" className="grid  gap-3 drop-shadow-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto justify-center">
     
     
      <div className="bg-zinc-200 rounded-lg  text-sm grid grid-cols-2  w-36 pl-1">
        <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
          <p className="justify-start text-xs">
            <p>Contratos</p>
            <p className="text-xs text-zinc-500 self-center">Ativos</p>
          </p>
        </div>

        <div className="row-start-2 row-end-3 m-0 flex ml-0  col-start-1 col-end-2 justify-center mb-2  ">
          <ActiveDocsIcon className=" text-cyan-200 rounded-full bg-blue-500 w-7 h-7 p-1" />
        </div>

        <p className=" p-2 text-sm flex  row-start-1 row-end-3 items-center justify-center">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg  text-sm grid grid-cols-2  w-36 pl-1">
        <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
          <p className="justify-start text-xs">
            <p>Total</p>
            <p className="text-xs text-zinc-500 self-center">Ativos</p>
          </p>
        </div>

        <div className="row-start-2 row-end-3 m-0 flex ml-0  col-start-1 col-end-2 justify-center mb-2  ">
          <DollarIcon className=" text-cyan-200 rounded-full bg-blue-500 w-7 h-7 p-1" />
        </div>

        <p className=" p-2 text-sm flex  row-start-1 row-end-3 items-center justify-center">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg  text-sm grid grid-cols-2  w-36 pl-1">
        <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
          <p className="justify-start text-xs">
            <p>Ticket</p>
            <p className="text-xs text-zinc-500 self-center">Médio</p>
          </p>
        </div>

        <div className="row-start-2 row-end-3 m-0 flex ml-0  col-start-1 col-end-2 justify-center mb-2  ">
          <TicketIcon className=" text-cyan-200 rounded-full bg-blue-500 w-7 h-7 p-1" />
        </div>

        <p className=" p-2 text-sm flex  row-start-1 row-end-3 items-center justify-center">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg  text-sm grid grid-cols-2  w-36 pl-1">
        <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
          <p className="justify-start text-xs">
            <p>Renovações</p>
            <p className="text-xs text-zinc-500 self-center">Mês atual</p>
          </p>
        </div>

        <div className="row-start-2 row-end-3 m-0 flex ml-0  col-start-1 col-end-2 justify-center mb-2  ">
          <RecycleIcon className=" text-cyan-200 rounded-full bg-blue-500 w-7 h-7 p-1" />
        </div>

        <p className=" p-2 text-sm flex  row-start-1 row-end-3 items-center justify-center">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg  text-sm grid grid-cols-2  w-36 pl-1">
        <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
          <p className="justify-start text-xs">
            <p>Reajustes</p>
            <p className="text-xs text-zinc-500 self-center">Mês atual</p>
          </p>
        </div>

        <div className="row-start-2 row-end-3 m-0 flex ml-0  col-start-1 col-end-2 justify-center mb-2  ">
          <ToolIcon className=" text-cyan-200 rounded-full bg-blue-500 w-7 h-7 p-1" />
        </div>

        <p className=" p-2 text-sm flex  row-start-1 row-end-3 items-center justify-center">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg  text-sm grid grid-cols-2  w-36 pl-1">
        <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
          <p className="justify-start text-xs">
            <p>Inadimplência</p>
            <p className="text-xs text-zinc-500 self-center">+45 dias</p>
          </p>
        </div>

        <div className="row-start-2 row-end-3 m-0 flex ml-0  col-start-1 col-end-2 justify-center mb-2  ">
          <DangerIcon className=" text-cyan-200 rounded-full bg-blue-500 w-7 h-7 p-1" />
        </div>

        <p className=" p-2 text-sm flex  row-start-1 row-end-3 items-center justify-center">
          <p>$$$</p>
        </p>
      </div>
    </div>
  );
}
