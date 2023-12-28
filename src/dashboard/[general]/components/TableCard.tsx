import { useState } from "react";

import { TableTab } from "./TableTab";


import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";


export function TableCard(){
	const [activeTab, setActiveTab] = useState('tabProperties')



	return(
		<div>
			<TableTab/>
		</div>

	)
}