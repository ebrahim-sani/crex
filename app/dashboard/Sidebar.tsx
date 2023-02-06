"use client";

import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useState } from "react";

import { navlinks } from "../../constants";

type IconProps = {
   styles?: string;
   name?: string;
   imgUrl: string;
   isActive?: string;
   disabled?: boolean;
   handleClick?: any;
};

const Icon = ({
   styles,
   name,
   imgUrl,
   isActive,
   disabled,
   handleClick,
}: IconProps) => (
   <div
      onClick={handleClick}
      className={`${
         isActive && isActive === name && "blue-glassmorphism"
      } w-[48px] h-[48px] rounded-[10px] flex justify-center items-center ${
         !disabled && "cursor-pointer"
      } ${styles}`}
   >
      {!isActive ? (
         <img src={imgUrl} alt="icon" className="w-1/2 h-1/2" />
      ) : (
         <img
            src={imgUrl}
            alt="icon"
            className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
         />
      )}
   </div>
);

const Sidebar = () => {
   const [isActive, setIsActive] = useState<string>("dashboard");
   // const router = useRouter();

   return (
      <div className="flex fixed left-0 top-0 justify-between items-center flex-col h-[100vh] borderR pt-6">
         <Link href="/dashboard">
            <Icon
               styles="w-[52px] h-[52px] white-glassmorphism"
               imgUrl="/assets/fav.png"
            />
         </Link>

         <div className="flex-1 flex flex-col justify-around items-center w-[76px] py-2 mt-12">
            <div className="flex flex-col justify-center items-center gap-3">
               {navlinks.map((link) => (
                  <Icon
                     key={link.name}
                     {...link}
                     isActive={isActive}
                     handleClick={() => {
                        if (!link.disabled) {
                           setIsActive(link.name);
                           // router.replace(link.name);
                        }
                     }}
                  />
               ))}
            </div>
            <Icon
               styles="bg-[#1c1c24] shadow-secondary"
               imgUrl="/assets/sun.svg"
            />
         </div>
      </div>
   );
};

export default Sidebar;
