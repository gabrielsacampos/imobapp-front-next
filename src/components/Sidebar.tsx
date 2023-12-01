import {
  LayoutDashboard as DashboardIcon,
  Building2 as BuildingIcon,
  ScrollText as LeaseIcon,
  Wallet2 as WalletIcon,
  Scale as ScaleIcon,
} from "lucide-react";


export default function Sidebar() {
  return (
    <aside className="w-40 bg-gray-800  p-6 drop-shadow-2xl h-full hidden md:block">
      <div className="flex justify-center">
        <h1 className="text-zinc-200">Imobapp &#128640;</h1>
      </div>

      <nav className="mt-5 border-t border-zinc-200 0 mb-5"></nav>
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100 hover:text-indigo-500 hover:bg-zinc-100  rounded-lg p-2 "
        >
          <DashboardIcon />
          Overview
        </a>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-100 rounded-lg p-2 bg-slate-300">
          <BuildingIcon />
          Imóveis
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-100  rounded-lg p-2 bg-slate-300">
          <LeaseIcon />
          Contratos
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-100 rounded-lg p-2 bg-slate-300">
          <WalletIcon />
          Financas
        </div>

        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100 hover:text-indigo-500 hover:bg-zinc-100  rounded-lg p-2 "
        >
          <ScaleIcon />
          Jurídico
        </a>
      </nav>

      <nav className="mt-5 border-t border-zinc-200 "></nav>

      <div className="mt-5 text-xs font-bold bg-red-500 rounded-3xl  flex justify-center">
        <button className="text-zinc-200">Sair</button>
      </div>
    </aside>
  );
}
