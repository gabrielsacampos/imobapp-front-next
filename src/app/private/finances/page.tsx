"use client"
import { Heading } from "@radix-ui/themes"
import { NFSTablesTabs } from "./components/NFSTablesTabs"
import { TopCards } from "./components/TopCards"
import { TopInfo } from "./components/TopInfo"
import { Title } from "@tremor/react"
import { Tables } from "./components/Tables"


export default function Page(){
    return (
        <div>
            


            <Title className="text-xl">Fechamento de mês</Title>
            <Title className="text-xs font-extralight">e emissão de <span className=" border-b dark:border-white/10 border-zinc-900/10">notas fiscais</span></Title>
            
        
            <TopInfo />        
            <TopCards />
            <Tables />
        </div>
    
    )
}