import Image from "next/image";
import Navbar from "./Components/Header/Navbar";
import { DashboardUi } from "./Components/Dashboard";
// import { DashboardUi } from "./Components/Dashboard/DashboardUi";


export default function Home() {
  return (
    <>
     <div
  className="
    bg-zinc-900
    min-h-screen
    ml-0 
    mt-16 md:mt-0
    p-4
  "
>
  <DashboardUi />
</div>

    </>
  );
}
