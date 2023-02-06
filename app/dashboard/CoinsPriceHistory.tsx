import React, { Suspense } from "react";
import Loading from "./loading";

const periods: string[] = ["3m", "1d", "3d", "1w"];

const CoinsPriceHistory = ({ coins }: { coins: object[] }) => {
   // console.log(coins);
   return (
      <Suspense fallback={<Loading message="Loading coins..." />}>
         <div className="flex flex-1 white-glass py-1 px-2">
            <div className="flex gap-1 w-full flex-col">
               <div className="flex items-center justify-between">
                  <strong className="text-white">Price History</strong>
                  <div className="flex items-center gap-2">
                     {periods.map((period, i) => (
                        <div
                           key={i}
                           className="blue-glassmorphism cursor-pointer py-1 px-2"
                        >
                           <p className="text-gray-300 text-sm">{period}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="flex">
                  <table className="table-auto w-full">
                     <thead>
                        <tr className="text-gray-400 font-thin">
                           <th className="flex items-start">No.</th>
                           <th className="flex items-start">Coin</th>
                           <th className="flex items-start">Name</th>
                           <th className="flex items-start">Symbol</th>
                           <th className="flex items-start">Change</th>
                           <th className="flex items-start">Price</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>1</td>
                           <td>Witchy</td>
                           <td>Witchy Woman</td>
                           <td>The Eagles</td>
                           <td>1972</td>
                           <td>1972</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Witchy</td>
                           <td>Witchy Woman</td>
                           <td>The Eagles</td>
                           <td>1972</td>
                           <td>1972</td>
                        </tr>
                        <tr>
                           <td>1</td>
                           <td>Witchy</td>
                           <td>Witchy Woman</td>
                           <td>The Eagles</td>
                           <td>1972</td>
                           <td>1972</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </Suspense>
   );
};

export default CoinsPriceHistory;
