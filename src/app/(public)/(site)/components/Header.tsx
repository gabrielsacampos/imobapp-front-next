
import { GitHubLogoIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { Badge, Theme } from '@radix-ui/themes'

export function Header(){
    return(
        <Theme>
        <header className="left-0 right-0 top-0 flex h-16 justify-center">
            <div className='flex justify-between w-full  pt-2 max-w-7xl'>
                <div className="flex gap-3 items-center">
                
                    <div className='ml-5 flex-col items-center'>
                    <div className="text-lg font-extrabold tracking-tighter text-blue-400">IMOBAPP</div>
                    <div className="ml-2 text-xs text-blue-400 ">⚡️ by Nebulafy</div>
                    </div>
                </div>  
    
            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-tighter text-blue-300  hover:border-blue-500/30 hover:border-b  transition-all hover:cursor-pointer">DOCUMENTATION</span>
                    <div className="mr-5 py-1 px-4 rounded-full border  hover:bg-black bg-blue-700  text-white flex items-center justify-center gap-2 hover:cursor-pointer transition-colors">
                        <span className='text-xs font-semibold'>source</span><GitHubLogoIcon />
                    </div>
            </div>
        </div>
    </header>
            </Theme>
    )
    }