"use client";
import React from "react";

type BtnProps = {
   title: string;
   btnType: any;
   styles: string;
   handleClick?: any;
};

const CustomButton = ({ title, btnType, styles, handleClick }: BtnProps) => {
   return (
      <button
         type={btnType}
         onClick={handleClick}
         className={`${styles} font-epilogue font-semibold text-[16px] customBorder text-white min-h-[12px] px-[20px] rounded-[10px]`}
      >
         {title}
      </button>
   );
};

export default CustomButton;
