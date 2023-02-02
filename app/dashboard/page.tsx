import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import GlobalStats from "./GlobalStats";

import Navbar from "./Navbar";

const page = () => {
   return (
      <div className="flex-1 max-sm:w-full max-w-[1280px] max-[768px]:px-2 max-auto sm:pr-5">
         <div className="flex py-2 flex-col">
            <Navbar />
         </div>

         <div className="flex flex-col gap-2">
            {/* crypto status */}
            <div className="flex items-center gap-2 overflow-hidden">
               <div className="flex py-[4px] px-[6px] items-center gap-1 blue-glassmorphism">
                  <p className="text-gray-400 text-xs">USD</p>
                  <FiArrowUpRight className="text-green-700" />
                  {/* <FiArrowDownRight className="text-red-700" /> */}
                  <p className="text-gray-400 text-xs">+35%</p>
               </div>
            </div>

            <div className="flex flex-1 items-start gap-2">
               {/* main view */}
               <div className="flex lg:flex-[0.7] max-[768px]:flex-1">
                  {/* should I bring `Gross Chart here` here?? */}
                  <div></div>

                  <GlobalStats />
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
