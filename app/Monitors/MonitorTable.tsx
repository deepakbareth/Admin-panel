"use client"

import { useEffect, useState } from "react";
import { monitorsData } from "./tableData";
import Image from "next/image";

export default function MonitorTable() {
    // let res = await fetch("hhptojjpfj")
    //let monitorsData=await res.json()
    let name="deepak"
    const [search, setSearch] = useState("")
    const [monitorsDatas, setmonitorDatas] = useState(monitorsData)
    const [filteredData, setFilteredData] = useState(monitorsData);

    useEffect(() => {
        const timer = setTimeout(() => {
            const result = monitorsDatas.filter((item) => {
                return (
                    item.name.toLowerCase().includes(search.toLowerCase().trim()) ||
                    item.url.toLowerCase().includes(search.toLowerCase().trim())
                );
            });
            setFilteredData(result);
        }, 500); // 500ms delay

        return () => clearTimeout(timer);
    }, [search, monitorsDatas]);

    return (
        <div className="p-4 md:p-6">

            <div className="flex flex-col gap-3 mb-3 md:flex-row md:items-center md:justify-between">

                <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Monitors
                </h2>

                <div
                    id="searchMonitor"
                    className="
      flex items-center
      w-full md:w-72
      bg-zinc-100
      border border-zinc-700
      rounded-3xl
      px-4 py-2
      focus-within:ring-1 focus-within:ring-blue-500
      focus-within:border-blue-300
    "
                >
                    <input
                     value={search}
                        type="text"
                        placeholder="Search name or url"
                        onChange={(e) => { setSearch(e.target.value) }}
                        className="
        w-full
        bg-transparent
        text-sm md:text-base
        text-black
        placeholder-zinc-400
        outline-none
      "
                    />

                    <Image
                        src="/search.png"
                        alt="Search"
                        width={18}
                        height={18}
                        className="ml-2 opacity-70"
                    />
                </div>

            </div>




            {/* ================= MOBILE VIEW ================= */}

            { }
            <div className="space-y-4 md:hidden">

                {
                    filteredData.map((itm) => (
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
                            filteredData.map((itm) => (
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
