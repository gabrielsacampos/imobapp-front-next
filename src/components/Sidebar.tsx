import {
  LayoutDashboard as DashboardIcon,
  Building2 as BuildingIcon,
  ScrollText as LeaseIcon,
  Wallet2 as WalletIcon,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-40 bg-blue-500 p-6 drop-shadow-2xl">
      <div className="flex justify-center">
        <h1>Imobapp</h1>
      </div>

      <nav className="mt-5 border-t border-zinc-200 0 mb-5"></nav>
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100 hover:bg-blue-700 shadow-md rounded-lg p-2"
        >
          <DashboardIcon />
          Overview
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100  hover:bg-blue-700 shadow-md rounded-lg p-2"
        >
          <BuildingIcon />
          Imóveis
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100  hover:bg-blue-700 shadow-md rounded-lg p-2"
        >
          <LeaseIcon />
          Contratos
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100  hover:bg-blue-700 shadow-md rounded-lg p-2"
        >
          <WalletIcon />
          Financas
        </a>
      </nav>

      <nav className="mt-5 border-t border-zinc-200 "></nav>

	  <div className="mt-5 text-xs font-bold bg-red-500 rounded-3xl  flex justify-center">
		<button className="w-">Sair</button>
	  </div>
    </aside>
  );
}
