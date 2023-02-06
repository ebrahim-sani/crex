import React, { Suspense } from "react";
import Loading from "./loading";

const periods: string[] = ["3m", "1d", "3d", "1w"];

const CoinsPriceHistory = () => {
   return (
      <Suspense fallback={<Loading message="Loading coins..." />}>
         <div className="flex flex-1 white-glass py-1 px-2">
            <div className="flex w-full flex-col">
               <div className="flex items-center justify-between">
                  <strong className="text-white">Price History</strong>
                  <div className="flex items-center gap-2">
                     {periods.map((period, i) => (
                        <div key={i} className="blue-glassmorphism py-1 px-2">
                           <p className="text-gray-500 text-sm">{period}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Suspense>
   );
};

export default CoinsPriceHistory;
