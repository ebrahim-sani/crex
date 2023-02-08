import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./loading";

const periods: string[] = ["3m", "1d", "3d", "1w"];

const CoinsPriceHistory = ({ coins }: { coins: any }) => {
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

               <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                     <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                           <th scope="col" className="px-6 py-3 text-gray-400">
                              No.
                           </th>
                           <th scope="col" className="px-6 py-3 text-gray-400">
                              Coin
                           </th>
                           <th scope="col" className="px-6 py-3 text-gray-400">
                              Name
                           </th>
                           <th scope="col" className="px-6 py-3 text-gray-400">
                              Symbol
                           </th>
                           <th scope="col" className="px-6 py-3 text-gray-400">
                              Change
                           </th>
                           <th scope="col" className="px-6 py-3 text-gray-400">
                              Price
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {coins.slice(0, 5).map((coin: any, i: number) => (
                           <tr key={i} className="border-b border-gray-800">
                              <th
                                 scope="row"
                                 className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap"
                              >
                                 {coin.rank}
                              </th>
                              <td className="px-6 py-4">
                                 <div className="">
                                    <img
                                       src={coin.iconUrl}
                                       width={30}
                                       height={30}
                                       alt="icon"
                                    />
                                 </div>
                              </td>
                              <td className="px-6 py-4">{coin.name}</td>
                              <td className="px-6 py-4">{coin.symbol}</td>
                              <td className="px-6 py-4">{coin.change}</td>
                              <td className="px-6 py-4">{coin.price}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <Link href="/dashboard/coins-price">
                  <p className="p-2 customBg flex justify-center text-white rounded-lg shadow-sm hover:shadow-lg">
                     View All
                  </p>
               </Link>
            </div>
         </div>
      </Suspense>
   );
};

export default CoinsPriceHistory;
