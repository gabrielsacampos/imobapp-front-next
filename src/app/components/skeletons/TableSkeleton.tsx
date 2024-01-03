import { BarChart2, Table } from "lucide-react";


export function TableSkeleton(){
    return(
        <div role="status" className="flex h-[500px] w-full animate-pulse rounded-lg bg-gray-200 mx-5 items-center justify-center mt-10">
            <div className="mt-2">
                <div>
                    <Table  size={45} color="gray"/>
                </div>
            </div>
        </div>
      

    )
}
