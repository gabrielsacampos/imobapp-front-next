"use client"
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button, Theme } from '@radix-ui/themes'
import {EnvelopeClosedIcon} from '@radix-ui/react-icons'
import { NavSideBar } from './NavSideBar'


export function Header(){
    return(
        <div>
        <header className="left-0 right-0 top-0 h-16 fixed border-b border-black/10 items-center bg-zinc-50">
            <div className='flex justify-between mt-2 mx-2 items-center'>
            <div className='ml-5 flex-col items-center'>
                    <div className="text-lg font-extrabold tracking-tighter text-blue-400">IMOBAPP</div>
                    <div className="ml-2 text-xs text-blue-400 ">⚡️ by Nebulafy</div>
            </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold tracking-tighter text-blue-300  hover:border-blue-500/30 hover:border-b  transition-all hover:cursor-pointer hidden md:block">APPLICATION</span>
                    <span className="text-sm font-semibold tracking-tighter text-blue-300  hover:border-blue-500/30 hover:border-b  transition-all hover:cursor-pointer md:hidden">APP</span>
                    <button className="mr-5 py-1 px-4 rounded-full border  hover:bg-black bg-blue-700  text-white flex items-center justify-center gap-2 hover:cursor-pointer transition-colors">
                        <span className='text-xs font-semibold'>source</span><GitHubLogoIcon />
                    </button>
                </div>
            </div>
        </header>
        <NavSideBar />
        </div>
        
    )
    }