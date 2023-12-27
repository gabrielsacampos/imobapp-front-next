import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_IMOBAPP_URL}`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMOBAPP_SECRET}`,
  },
});

console.log(process.env.NEXT_PUBLIC_IMOBAPP_URL)


interface ITopCards {
  invoices: {
    totalPending: number;
  }
  leases: {
    total: number;
    count:number;
    ticket: number;
    countRenew: number;
    countReadjustment: number;
  }
}

export async function fetchTopCards(): Promise<ITopCards>{
  const {data} = await api.get('/dashboard/topcards')
  return data;
}