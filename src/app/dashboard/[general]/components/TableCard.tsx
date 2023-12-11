import { useState } from "react";
import { Table } from "./Table";
import { TableTab } from "./TableTab";




export function TableCard(){
	const [activeTab, setActiveTab] = useState('tabProperties')

	const {headers, rows, title} = activeTab === 'tabProperties' ? useAvailableProps() : useLeasesToEnd()
 



	return(
		<div>
			<TableTab/>
			<Table />
		</div>

	)
}