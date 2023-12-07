import AllLeasesTable from "./AllLeases";
import AvailablePropsTable from "./TableAvailableProps";

export default function BuildingsCard() {
  return (
    <div className="grid  gap-4  mt-5 lg:grid-cols-2 md:grid-cols-1 ">
      <div className=" px-3 bg-gray-800">
        <div className="h-16 items-center    text-indigo-500 p-2 flex justify-between">
          Imóveis Disponíveis
          <div className="bg-green-300 rounded-full flex justify-center w-16 font-bold">
          2
        </div>
        </div>
        
        <div className="h-72  bg-gray-800   text-indigo-500  overflow-auto">
          <AvailablePropsTable />
        </div>
      </div>

      <div className=" px-3 bg-gray-800">
        <div className="h-16 items-center    text-indigo-500 p-2 flex justify-between">
          Imóveis Disponíveis
          <div className="bg-green-300 rounded-full flex justify-center w-16 font-bold">
          2
        </div>
        </div>
        
        <div className="h-72  bg-gray-800   text-indigo-500  overflow-auto">
          <AvailablePropsTable />
        </div>
      </div>
    </div>
  );
}
