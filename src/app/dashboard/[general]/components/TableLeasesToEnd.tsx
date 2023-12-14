"use client";

import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";

import {
  Building2 as BuildingsIcon,
  FileOutput as LeaseEndingIcon,
} from "lucide-react";
import { TabList, Tab, TabPanel, TabGroup, Flex } from "@tremor/react";
import {
  Card,
  Table as TableTremor,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

import { Loader } from "@/components/Loader";
import { api } from "@/lib/axios";
import { BadgeError } from "@/components/BadgeError";
import { useLayoutEffect, useState } from "react";

export type LeasesToEndProps = {
  code: string;
  end: string;
  value: number;
  building: string;
  unity: string;
  block: string;
};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("code", {
    header: "código",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("end", {
    header: "Encerramento",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("value", {
    header: "Valor",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("building", {
    header: "empreedimento",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("unity", {
    header: "unidade",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("block", {
    header: "Bloco/Torre",
    cell: (info) => info.getValue(),
  }),
];

export function TableLeasesToEnd() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["tables-general"],
    queryFn: () =>
      api.get("/dashboard/tabls").then((r) => {
        const { leasesToEnd } = r.data;
        return leasesToEnd;
      }),
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    const message = `Erro ao carregar dados. Por favor, contate o desenvolvedor - Error messsage: ${error.message}`;
    return <BadgeError errorMessage={message} />;
  }
  return (
    <Card>
      <TableTremor>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeaderCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHeaderCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableTremor>
    </Card>
  );
}
