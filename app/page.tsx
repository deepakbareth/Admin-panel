
import { DashboardUi } from "./Components/Dashboard";
import RecentMonitors from "./Components/Dashboard/RecentMonitors";
// import { DashboardUi, Monitors } from "./Components/Dashboard";
// import { DashboardUi } from "./Components/Dashboard/DashboardUi";


export default function Home() {
  return (
    <>
      <div className="bg-zinc-900 min-h-screen ml-0 mt-16 md:mt-0 p-4">
        <DashboardUi/>
          <RecentMonitors/>
      </div>

    </>
  );
}
