import React from "react";
import { FaMoneyBill } from "react-icons/fa";

const GlobalStats = () => {
   return (
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-[768px]:gap-4">
         <div className="flex items-center gap-4 px-2 py-[2px] white-glass max-[768px]:w-full max-[768px]:justify-around">
            <div className="h-[35px] w-[35px] flex items-center justify-center">
               <FaMoneyBill className="h-full w-full customClr" />
            </div>
            <div className="flex flex-col items-start">
               <p className="text-gray-300 text-sm">Total Coins</p>
               <h4 className="text-gray-400 text-lg font-semibold">
                  $3,923,920
               </h4>
            </div>
         </div>

         <div className="flex items-center gap-4 px-2 py-[2px]  white-glass white-glass max-[768px]:w-full max-[768px]:justify-around">
            <div className="h-[35px] w-[35px] flex items-center justify-center">
               <FaMoneyBill className="h-full w-full customClr" />
            </div>
            <div className="flex flex-col items-start">
               <p className="text-gray-300 text-sm">Total Exchanges</p>
               <h4 className="text-gray-400 text-lg font-semibold">
                  $3,923,920
               </h4>
            </div>
         </div>

         <div className="flex items-center gap-4 px-2 py-[2px] white-glass white-glass max-[768px]:w-full max-[768px]:justify-around">
            <div className="h-[35px] w-[35px] flex items-center justify-center">
               <FaMoneyBill className="h-full w-full customClr" />
            </div>
            <div className="flex flex-col items-start">
               <p className="text-gray-300 text-sm">Total MarketCap</p>
               <h4 className="text-gray-400 text-lg font-semibold">
                  $3,923,920
               </h4>
            </div>
         </div>
      </div>
   );
};

export default GlobalStats;
