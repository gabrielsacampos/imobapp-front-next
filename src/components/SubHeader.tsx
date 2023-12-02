import SelectList from "./selects/SelectList";

export default function SubHeaderDashboard() {
  return (
    <div className="pl-2 border-b border-dotted  border-gray-800 ">
      <div className="  text-3xl text-white mb-5 flex justify-between">
        <div>Dashboard</div>
          {/* <SelectList /> */}
      </div>

      <div className="  text-xs text-gray-400 opacity-40">
        Navege para uma visão geral sobre o negócio!
      </div>
    </div>
  );
}
