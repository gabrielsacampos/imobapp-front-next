import AllLeasesTable from "./tables/AllLeases";
import AvailablePropsTable from "./tables/AvailablePropsTable";

export default function BuildingsCard() {
  return (
    <div className="grid  gap-4 border border-red-500 mt-5 lg:grid-cols-2 md:grid-cols-2">
     
     
      <div className="gap-4">
        <div className="h-16 flex justify-between items-center bg-zinc-200 rounded-3xl px-3">
          <p>Imóveis Disponíveis</p>
          <p className="bg-green-500 rounded-full flex justify-center w-16">2</p>
        </div>
        <div className="h-72  bg-zinc-200 rounded-3xl px-3 mt-3 overflow-auto"><AvailablePropsTable /></div>
      </div>
    
      <div className="gap-4">
        <div className="h-16 flex justify-between items-center bg-zinc-200 rounded-3xl px-3">
          <p>Contratos perto do fim</p>
          <p className="bg-green-500 rounded-full flex justify-center w-16">2</p>
        </div>
        <div className="h-72  bg-zinc-200 rounded-3xl px-3 mt-3 overflow-auto"><AvailablePropsTable /></div>
      </div>
      
    
    
    
    
    
    
    
    
    
    
    
    </div>

    // <div className=" mt-5 grid grid-cols-2 grid-rows-4 h-96 gap-2 justify-between">
    //   {/* top card properties */}
    //   <div className=" items-center flex flex-row w-auto justify-between p-1 px-3 border bg-zinc-200 rounded-full h-16">
    //     <p className="flex-auto border rounded-full">Imóveis Disponíveis</p>
    //     <div className="flex-auto w-1/8 flex justify-center items-center border bg-green-600 rounded-full  text-zinc-200">
    //       <p>2</p>
    //     </div>
    //   </div>

    //   {/* Top card leases */}
    //   <div className="items-center flex flex-row w-auto justify-between p-1 px-3 border bg-zinc-200 rounded-full h-16">
    //     <p className="flex-auto border rounded-full">Contratos perto do fim </p>
    //     <p className="text-xs text-zinc-500">- 60 dias</p>
    //     <div className="flex-auto w-auto flex justify-center items-center border bg-green-600 rounded-full  text-zinc-200">
    //       <p>2</p>
    //     </div>
    //   </div>

    //   {/* list of leases */}
    //   <div className=" border overflow-y-auto flex-auto w-auto shadow-2xl rounded-3xl row-span-3  bg-zinc-200 p-1 justify-center text-xs basis-1/2">
    
    //   </div>

    //   {/* list of buildings */}
    //   <div className=" border overflow-y-auto flex-auto w-auto shadow-2xl rounded-3xl row-span-3  bg-zinc-200 p-1 justify-center text-xs basis-1/2">
    //     <AllLeasesTable />
    //   </div>
    // </div>
  );
}
