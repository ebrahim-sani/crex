import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import Error from "./error";

async function CoinsStats({ coins }: any) {
   // console.log(coins);

   return (
      <div className="flex object-contain items-center gap-2 animate-marquee z-0 whitespace-nowrap">
         {coins.map((coin: any) => (
            <div
               key={coin.name}
               className="flex py-[4px] px-[6px] items-center gap-1 blue-glassmorphism"
            >
               <p className="text-gray-400 text-xs">{coin.symbol}</p>

               {parseInt(coin.change) >= 0 ? (
                  <FiArrowUpRight className="text-green-700" />
               ) : (
                  <FiArrowDownRight className="text-red-700" />
               )}

               <p className="text-gray-400 text-xs">
                  {parseInt(coin.change) >= 0
                     ? "+" + parseInt(coin.change)
                     : "" + parseInt(coin.change)}
               </p>
            </div>
         ))}
      </div>
   );
}

export default CoinsStats;
