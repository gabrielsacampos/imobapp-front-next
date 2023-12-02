import {
	LayoutDashboard as DashboardIcon,
	Building2 as BuildingIcon,
	ScrollText as LeaseIcon,
	Wallet2 as WalletIcon,
	Scale as ScaleIcon,
	LayoutDashboard,
  } from "lucide-react";

import { ReactNode } from 'react';


export type SidebarItem = {
	unabled: boolean;
	lable: string;
	icon: ReactNode;
	path: string;
}


export const SIDEBAR_ITEMS: SidebarItem[] = [
	{
		unabled: false,
		lable: 'Geral',
		icon: <DashboardIcon />,
		path: "/"
	},
	{
		unabled: true,
		lable: 'Imóveis',
		icon: <BuildingIcon />,
		path: "/dashboard/properties"
	},
	{
		unabled: true,
		lable: 'Contratos',
		icon: <LeaseIcon />,
		path: "/dashboard/leases"
	},
	{
		unabled: true,
		lable: 'Finanças',
		icon: <WalletIcon />,
		path: "/dashboard/finance"
	},
	{
		unabled: false,
		lable: 'Jurídico',
		icon: <ScaleIcon />,
		path: "/dashboard/legal"
	}
]