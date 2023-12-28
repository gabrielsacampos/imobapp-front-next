import { Text } from "@tremor/react";
import { NFSCards } from "./NFSCards";
import { NFSTables } from "./NFSTables";

export function NFSBody(){
    return (
        <>
            <Text className="mt-5 border-b border-gray-600/10 text-center text-xl">Notas Fiscais</Text>
            {/* <NFSCards /> */}
            <NFSTables />
        </>

    )
}
