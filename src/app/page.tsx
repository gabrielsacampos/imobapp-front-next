import Footer from "@/components/Footer";
import MainDashboard from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />

          <MainDashboard />
        </div>
        <Footer />
      </div>
    </>
  );
}
