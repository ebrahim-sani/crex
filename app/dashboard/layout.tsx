import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <main className="relative sm:-8 min-h-screen flex flex-row">
         <div className="sm:flex hidden mr-10 relative z-50">
            <Sidebar />
         </div>
         <div className="flex-1 max-sm:w-full max-w-[1280px] max-auto sm:pr-5">
            {children}
         </div>
      </main>
   );
}
