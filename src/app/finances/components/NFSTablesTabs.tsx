import { Badge, Color, Tab, TabGroup, TabList } from "@tremor/react";
import { CheckCircleIcon, Send as SendIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { NFSTable } from "./NFSTable";

const mock = [
  {
    key: "sentNfs",
    lable: "Pendentes",
    value: 12,
    color: "blue",
    table: <>sent</>,
    icon: SendIcon
  },
  {
    key: "sucefullNfs",
    lable: "Emitidas",
    value: 12,
    color: "green",
    table: <>done</>,
    icon: CheckCircleIcon
  },
  {
    key: "errorNfs",
    lable: "Falhas",
    value: 12,
    color: "red",
    table: <>error</>,
    icon: XCircleIcon
  },
]



export function NFSTablesTabs(){
  const [selectedTableTab, setSelectedTableTab] = useState(
    "availableProperties"
  );

  function handleTabClick(tableRef: string) {
    setSelectedTableTab(tableRef);
  }

  function displaySelectedTable() {
    return mock.find(item => item.key === selectedTableTab)?.table
  }

  return (
    <div className="items-center justify-center mt-2">
      <TabGroup className="ml-1 flex">
     {mock.map((item, index) => {
      return( 
        <TabList 
          key={item.key}
          color={item.color as Color}
        >
          <Tab
            icon={item.icon}
            onClick={() => handleTabClick(item.key)}
          >
            {item.lable} <Badge color={selectedTableTab === item.key ? item.color: "gray"}>{item.value}</Badge>
          </Tab>
         </TabList>
      )
     })}
     </TabGroup>
      {/* {displaySelectedTable()} */}
      <NFSTable />
    </div>
  );
}

