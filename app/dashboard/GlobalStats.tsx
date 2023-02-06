import React from "react";
import millify from "millify";
import { BsCurrencyExchange } from "react-icons/bs";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";

async function GlobalStats({ stats }: any) {
   return (
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-[768px]:gap-4">
         <div className="flex items-center gap-4 px-2 py-[3px] white-glass max-[768px]:w-full max-[768px]:justify-around">
            <div className="h-[55px] w-[55px] flex items-center justify-center">
               <GiTwoCoins className="h-full w-full customClr" />
            </div>
            <div className="flex flex-col items-start max-[640px]:w-[100px]">
               <p className="text-gray-300 text-sm">Total Coins</p>
               <h4 className="text-gray-400 text-[1.5em] font-semibold">
                  {millify(stats.totalCoins, { precision: 2 })}
               </h4>
            </div>
         </div>

         <div className="flex items-center gap-4 px-2 py-[3px]  white-glass white-glass max-[768px]:w-full max-[768px]:justify-around">
            <div className="h-[55px] w-[55px] flex items-center justify-center">
               <BsCurrencyExchange className="h-full w-full customClr" />
            </div>
            <div className="flex flex-col items-start">
               <p className="text-gray-300 text-sm">Total Exchanges</p>
               <h4 className="text-gray-400 text-[1.5em] font-semibold">
                  {stats.totalExchanges}
               </h4>
            </div>
         </div>

         <div className="flex items-center gap-4 px-2 py-[3px] white-glass white-glass max-[768px]:w-full max-[768px]:justify-around">
            <div className="h-[55px] w-[55px] flex items-center justify-center">
               <RiExchangeDollarFill className="h-full w-full customClr" />
            </div>
            <div className="flex flex-col items-start">
               <p className="text-gray-300 text-sm">Total MarketCap</p>
               <h4 className="text-gray-400 text-[1.5em] font-semibold">
                  {millify(parseInt(stats.totalMarketCap), { precision: 3 })}
               </h4>
            </div>
         </div>
      </div>
   );
}

export default GlobalStats;
