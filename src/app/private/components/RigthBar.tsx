import {DatePicker} from './DatePicker'
import {Info as InfoIcon, X as XIcon} from 'lucide-react'
import { Button } from './Button';
import { Accordion } from './Accordion';





export function RigthBar() {
  return (
    <aside className="rigth-0  mt-14 bottom-0 w-96 top-0 fixed z-10  bg-gray-800 border-white/10 border drop-shadow-2xl justify-center text-zinc-400">
      <div className='text-right text-zinc-600 hover:text-zinc-200 transition-colors cursor-pointer'><XIcon size={20}/></div>
      <div className=" w-auto box-content flex flex-col mb-2">
        <span className="self-center">Apuração mensal</span>
        <span className=" text-gray-500 text-sm self-center">Selecione um período</span>
      </div>

      
      <div className=" w-full flex justify-between items-center px-10 mb-4 ">
        <DatePicker lable="início"/>
        <DatePicker lable="fim"/>
        <Button lable='Carregar' />
      </div>


      
      
    <div className='flex justify-between gap-2 ml-3'>
      <div className='text-zinc-500'><InfoIcon size={15}/></div>
      
    <div className=" text-xs flex self-justify h-full">Por padrão, os documentos emitidos para fechamento são agrupados por proprietário e tipo de locatário (PF ou PJ)</div>
    </div>

    <div className=' h-full flex flex-col items-center pt-2 border-t mx-3 mt-2 border-white/10'> 
    <div className="self-justify mb-3">Histórico de Fechamento</div>
    <div className='mx-2'>
    <Accordion />
    </div>
    </div>
      
    </aside>
  );
}
