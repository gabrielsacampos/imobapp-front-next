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
import { useState } from "react";
import { TableTab } from "./TableTab";

type TableProps = {
  props: {
    title: string;
    headers: string[];
    rows: [][];
  };
  children?: JSX.Element;
};

export function Table() {
  const availableProps = availablePropsMock;
  const endingLeases = leasesToEnd;

  const tabsList = [availableProps, endingLeases];

  const [selectedTab, setSelectTab] = useState(0);

  const { title, headers, rows } = tabsList[selectedTab];


  

  return (
    <Card className="mb-3">
      <TabGroup className="mb-5">
        <TabList>
          <Tab
            icon={BuildingsIcon}
            onClick={() => setSelectTab(0)}
          >
            Imóveis Disponíveis
          </Tab>
          <Tab 
          icon={LeaseEndingIcon}
            onClick={() => setSelectTab(1)}
          >
            Contratos perto do fim (60 dias)
          </Tab>
        </TabList>
      </TabGroup>

      <Title className="text-center">{title}</Title>
      <TableTremor className="mt-5">
        <TableHead>
          <TableRow>
            {headers.map((header) => {
              return (
                <TableHeaderCell key={`header-${header}`}>
                  {header}
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={`row-${index}`}>
                {row.map((item) => (
                  <>
                    <TableCell>{item}</TableCell>
                  </>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </TableTremor>
    </Card>
  );
}
