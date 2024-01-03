import { Loader } from "@/app/private/components/Loader";
import { useTables } from "@/hooks/useDashboard";
import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";
import { Building2 as BuildingsIcon, FileOutput as LeaseEndingIcon } from "lucide-react";
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

export function DashboardTables(){
  const [selectedTableTab, setSelectedTableTab] = useState(
    "availableProperties"
  );

  function handleTabClick(tableRef: string) {
    setSelectedTableTab(tableRef);
  }

  function setCurrentTable() {
    switch (selectedTableTab) {
      case "availableProperties":
        return <TableAvailableProperties />;
      case "leasesToEnd":
        return <TableExpiringLeases />;
    }
  }

  return (
    <div className="items-center justify-center">
      <TabGroup className="ml-1">
        <TabList>
          <Tab
            icon={BuildingsIcon}
            onClick={() => handleTabClick("availableProperties")}
          >
            Imóveis Disponíveis
          </Tab>
          <Tab 
            icon={LeaseEndingIcon}
            onClick={() => handleTabClick("leasesToEnd")}
          >
            Contratos perto do fim (60 dias)
          </Tab>
        </TabList>
      </TabGroup>
      {setCurrentTable()}
    </div>
  );
}