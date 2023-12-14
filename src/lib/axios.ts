import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_IMOBAPP_URL}`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMOBAPP_SECRET}`,
  },
});