import {
	LayoutDashboard as DashboardIcon,
	Building2 as BuildingIcon,
	ScrollText as LeaseIcon,
	Wallet2 as WalletIcon} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-40 bg-blue-500 p-6">
      <nav className="space-y-5">
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <DashboardIcon />
          Overview
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <BuildingIcon />
          Imóveis
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <LeaseIcon />
          Contratos
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
        >
          <WalletIcon />
          Financas
        </a>
      </nav>

      <nav className="mt-5 border-t border-zinc-200"></nav>
    </aside>
  );
}
