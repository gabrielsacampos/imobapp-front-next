import LegalDashboard from "./dashboard/legal/page";
import { GeneralDashboard } from "./dashboard/[general]/page";
import "./globals.css";

export default function Home() {
  return (
    <>
      <GeneralDashboard />
    </>
  );
}
