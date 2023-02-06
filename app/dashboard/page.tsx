import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import ChartComponent from "./ChartComponent";
import CoinsPriceHistory from "./CoinsPriceHistory";
import CoinsStats from "./CoinsStats";
import Error from "./error";

import GlobalStats from "./GlobalStats";
import Loading from "./loading";
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

   // console.log(fetchedData);

   return (
      <div className="flex-1 z-0 max-sm:w-full max-w-[1280px] max-[768px]:px-2 max-auto sm:pr-5">
         <div className="flex py-2 flex-col">
            <Navbar />
         </div>

         <Suspense fallback={<Loading message="Loading" />}>
            <div className="flex flex-col gap-2">
               <div className="overflow-x-clip xl:w-[1200px] lg:w-[900px] md:w-[760px]">
                  {/* @ts-expect-error Server Component */}
                  <CoinsStats coins={coins} />
               </div>

               <div className="flex flex-1 items-start gap-2">
                  {/* main view */}
                  <div className="flex object-contain flex-col gap-4 lg:flex-[0.7] max-[768px]:flex-1">
                     {/* <ErrorBoundary fallback={<Error />}> */}
                     {/* @ts-expect-error Server Component */}
                     <ChartComponent />

                     {/* </ErrorBoundary> */}
                     {/* @ts-expect-error Server Component */}
                     <GlobalStats stats={stats} />
                     <CoinsPriceHistory />
                  </div>

                  {/* side view */}
                  <div className="max-[768px]:hidden lg:flex lg:flex-[0.3] white-glassmorphism">
                     {/* view top five with button below -> to view top 50 */}
                     <div></div>
                  </div>
               </div>
               <h1 className="text-[#46c87c] font-bold">Dashboard</h1>
            </div>
         </Suspense>
      </div>
   );
};

export default page;
