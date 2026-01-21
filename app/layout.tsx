import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Header/Navbar";
import SimpleBarChart from "./Components/char";
import { AddMonitor } from "./Components/addMonitor";

export const metadata: Metadata = {
  title: "Admin panel",
  description: "My Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-['Gill_Sans',sans-serif]">
       
        <div className=" flex flex-col md:flex-row  flex-wrap">
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <main className="flex-1 pt-16 md:pt-0">
            {children}
          </main>

        </div>
          <SimpleBarChart/>
          <AddMonitor/>
      </body>
    </html>
  );
}
