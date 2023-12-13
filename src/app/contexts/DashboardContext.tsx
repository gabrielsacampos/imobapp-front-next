"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

import axios from "axios";

const dashboard = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_IMOBAPP_URL}/dashboard`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMOBAPP_SECRET}`,
  },
});

interface DashboardContextType extends DashboardDataProps {}

interface DashboardProviderProps {
  children: ReactNode;
}

export interface DashboardDataProps {
  topcards: TopCardsProps;
  charts: ChartsDataProps;
  tables: TableProps;
}

export type TableProps = {
  availableProperties: {
    title: string;
    headers: string[];
    rows: string[];
  };
  leasesToEnd: {
    title: string;
    headers: string[];
    rows: string[][];
  };
};

export type TopCardsProps = {
  leases: {
    activeCount: number;
    totalValue: number;
    ticket: number;
    renewsCount: number;
    readjustmentCount: number;
  };
  invoices: {
    totalPending: string;
  };
};

export type ChartsDataProps = {
  buildingsRevenueData: {
    groupedToChart: any[];
    buildings: any[];
  };
};

export const DashboardContext = createContext({} as DashboardContextType);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardDataProps>(
    {} as DashboardDataProps
  );

  useEffect(() => {
    dashboard
      .get("")
      .then((response) => {
        setDashboardData(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isLoading]);

  return (
    <DashboardContext.Provider value={dashboardData}>
      {children}
    </DashboardContext.Provider>
  );
}
