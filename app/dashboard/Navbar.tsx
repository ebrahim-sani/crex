/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { navlinks } from "../../constants";
import CustomButton from "../../constants/CustomButton";

const Navbar = () => {
   const [isActive, setIsActive] = useState<string>("dashboard");
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);
   // const router = useRouter();
   if (window.innerWidth >= 900) {
      toggleMenu === true && setToggleMenu(false);
   }

   return (
      <div className="flex md:flex-row justify-between gap-6">
         <div className="max-[640px]:hidden lg:flex-1 flex flex-row max-w-[300px] rounded-[100px] py-2 pl-4 pr-2 h-[42px] customBorder">
            {" "}
            {/* bg-[#1c1c24] */}
            <input
               type="text"
               placeholder="Search for everything"
               className="placeholder:text-[#4b5264] flex w-full font-epilogue font-normal text-[14px] text-white bg-transparent outline-none"
            />
            <div className="w-[72px] h-full rounded-[20px] blue-glassmorphism flex justify-center items-center cursor-pointer">
               {" "}
               {/* bg-[#4acd8d] */}
               <img
                  src="/assets/search.svg"
                  alt="search"
                  className="w-[15px] h-[15px] object-contain"
               />
            </div>
         </div>

         <div className="sm:flex hidden flex-row justify-between gap-4">
            <CustomButton
               styles="customBg p-[4px]"
               btnType="button"
               title="Connect Wallet"
               handleClick=""
            />

            <Link href="/profile">
               <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
                  <img
                     src="/pr.png"
                     className="w-[80%] rounded-full h-[80%] object-contain"
                     alt=""
                  />
               </div>
            </Link>
         </div>

         {/* For Mobile Screen */}
         <div className="sm:hidden flex flex-1 justify-between items-center relative">
            <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
               <img
                  src="/assets/c.png"
                  className="w-[70%] h-[70%] object-contain rounded-[8px]"
                  alt=""
               />
            </div>

            <div>
               <img
                  src="/assets/menu.svg"
                  alt="menu"
                  className="w-[34px] h-[34px] object-contain cursor-pointer"
                  onClick={() => setToggleMenu((prev) => !prev)}
               />
            </div>
         </div>

         <div
            className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary mx-4 py-4 ${
               !toggleMenu ? "-translate-y-[100vh]" : "translate-y-0"
            } transition-all duration-700`}
         >
            <ul className="mb-4">
               {navlinks.map((link) => (
                  <li
                     onClick={() => {
                        setIsActive(link.name);
                        setToggleMenu(false);
                        // router.replace(link.link);
                     }}
                     key={link.name}
                     className={`flex p-4 ${
                        isActive === link.name && "bg-[#3a3a43]"
                     } cursor-pointer`}
                  >
                     <img
                        src={link.imgUrl}
                        alt={link.name}
                        className={`w-[24px] h-[24px] object-contain ${
                           isActive === link.name ? "grayscale-0" : "grayscale"
                        }`}
                     />
                     <p
                        className={`ml-[20px] font-epilogue font-semibold text-[14px] uppercase ${
                           isActive === link.name
                              ? "text-[#1dc071]"
                              : "text-[#808191]"
                        }`}
                     >
                        {link.name}
                     </p>
                  </li>
               ))}
            </ul>

            <div className="flex mx-4">
               <CustomButton
                  styles="customBg p-[8px]" //"bg-[#8c6dfd]"
                  btnType="button"
                  title="Connect Wallet"
                  // handleClick={() => }
               />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
