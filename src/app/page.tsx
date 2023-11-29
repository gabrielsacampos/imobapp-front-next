import Footer from "../components/Footer";
import MainDashboard from "@/components/Dashboard/MainDashboard";
import Sidebar from "@/components/Sidebar";
import Main from "./main";


export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />

          <Main>
          <MainDashboard />
          </Main>
  


        </div>
        <Footer />
      </div>
    </>
  );
}
