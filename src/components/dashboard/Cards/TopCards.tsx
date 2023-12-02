"use client";

import { HorizontalTab } from "@/components/Tabs/TabHotizontal";
import { cards } from "@/constants/TOPCARDS_ITEMS/TOPCARDS_DASH_ITEMS";
import useFetchDashboard from "../../../hooks/useFetchDashboard";

const leases = [{ value: 100 }, { value: 50 }, { value: 90 }, { value: 120 }];

interface TopCards {
  lable: string;
  desc: string;
  icon: JSX.Element;
  value: any;
}

export default function TopCards() {
  const { data } = useFetchDashboard<any>();

  //contratos ativos
  //total contratos
  // ticket medio contrato
  // renovações
  // reajustes contratos
  // inadimplencia

  return (
    <>
      <div className="  rounded-t-md  flex justify-between text-white w-36  bg-gray-900 px-2 gap-1 h-auto ">
        {<HorizontalTab lables={["Contratos", "Financeiro"]} />}
      </div>
      <div
        id="box-top-cards"
        className="grid grid-cols-3 gap-3   lg:grid-cols-6 h-auto   justify-center rounded-sm p-4 bg-gray-900 "
      >
        {cards.map((card: TopCards) => {
          return (
            <div
              key={card.lable}
              className="bg-gray-800 rounded-md  text-sm grid grid-cols-2 w-32  pl-1 items-center md:w-auto lg:w-auto  drop-shadow-2xl  "
            >
              <div className=" p-2  col-start-1 col-end-2 self-center flex w-full justify-start">
                <p className="justify-start text-xs text-indigo-500 font-bold">
                  <p>{card.lable}</p>
                  <p className="text-xs text-zinc-500 self-center">
                    {card.desc}
                  </p>
                </p>
              </div>

              <div className="inline-block row-start-2 row-end-3 m-0  ml-2  col-start-1 col-end-2 justify-center mb-2  ">
                <div className=" flex text-indigo-50 rounded-full bg-indigo-500 w-8 h-8 items-center justify-center">
                  {card.icon}
                </div>
              </div>

              <p className=" p-2 text-sm flex text-indigo-500 font-bold row-start-1 row-end-3 items-center justify-center">
                <p>{card.value}</p>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
