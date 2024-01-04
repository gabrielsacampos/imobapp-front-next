import {Loader as LoaderIcon} from "lucide-react"

export function Loader(){
	return (
		<div className="flex  items-center justify-center h-20 mx-36">
        <div className=" flex justify-between">
          <div className="animate-spin  text-indigo-500 ">
            <LoaderIcon />
          </div>
          {""}
        </div>
      </div>
	)
}