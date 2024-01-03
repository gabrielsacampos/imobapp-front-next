"use client";

import { BadgeError } from "@/app/private/components/BadgeError";
import { Loader } from "@/app/private/components/Loader";
import { useCharts } from "@/hooks/useDashboard";
import { ICharts, api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Card, LineChart, Title } from "@tremor/react";
import { useContext } from "react";

type chartsData = {
  buildingsRevenue: BuildingsRevenueChartProps[];
};
type BuildingsRevenueChartProps = {
  building: string;
  payment_month: string;
  total: number;
};

const valueFormatter = (number: number) => {
  if (number < 1000) {
    return number.toString();
  } else {
    return (number / 1000).toFixed(0) + "k";
  }
};

export const BuildingsRevenueChart = () => {
  const { data, error, isLoading } = useCharts();

  if (isLoading) {
    return <Loader />;
  }

  const {buildings_revenue: buildingsRevenue} = data!;
  
  const buildings = buildingsRevenue.reduce((acc, curr) => {
    acc.includes(curr.building) ? null : acc.push(curr.building);
    return acc;
  }, [] as string[]);

  const groupedData = buildingsRevenue.reduce((acc, curr) => {
    const key = curr.payment_month;
    if (acc[key]) {
      acc[key][curr.building] = curr.total
    } else {
      acc[key] = {
        month: key,
        [curr.building]: curr.total
      };
    }
    return acc;
  }, [] as any);

  const groupedValues = Object.values(groupedData);

  return (
    <Card className="my-6 w-full">
      <Title>Recebimento por Empreendimento</Title>
      <LineChart
        className="p-0 object-contain"
        data={groupedValues}
        index="month"
        categories={buildings}
        colors={[
          "slate",
          "stone",
          "red",
          "orange",
          "amber",
          "blue",
          "green",
          "teal",
          "cyan",
          "sky",
          "yellow",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
        ]}
        valueFormatter={valueFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};
