"use client";

import * as leasesToEnd from "../mocks/leasesToEnd.mock";
import * as availablePropsMock from "../mocks/availableProps.mock";

import {
  Building2 as BuildingsIcon,
  FileOutput as LeaseEndingIcon,
} from "lucide-react";
import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";
import {
  Badge,
  Card,
  Table as TableTremor,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import { useContext, useState } from "react";
import { TableTab } from "./TableTab";
import { DashboardContext } from "@/app/contexts/DashboardContext";
import { Loader } from "@/components/Loader";

export function Table() {
  const data = useContext(DashboardContext);
  const [selectedTab, setSelectTab] = useState(0);

  if (!data.tables) {
    return (
      <div className="mt-10">
        <Loader />
      </div>
    );
  }

  const { availableProperties, leasesToEnd } = data.tables;
  const tabsList = [availableProperties, leasesToEnd];
  const { title, headers, rows } = tabsList[selectedTab];

  function handleSelectedTab(event: React.MouseEvent<HTMLButtonElement>) {
    setSelectTab(Number(event.currentTarget.value));
  }

  console.log();

  return (
    <>
      <Card className="mb-3">
        <TabGroup className="mb-5">
          <TabList>
            <Tab value={0} icon={BuildingsIcon} onClick={handleSelectedTab}>
              Imóveis Disponíveis
            </Tab>
            <Tab value={1} icon={LeaseEndingIcon} onClick={handleSelectedTab}>
              Contratos perto do fim (60 dias)
            </Tab>
          </TabList>
        </TabGroup>

        <Title className="text-center">{title}</Title>
        <TableTremor className="mt-5">
          <TableHead>
            {headers.map((header) => {
              return (
                <TableRow key={`row-header`}>
                  <TableHeaderCell key={`header-${header}`}>
                    {header}
                  </TableHeaderCell>
                </TableRow>
              );
            })}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>item</TableCell>
            </TableRow>
          </TableBody>
        </TableTremor>
      </Card>
    </>
  );
}
