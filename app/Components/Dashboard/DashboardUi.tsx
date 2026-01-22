import DashboardCard from "./DashboardCard";
import { monitorsData } from '../Monitors/tableData'

export default function DashboardUi() {
const total = monitorsData.length;
const upCount = monitorsData.filter((item) => item.status === "Up").length;
const downCount = monitorsData.filter(  (item) => item.status === "Down").length;

  return (
    <div
      className="bg-zinc-900  mt-[-100px] md:mt-0 ml-0  p-4 md:p-6 " >
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">
        Dashboard
      </h1>

      <div className="flex flex-wrap gap-4">

        <DashboardCard title="Total Monitors" value={total} />
        <DashboardCard title="Monitors Up" value={upCount} />
        <DashboardCard title="Monitors Down" value={downCount} />
        <DashboardCard title="Average Responce Time" value={120+"ms"} />

      </div>
    </div>
  );
}
