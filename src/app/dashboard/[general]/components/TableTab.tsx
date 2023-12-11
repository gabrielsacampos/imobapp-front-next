'use client'


import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";
import { Building2 as BuildingsIcon, FileOutput as LeaseEndingIcon } from "lucide-react";

export function TableTab(){
	return(
		<TabGroup className="mb-5">
			<TabList>
				<Tab icon={BuildingsIcon}>Imóveis Disponíveis</Tab>
				<Tab icon={LeaseEndingIcon}>Contratos perto do fim (60 dias)</Tab>
			</TabList>
		</TabGroup>
	)
}
