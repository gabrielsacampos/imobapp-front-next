'use client'
import { InfoCircledIcon, TokensIcon } from "@radix-ui/react-icons";
import { Theme, Button, Callout, Heading } from "@radix-ui/themes";
import { LogInIcon } from "lucide-react";


export function Intro(){
    return( 
    <section className="h-[500px] justify-between items-center gap-12 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 flex-col ">
        
        <div className="flex justify-center">
        <Callout.Root>
                        <Callout.Icon>
                            <InfoCircledIcon color="white"/>
                        </Callout.Icon>
                        <Callout.Text className="text-white">
                                Este é um software <span className="text-blue-600">beta</span> e de código aberto
                                
                        </Callout.Text>
                    </Callout.Root>
                
        </div>
            
                
    <div className="flex flex-col items-center h-full">
                    
                    <div className="h-1/2 flex items-end mx-5 justify-center">
                        <h1 className="tracking-tighter text-white font-extralight text-4xl">Gerencie imóveis com <span className="text-blue-900/50 font-extrabold">IMOBAPP</span></h1>
                    </div>
                    
                
                <div className="flex max-w-5xl items-center gap-8 h-full">
                
                    <div className="w-1/2 flex justify-end">
                        <Theme>
                        <div className='flex flex-col gap-2 max-w-[120px]'>
                            <Button variant='soft' className='hover:bg-white'>Log In <LogInIcon size={15}/></Button>
                            <Button>Playground <TokensIcon /> </Button>
                            
                        </div>
                        </Theme>
                    </div>
        
                    <div className="flex w-1/2 flex-col">
                        <ul className="text-4xl tracking-tighter">
                            <li className="font-bold text-white">é simples,</li>
                            <li className="font-bold text-white">eficiente</li>
                            <li className="font-bold text-white">e intuitivo.</li>
                            
                        </ul>
                        <div className="mt-2 h-2 w-40 rounded-full bg-white/10"></div>
                    </div>
                </div>
     </div>
                    
        
    </section>
    )
}