"use client";

import { useEffect } from "react";

export default function Error({ message }: { message: string }) {
   // useEffect(() => {
   //    // Log the error to an error reporting service
   //    console.error(error);
   // }, [error]);

   return (
      <div className="flex items-center justify-center w-full h-full">
         <h2>{message}</h2>
         {/* <button
            onClick={
               // Attempt to recover by trying to re-render the segment
               () => reset()
            }
         >
            Try again
         </button> */}
      </div>
   );
}
