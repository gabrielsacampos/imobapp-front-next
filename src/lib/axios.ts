import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_IMOBAPP_URL}`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMOBAPP_SECRET}`,
  },
});

interface ITopCards {
  invoices: {
    total_pending: number;
  }
  leases: {
    total: number;
    count:number;
    ticket: number;
    count_renew: number;
    count_readjustment: number;
  }
}

interface ICharts {
  buildings_revenue: {
    building: string;
    payment_month: string;
    total: number;
  }
}

interface ITables {
  expiring_leases: {
    code: string;
    building: string;
    rooms: number;
    unity: string;
    block: string;
    lease_value: number;
    obs: string;
    tenant_name: string;
    end_at: string;
  }
}

export async function fetchTopCards(): Promise<ITopCards>{
  const {data} = await api.get('/dashboard/topcards')
  return data;
}

export async function fetchCharts(): Promise<ICharts>{
  const {data} = await api.get('/dashboard/charts')
  return data;
}

export async function fetchTables(): Promise<ITables>{
  const {data} = await api.get('/dashboard/tables')
  return data;
}