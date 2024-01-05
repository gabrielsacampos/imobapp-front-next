import { Theme } from "@radix-ui/themes";
import {Divider} from 'antd'
import Image from "next/image";
import nestjs from "../../../../../public/nestjs.svg"
import nextjs from '../../../../../public/nextjs.svg'
import * as AvatarGroups from './AvatarGroups'



export function NavSideBar(){
    return(
        <Theme>
        <aside className=" text-zinc-400 bg-zinc-50 w-64 bottom-0 top-16 border-r border-black/10 fixed">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col h-full gap-3 pl-5 mt-12 ">
                    <nav>
                        <h1 className="pl-2 font-bold">Overview</h1>
                    </nav>

                    <nav>
                        <h1 className="pl-2 font-bold">Infra</h1>
                        <ul className="pl-5">

                            <li className="hover:border-l hover:border-blue-400 hover:text-blue-400 border-l border-zinc-400 pl-3 hover:cursor-pointer">
                                <div className="flex gap-2 items-center">
                                    Backend
                                    <Image src={nestjs} alt="nest-logo" width={15}/>
                                </div>
                            </li>
                            
                            <li className="hover:border-l hover:border-blue-400 hover:text-blue-400 border-l border-zinc-400 pl-3 hover:cursor-pointer">
                            <div className="flex gap-2 items-center">
                                    Frontend
                                    <Image src={nextjs} alt="nest-logo" width={15}/>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <h1 className="pl-2 font-bold">Components</h1>
                    </nav>
                </div>
                <Divider />
                <div className="h-60 pl-5">
                    <div className="flex gap-3 items-center">
                        <h1 className=" font-bold">UI/UX Design </h1>
                        <div className="flex">
                            <AvatarGroups.UXGroup />
                        </div>
                    </div>
                    <ul className="pl-5">
                            <li className="hover:border-l hover:border-blue-400 hover:text-blue-400 border-l border-zinc-400 pl-3 hover:cursor-pointer">Concepts</li>
                            <li className="hover:border-l hover:border-blue-400 hover:text-blue-400 border-l border-zinc-400 pl-3 hover:cursor-pointer">Diagram</li>
                        </ul>
                </div>
            </div>

        </aside>
        </Theme>
)
}