import {
  FileInput as ActiveDocsIcon,
  CircleDollarSign as DollarIcon,
  Ticket as TicketIcon,
  Recycle as RecycleIcon,
  Wrench as ToolIcon,
  AlertTriangle as DangerIcon,
} from "lucide-react";


interface Card {
	lable: string;
	desc: string;
	icon: JSX.Element;
	value: any;
  }


export const cards: Card[] = [
  {
    lable: "Contratos",
    desc: "Ativos",
    icon: <ActiveDocsIcon color="gray" size={40}/>,
    value: "some",
  },
  {
    lable: "Total",
    desc: "Contratos",
    icon: <DollarIcon  color="gray" size={40}/>,
    value: "some",
  },
  {
    lable: "Ticket",
    desc: "Médio",
    icon: <TicketIcon  color="gray" size={40}/>,
    value: "some",
  },
  {
    lable: "Renovações",
    desc: "Mês",
    icon: <RecycleIcon  color="gray" size={40}/>,
    value: "some",
  },
  {
    lable: "Reajustes",
    desc: "Mês",
    icon: <ToolIcon  color="gray" size={40}/>,
    value: "some",
  },
  {
    lable: "Inadimplência",
    desc: "+45 dias",
    icon: <DangerIcon  color="gray" size={40}/>,
    value: "some",
  },
];
