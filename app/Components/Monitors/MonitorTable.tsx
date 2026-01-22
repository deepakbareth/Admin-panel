import { monitorsData } from "./tableData";

export default function MonitorTable() {
// let res = await fetch("hhptojjpfj")
//let monitorsData=await res.json()


    console.log(monitorsData)
    return (
        <div className="p-4 md:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Monitors
            </h2>

            {/* ================= MOBILE VIEW ================= */}

            { }
            <div className="space-y-4 md:hidden">

                {
                    monitorsData.map((itm) => (
                        <div key={itm.id} className="bg-zinc-800 rounded-lg p-4 text-white">
                            <p className="text-sm text-gray-400">Friendly Name</p>
                            <p className="font-medium">{itm.name}</p>

                            <p className="text-sm text-gray-400 mt-2">URL</p>
                            <p className="break-all text-blue-400  ">{itm.url}          </p>

                            <div className="flex justify-between mt-3">
                                <div>
                                    <p className="text-sm text-gray-40">State</p>
                                    <span className={`text-green-400 font-semibold ${itm.status === "Up" ? "text-green-400" : "text-red-400"}`}>{itm.status}</span>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">Uptime</p>
                                    <span className="font-semibold">{itm.uptime}</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mt-3">Last Checked</p>
                            <p>{itm.lastChecked}</p>
                        </div>
                    ))
                }
            </div>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden">
                    <thead className="bg-zinc-700 text-gray-200">
                        <tr>
                            <th className="p-3 text-left">Friendly Name</th>
                            <th className="p-3 text-left">URL</th>
                            <th className="p-3 text-left">State</th>
                            <th className="p-3 text-left">Uptime %</th>
                            <th className="p-3 text-left">Last Checked</th>
                        </tr>
                    </thead>

                    <tbody className="bg-zinc-800 text-gray-300">
                        {
                            monitorsData.map((itm) => (
                                <tr key={itm.id} className="border-t border-zinc-700 hover:bg-zinc-700 transition">
                                    <td className="p-3">{itm.name}</td>
                                    <td className="p-3 text-blue-400 hover:text-blue-300  cursor-not-allowed">
                                        {itm.url}
                                    </td>
                                    <td className={`p-3 font-semibold ${itm.status === "Up" ? "text-green-400" : "text-red-400"}`}>
                                        {itm.status}
                                    </td>
                                    <td className="p-3">{itm.uptime}</td>
                                    <td className="p-3">{itm.lastChecked}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}
