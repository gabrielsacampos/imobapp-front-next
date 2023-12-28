import Header from "@/components/Header";
import { DashboardProvider } from "./contexts/DashboardContext";
import { GeneralDashboard } from "./dashboard/[general]/page";
import "./globals.css";

export default function Home() {
  return (
    <div>
           <Header />
            <GeneralDashboard />
    </div>
  )
}
