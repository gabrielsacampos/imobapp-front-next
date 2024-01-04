"use client"
import { Heading } from "@radix-ui/themes"
import { NFSTablesTabs } from "./components/NFSTablesTabs"
import { TopCards } from "./components/TopCards"
import { TopInfo } from "./components/TopInfo"
import { Title } from "@tremor/react"
import { NFSTables } from "./components/NFSTables"


export default function Page(){
    return (
        <div>
            


            <h1 className="text-4xl mt-10 font-semibold text-zinc-500 pl-2">Fechamento de mês</h1>
            <h1 className="pl-5 font-extralight">e emissão de <span className=" border-b dark:border-white/10 border-zinc-900/10">notas fiscais</span></h1>
            
        
            <TopInfo />        
            <TopCards />
            <NFSTables />
            
        </div>
    
    )
}