"use client";

import React, { useState } from "react";
import NavLinks from "./NavLinks";

export default function Navbar() {
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
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* SIDEBAR / MENU */}


      <aside
        className={`
          ${open ? "block" : "hidden"}
          md:flex
          ml-8
          flex-col
          justify-between
          px-6 py-5
          md:h-full
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
        <button className="mt-8 p-3 rounded-lg bg-blue-600 py-2 text-white cursor-pointer font-bold hover:bg-blue-400 md:block">
          Add Monitor
        </button>
      </aside>
    </header>
  );
}
