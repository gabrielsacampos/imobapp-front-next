import { TableAvailableProperties } from "@/app/dashboard/[general]/components/TableAvailableProperties";
import {
  Accordion as AccordionShad,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeCheckIcon } from "lucide-react";

const AccordionContet = [
  {
	status: "Pendente",
    trigger: "2023-01-01 - 2023-01-31",
    lable: <BadgeCheckIcon />,
    content: <TableAvailableProperties />,
  },
  {
	status: "Encerrado",
    trigger: "2023-01-01 - 2023-01-31",
    lable: <BadgeCheckIcon />,
    content: <TableAvailableProperties />,
  },
  {
	status: "Encerrado",
    trigger: "2023-01-01 - 2023-01-31",
    lable: <BadgeCheckIcon />,
    content: <TableAvailableProperties />,
  },
  {
	status: "Encerrado",
    trigger: "2023-01-01 - 2023-01-31",
    lable: <BadgeCheckIcon />,
    content: <TableAvailableProperties />,
  },
];

function AccordionBadge({ status }) {

	const styleBadge = () => {
		if(status === "Encerrado"){
			return 'border-green-500 bg-green-500/10 text-green-400'
		}
		if(status === "Pendente"){
			return 'border-orange-500 bg-orange-500/10 text-orange-400 animate-pulse'
		}
	}

  return <div className={`px-2 text-xs border  rounded-md ${styleBadge()} `}>{status}</div>;
}

type AccordionContentType = {
	items: {
		status: string;
	lable: string;
	badge: JSX.Element;
	content: any;
	}[]
}

export function Accordion({items}: AccordionContentType) {
  return (
    <AccordionShad type="single" collapsible className="w-full">
      {/* {items.map((item) => {
        return (
          <AccordionItem
            className="border-b border-white/10 px-2"
            value={item.lable}
            key={item.lable}
          >
            <div className="flex items-center gap-2 justify-center">
              <AccordionTrigger>{item.lable}</AccordionTrigger>{" "}
              <AccordionBadge status={item.status}/>
            </div>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })} */}
    </AccordionShad>
  );
}
