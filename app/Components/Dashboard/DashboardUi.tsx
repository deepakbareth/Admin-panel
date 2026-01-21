import DashboardCard from "./DashboardCard";

export default function DashboardUi() {
  return (
    <div
      className="
        bg-zinc-900
        min-h-screen
        mt-[-100px]
        md:mt-0
        ml-0 
        p-4 md:p-6
      "
    >
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">
        Dashboard
      </h1>

      <div className="flex flex-wrap gap-4">
        <DashboardCard title="Total Monitors" value={25} />
        <DashboardCard title="Active Monitors" value={18} />
        <DashboardCard title="Alerts" value={5} />
        <DashboardCard title="Reports" value={12} />
      </div>
    </div>
  );
}
