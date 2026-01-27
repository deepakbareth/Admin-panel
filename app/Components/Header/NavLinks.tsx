"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col text-zinc-200  font-['Gill_Sans',sans-serif]">

      <li>
        <Link
          href="/"
          className={`block px-3 py-2 rounded-lg ${pathname === "/"
            ? "bg-zinc-800 text-blue-500"
            : "hover:bg-zinc-800 hover:text-white transition-all duration-300"
            }`}
        >
          Dashboard
        </Link>
      </li>


      <li>
        <Link
          href="/Monitors"
          className={`block px-3 py-2 rounded-lg ${pathname === "/Monitors"
            ? "bg-zinc-800 text-blue-500"
            : "hover:bg-zinc-800 hover:text-white transition-all duration-300"
            }`}
        >
          Monitors
        </Link>
      </li>


      <li>
        <Link
          href="/alerts"
          className={`block px-3 py-2 rounded-lg ${pathname === "/alerts"
            ? "bg-zinc-800 text-blue-500"
            : "hover:bg-zinc-800 hover:text-white transition-all duration-300"
            }`}
        >
          Alerts
        </Link>
      </li>


      <li>
        <Link
          href="/reports"
          className={`block px-3 py-2 rounded-lg ${pathname === "/reports"
            ? "bg-zinc-800 text-blue-500"
            : "hover:bg-zinc-800 hover:text-white transition-all duration-300"
            }`}
        >
          Reports
        </Link>
      </li>


      <li>
        <Link
          href="/settings"
          className={`block px-3 py-2 rounded-lg ${pathname === "/settings"
              ? "bg-zinc-800 text-blue-500"
              : "hover:bg-zinc-800 hover:text-white transition-all duration-300"
            }`}
        >
          Settings
        </Link>
      </li>


    </ul>
  );
}
