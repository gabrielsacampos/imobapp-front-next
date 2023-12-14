"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}



export function RigthBar() {
  return (
    <aside className="rigth-0  mt-14 bottom-0 absolute w-72 top-0  z-10  bg-gray-800 border-white/10 border drop-shadow-2xl justify-center text-zinc-400">
      <div className=" w-auto box-content border mt-3 flex justify-center">
        <span>Apuração mensal</span>
      </div>
      <div className="border w-full flex justify-between">
	  <DatePickerDemo />
      </div>
    </aside>
  );
}
