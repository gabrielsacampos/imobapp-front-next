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
		lable: 'Overview',
		icon: <DashboardIcon />,
		path: "/"
	},
	{
		unabled: true,
		lable: 'Imóveis',
		icon: <BuildingIcon />,
		path: "/"
	},
	{
		unabled: true,
		lable: 'Contratos',
		icon: <LeaseIcon />,
		path: "/"
	},
	{
		unabled: true,
		lable: 'Finanças',
		icon: <WalletIcon />,
		path: "/"
	},
	{
		unabled: false,
		lable: 'Jurídico',
		icon: <ScaleIcon />,
		path: "/"
	}
]