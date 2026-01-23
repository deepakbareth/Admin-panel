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
        p-4 pb-10 shadow-sm
        md-pb-[10px]
        w-[45%]
        sm:w-[48%]
        lg:w-[23%]
      
  hover:shadow-[12px_5px_35px_-20px_rgba(0,0,0,15.8)]

  transition-all
  duration-300
      "
    >
      <div>
        <p className="text-xs sm:text-sm text-gray-300">{title}</p>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
          {value}
        </h2>
      </div>
    </div>
  );
}
