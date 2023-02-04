import Image from "next/image";
import React from "react";

import ChartComponent from "./ChartComponent";
import CoinsStats from "./CoinsStats";

import GlobalStats from "./GlobalStats";
import Navbar from "./Navbar";

type Object = {};

const options: Object = {
   params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "3h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
   },
   headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
   },
};

const getCoins = async () => {
   const res = await fetch(
      "https://coinranking1.p.rapidapi.com/coins",
      options,
   );
   return res.json();
};

const page = async () => {
   const fetchedData = await getCoins();

   const {
      data: { stats, coins },
   } = fetchedData;

   console.log(fetchedData);

   return (
      <div className="flex-1 z-0 max-sm:w-full max-w-[1280px] max-[768px]:px-2 max-auto sm:pr-5">
         <div className="flex py-2 flex-col">
            <Navbar />
         </div>

         <div className="flex flex-col gap-2">
            {/* crypto status */}
            <div className="flex z-0">
               {/* @ts-expect-error Server Component */}
               <CoinsStats coins={coins} />
            </div>

            <div className="flex flex-1 items-start gap-2">
               {/* main view */}
               <div className="flex flex-col gap-2 lg:flex-[0.7] max-[768px]:flex-1">
                  {/* should I bring `Gross Chart here` here?? */}
                  <div className="white-glass p-2 h-[340px] rounded-sm">
                     {/* @ts-expect-error Server Component */}
                     <ChartComponent />
                  </div>
                  {/* @ts-expect-error Server Component */}
                  <GlobalStats stats={stats} />
               </div>

               {/* side view */}
               <div className="max-[768px]:hidden lg:flex lg:flex-[0.3] white-glassmorphism">
                  {/* view top five with button below -> to view top 50 */}
                  <div></div>
               </div>
            </div>
            <h1 className="text-[#46c87c] font-bold">Dashboard</h1>
         </div>
      </div>
   );
};

export default page;
