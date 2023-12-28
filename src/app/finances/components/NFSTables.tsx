import { Loader } from "@/components/Loader";
import { useTables } from "@/hooks/useDashboard";
import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";
import { Send as SendIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import {BadgeCheckIcon, QuestionMarkCircleIcon, ExclamationIcon} from '@heroicons/react/outline'
import { useState } from "react";



function BadgeInfo({ info }: {info: string}) {
  const styleBadge = () => {
    if (info === "expiring") {
      return "border-yellow-500 bg-yellow-500/10 text-yellow-400";
    }
    if (info === "expired") {
      return "border-red-500 bg-red-500/10 text-red-400 animate-pulse";
    }
  };

  let infoPt: string;

  switch (info) {
    case "expiring":
      infoPt = "Encerrando";
      break
    case "expired":
      infoPt = "Encerrado";
      break
  }

  return (
    <div className={`px-2 text-xs border  rounded-md ${styleBadge()} `}>
      {infoPt!}
    </div>
  );
}




export function TableAvailableProperties(){
  const {data, isLoading, error} = useTables()

  if(isLoading){
    return <Loader />
  }

  const {available_properties: availableProps} = data!;
  return (
  <Card>
    <Title className="flex self-center gap-3">Imóveis Disponíveis <Badge color="emerald" icon={BadgeCheckIcon}>{availableProps.length}</Badge> </Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Empreendimento</TableHeaderCell>
          <TableHeaderCell>Unidade</TableHeaderCell>
          <TableHeaderCell>Torre/Bloco</TableHeaderCell>
          <TableHeaderCell>Quartos</TableHeaderCell>
          <TableHeaderCell>Valor Aluguel</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {availableProps.map((item, index) => (
          <TableRow key={`row-${index}`}>
            <TableCell>{item.building}</TableCell>
            <TableCell>
              <Text>{item.unity}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.block}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.rooms}</Text>
            </TableCell>
            <TableCell>
            <Text>
            {item.rental_value}
            </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>)
}
  
export function TableExpiringLeases(){
  const {data, isLoading, error} = useTables()

  if(isLoading){
    return <Loader />
  }

  const {expiring_leases: expiringLeases} = data!;


  return (
  <Card>
    <Title className="flex self-center gap-3">Contratos perto do fim <Badge color="yellow" icon={ExclamationIcon}>{expiringLeases.length}</Badge> </Title>
    <Badge size="xs" icon={QuestionMarkCircleIcon} color="gray"> até 60 dias para o fim</Badge>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Cod.</TableHeaderCell>
          <TableHeaderCell>Empreendimento</TableHeaderCell>
          <TableHeaderCell>Unidade</TableHeaderCell>
          <TableHeaderCell>Bloco/Torre</TableHeaderCell>
          <TableHeaderCell>Quartos</TableHeaderCell>
          <TableHeaderCell>Locatário</TableHeaderCell>
          <TableHeaderCell>Valor Atual</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expiringLeases.map((item, index) => (
          <TableRow key={`row-${index}`}>
            <TableCell>{item.code}</TableCell>
            <TableCell>
              <Text>{item.building}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.unity}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.block}</Text>
            </TableCell>
            <TableCell>
            <Text>
            {item.rooms}
            </Text>
            </TableCell>
            <TableCell>
            <Text>
            {item.tenant_name}
            </Text>
            </TableCell>
            <TableCell>
            <Text>
            {item.lease_value}
            </Text>
            </TableCell>
            <TableCell>
            <Text>
              <BadgeInfo info={item.obs} />
            </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>)
}



const mock = [
  {
    key: "sentNfs",
    lable: "Enviadas",
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
    lable: "Com Erro",
    value: 12,
    color: "red",
    table: <>error</>,
    icon: XCircleIcon
  },
]



export function NFSTables(){
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
          color={item.color}
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
      {displaySelectedTable()}
    </div>
  );
}

