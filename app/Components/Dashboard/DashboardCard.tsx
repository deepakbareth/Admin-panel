type StatsCardProps = {
  title: string;
  value: string | number;
};

export default function DashboardCard({ title, value }: StatsCardProps) {
  return (
    <div
      className="
        flex items-center justify-between
        bg-zinc-800
        rounded-xl
        p-4 shadow-sm
        w-full
        sm:w-[48%]
        lg:w-[23%]
      "
    >
      <div>
        <p className="text-xs sm:text-sm text-gray-200">{title}</p>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
          {value}
        </h2>
      </div>
    </div>
  );
}
