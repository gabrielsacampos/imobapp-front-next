
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button, Theme } from '@radix-ui/themes'
import {EnvelopeClosedIcon} from '@radix-ui/react-icons'

export function Header(){
    return(
        <Theme>
        <header className="left-64 right-0 top-0 h-12 fixed border-b border-black/10 items-center bg-white">
            <div className='flex justify-between mt-2 mx-2'>
                <Button className='text-xs' variant='soft'>CONTACT US <EnvelopeClosedIcon /></Button>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold tracking-tighter text-blue-300  hover:border-blue-500/30 hover:border-b  transition-all hover:cursor-pointer">APPLICATION</span>
                    <button className="mr-5 py-1 px-4 rounded-full border  hover:bg-black bg-blue-700  text-white flex items-center justify-center gap-2 hover:cursor-pointer transition-colors">
                        <span className='text-xs font-semibold'>source</span><GitHubLogoIcon />
                    </button>
                </div>
            </div>
    </header>
            </Theme>
    )
    }