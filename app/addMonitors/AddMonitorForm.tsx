"use client";

import { useState } from "react";

export default function AddMonitorForm() {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        interval: "5",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault(); 
       setFormData({name: "",url: "",interval: "5",})
        console.log("Monitor Data:", formData);
    };

    return (
        <div className="flex justify-center items-center h-full  mt-[-15px] w-[100%]">
            <div className="w-[70%] border-1 border-gray-500 bg-zinc-900 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-white mb-6">
                    Add New Monitor
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Friendly Name */}
                    <div>
                        <label className="text-sm text-gray-400">Friendly Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="e.g. Main Website"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* URL */}
                    <div>
                        <label className="text-sm text-gray-400">URL</label>
                        <input
                            type="url"
                            name="url"
                            placeholder="https://example.com"
                            value={formData.url}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Check Interval */}
                    <div>
                        <label className="text-sm text-gray-400">
                            Check Interval (minutes)
                        </label>
                        <select
                            name="interval"
                            value={formData.interval}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="1">1 min</option>
                            <option value="5">5 min</option>
                            <option value="10">10 min</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 transition rounded-lg py-2 text-white font-semibold"
                    >
                        Add Monitor
                    </button>
                </form>
            </div>
        </div>
    );
}
