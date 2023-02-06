import { ReactNode } from "react";
import Sidebar from "./Sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <main className="sm:-8 min-h-screen flex flex-row">
         <div className="sm:flex md:flex-[0.15] hidden mr-10 relative">
            <Sidebar />
         </div>
         <div className="md:flex-[0.85] max-sm:w-full max-w-[1280px] max-auto sm:pr-5">
            {children}
         </div>
      </main>
   );
}
