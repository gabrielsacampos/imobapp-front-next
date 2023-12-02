import {
  FileInput as ActiveDocsIcon,
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
} from "lucide-react";


interface TopCards {
	lable: string;
	desc: string;
	icon: JSX.Element;
	value: any;
  }


export const cards: TopCards[] = [
  {
    lable: "Contratos",
    desc: "Ativos",
    icon: <ActiveDocsIcon />,
    value: "some",
  },
  {
    lable: "Total",
    desc: "Contratos",
    icon: <DollarIcon />,
    value: "some",
  },
  {
    lable: "Ticket",
    desc: "Médio",
    icon: <TicketIcon />,
    value: "some",
  },
  {
    lable: "Renovações",
    desc: "Mês",
    icon: <RecycleIcon />,
    value: "some",
  },
  {
    lable: "Reajustes",
    desc: "Mês",
    icon: <ToolIcon />,
    value: "some",
  },
  {
    lable: "Inadimplência",
    desc: "+45 dias",
    icon: <DangerIcon />,
    value: "some",
  },
];
