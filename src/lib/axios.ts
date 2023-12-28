import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_IMOBAPP_URL}`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMOBAPP_SECRET}`,
  },
});

export interface ITopCards {
  invoices: {
    total_pending: number;
  }
  leases: {
    total: number;
    count:number;
    ticket: number;
    count_renew: number;
    count_readjustment: number;
  }[]
}

export interface ICharts {
  buildings_revenue: {
    building: string;
    payment_month: string;
    total: number;
  }[]
}

export interface ITables {
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
  }[]
  available_properties: {
    building: string;
    unity: string;
    block: string;
    rooms: number;
    rental_value: number;
  }[]

}

class ApiClient {
  getTopCards(): Promise<ITopCards>{
    return api.get('/dashboard/topcards').then((res) => res.data)
    
  }
  
  getCharts(): Promise<ICharts>{
    return api.get('/dashboard/charts').then((res) => res.data)
    
  }
  
  getTables(): Promise<ITables>{
    return api.get('/dashboard/tables').then((res) => res.data)
  }  
}

export const apiClient = new ApiClient()

