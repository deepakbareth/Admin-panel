"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
   const pathname = usePathname();
  const [open, setOpen] = useState(false);


  return (
    <header
      className="
         top-0 left-0 z-50
        w-full bg-zinc-900
        md:static  md:h-screen md:w-64
        font-['Gill_Sans',sans-serif]
      "
    >
      
      {/* TOP BAR (Mobile) */}

      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <h3 className="text-lg font-semibold text-white">SitePulse</h3>

        {/* Burger Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* SIDEBAR / MENU */}

  <aside
  className={`
    bg-zinc-900
    w-full md:w-64

    /* Mobile */
    ${open ? "block" : "hidden"}
    static

    /* Desktop */
    md:fixed md:top-0 md:left-0 md:h-screen
    md:flex

    flex-col justify-between
    px-6 py-5
  `}
>

        {/* TOP SECTION */}
        <div>
          {/* Desktop Logo */}
          <h3 className="mb-2 hidden text-xl  text-white md:block">
            SitePulse
          </h3>

          {/* Navigation */}
          <nav>

            <NavLinks/>
          
          </nav>
        </div>

        {/* ADD BUTTON (Desktop ONLY) */}
        
       <li>
  <Link
    href="/addMonitors"
    className={`mt-8 inline-block w-full text-center rounded-lg px-3 py-2 font-bold transition-all duration-300
      ${
        pathname === "/addMonitors"
          ? "bg-zinc-800 text-blue-500"
          : "bg-blue-600 text-white hover:bg-blue-400"
      }
    `}
  >
    Add Monitor
  </Link>
</li>

      </aside>
    </header>
  );
}
