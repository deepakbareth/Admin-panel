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
          className={`block px-3 py-2 rounded-lg ${
            pathname === "/dashboard"
              ? "bg-zinc-800 text-white"
                : "hover:bg-zinc-800 hover:text-white"
          }`}
        >
          Dashboard
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className={`block px-3 py-2 rounded-lg ${
            pathname === "/monitors"
              ? "bg-zinc-800 text-white"
               : "hover:bg-zinc-800 hover:text-white"
          }`}
        >
          Monitors
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className={`block px-3 py-2 rounded-lg ${
            pathname === "/alerts"
              ? "bg-zinc-800 text-white"
               : "hover:bg-zinc-800 hover:text-white"
          }`}
        >
          Alerts
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className={`block px-3 py-2 rounded-lg ${
            pathname === "/reports"
              ? "bg-zinc-800 text-white"
              : "hover:bg-zinc-800 hover:text-white"
          }`}
        >
          Reports
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className={`block px-3 py-2 rounded-lg ${
            pathname === "/settings"
              ? "bg-zinc-800 text-white"
                : "hover:bg-zinc-800 hover:text-white"
          }`}
        >
          Settings
        </Link>
      </li>

    </ul>
  );
}
