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
    <div className="grid h-36 grid-cols-6 gap-3  mt-5 drop-shadow-lg">
      <div className="bg-zinc-200 rounded-lg p-2 text-sm grid grid-cols-1 justify-items-center">
        <p className=" p-2 text-sm flex">
          <ActiveDocsIcon />
          Contratos
        </p>

        <p className=" p-2 text-sm flex col-span-2">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg p-2 text-sm grid grid-cols-1 justify-items-center">
        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <DollarIcon />
          Total
        </p>

		<p className=" p-2 text-sm flex col-span-2">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg p-2 text-sm grid grid-cols-1 justify-items-center">
        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <TicketIcon />
          Ticket
        </p>

		<p className=" p-2 text-sm flex col-span-2">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg p-2 text-sm grid grid-cols-1 justify-items-center">
        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <RecycleIcon />
          Renovações
        </p>
		<p className=" p-2 text-sm flex col-span-2">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg p-2 text-sm grid grid-cols-1 justify-items-center">
        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <ToolIcon />
          Reajustes
        </p>

		<p className=" p-2 text-sm flex col-span-2">
          <p>$$$</p>
        </p>
      </div>

      <div className="bg-zinc-200 rounded-lg p-2 text-sm grid grid-cols-1 justify-items-center">
        <p className="bg-zinc-200 rounded-lg p-2 text-sm flex">
          <DangerIcon />
          Inadimplência
        </p>

		<p className=" p-2 text-sm flex col-span-2">
          <p>$$$</p>
        </p>
      </div>
    </div>
  );
}
