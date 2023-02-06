"use client";

export default function Loading({ message }: { message: string }) {
   // You can add any UI inside Loading, including a Skeleton.
   return (
      <div>
         <p className="text-green-600">{message}</p>
      </div>
   );
}
