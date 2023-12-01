import Footer from "../components/Footer";
import MainDashboard from "@/components/Dashboard/MainDashboard";
import Sidebar from "@/components/Sidebar";
import Main from "./main";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="h-screen grid grid-col-2">
        <div className="col-span-3">
          <Header />
        </div>

        <div>
          <Sidebar />
        </div>

        <div>
          <Main>
            <MainDashboard />
          </Main>
        </div>
      </div>
    </>
  );
}
