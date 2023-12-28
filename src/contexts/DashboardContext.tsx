"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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

// export const DashboardContext = createContext({} as DashboardContextType);

// export function DashboardProvider({ children }: DashboardProviderProps) {
//   const [isLoading, setLoading] = useState(true);
//   const [dashboardData, setDashboardData] = useState<DashboardDataProps>(
//     {} as DashboardDataProps
//   );

//   useEffect(() => {
//     api
//       .get("/dashboard")
//       .then((response) => {
//         setDashboardData(response.data);
//         setLoading(false);

//         console.log("executou useEffect");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [isLoading]);

//   console.log(dashboardData);

//   return (
//     <DashboardContext.Provider value={dashboardData}>
//       {children}
//     </DashboardContext.Provider>
//   );
// }
