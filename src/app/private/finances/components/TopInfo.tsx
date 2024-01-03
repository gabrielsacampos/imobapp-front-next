import { Card, Text } from "@tremor/react";
import { SummaryCards } from "./TopCards";
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/themes";


export function TopInfo(){
  return (
  <>
      <Callout.Root color="green" mt="2" size="1">
        <Callout.Icon>
         <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Ultimo fechamento ocorreu em: <span className="text-green-700 italic">31/12/2023</span>
        </Callout.Text>
      </Callout.Root>
  </>
  )
}