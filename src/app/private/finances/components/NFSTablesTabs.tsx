import { Color } from "@tremor/react";
import { Badge, Tabs } from "@radix-ui/themes";
import { CheckCircleIcon, Send as SendIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import { NFSTable } from "./NFSTable";

const mock = [
  {
    key: "sentNfs",
    lable: "Pendentes",
    value: 12,
    color: "amber",
    table: <>sent</>,
    icon: <SendIcon size={15}/>
  },
  {
    key: "sucefullNfs",
    lable: "Emitidas",
    value: 12,
    color: "green",
    table: <>done</>,
    icon: <CheckCircleIcon size={15}/>
  },
  {
    key: "errorNfs",
    lable: "Falhas",
    value: 12,
    color: "red",
    table: <>error</>,
    icon: <XCircleIcon size={15}/>
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
      <Tabs.Root className="ml-1 flex">
     {mock.map((item, index) => {
      return( 
        <Tabs.List 
          key={item.key}
          color={item.color as Color}
        >
          <Tabs.Trigger
          className="flex items-center gap-1"
            onClick={() => handleTabClick(item.key)}
          >
           {item.icon}
           {item.lable} 
           <Badge color={selectedTableTab === item.key ? item.color: "gray"}>{item.value}</Badge>
          </Tabs.Trigger>
         </Tabs.List>
      )
     })}
     </Tabs.Root>
      {/* {displaySelectedTable()} */}
      <NFSTable />
    </div>
  );
}

