import Image from "next/image";
import React from "react";

const CryptStats = ({
  imgUrl,
  currAmount,
}: {
  imgUrl: string;
  currAmount: string;
}) => {
  return (
    <div className="white-glassmorphism p-2 flex mw-[150px] items-center">
      <div className="flex w-full items-center justify-between">
        <Image
          className="rounded-full w-[50px]"
          width={100}
          height={100}
          src={imgUrl}
          alt=""
        />
        <span className="font-epilogue text-[#1dc071] font-semibold text-[30px]">
          ${currAmount}
        </span>
      </div>
    </div>
  );
};

export default CryptStats;
