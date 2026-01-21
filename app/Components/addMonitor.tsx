import React from "react";

export const AddMonitor = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#111815] overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-[#273a32] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold tracking-[-0.015em]">
              SitePulse
            </h2>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium" href="#">
                Dashboard
              </a>
              <a className="text-white text-sm font-medium" href="#">
                Monitors
              </a>
              <a className="text-white text-sm font-medium" href="#">
                Alerts
              </a>
              <a className="text-white text-sm font-medium" href="#">
                Reports
              </a>
              <a className="text-white text-sm font-medium" href="#">
                Settings
              </a>
            </div>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIAX63f4AMlGtg5RDTWFXOkiY0u5AZRS-gCHyTqykXg5ypjan4wMnqLFDHIoANBO9DWHID5JeUFAzZ1985F9uIWpyF_Lb3vGfEOcRWzvx-ttAOTjzLPq1F6869k36Gai9IdFgSMcdhE0M1RT9eADyoHBgw96j9_Oq7bK6MlrHE25IJ4OHgyK3NzurTEQIga6kYC8zJp1lcJ_k5RzK0LzihcOdaILyPuSCZ112M0lVPkhd08dKRPpacvZt11tWdrnMObmWTmVmV7Q")',
              }}
            />
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <h2 className="text-white text-[28px] font-bold px-4 pb-3 pt-5">
              Add New Monitor
            </h2>

            {/* Friendly Name */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium pb-2">
                  Friendly Name
                </p>
                <input
                  placeholder="e.g., Production API"
                  className="w-full rounded-lg text-white bg-[#273a32] h-14 p-4 placeholder:text-[#9bbbae] focus:outline-none"
                />
              </label>
            </div>

            {/* URL */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-white text-base font-medium pb-2">URL</p>
                <input
                  placeholder="https://example.com"
                  className="w-full rounded-lg text-white bg-[#273a32] h-14 p-4 placeholder:text-[#9bbbae] focus:outline-none"
                />
              </label>
            </div>

            <h3 className="text-white text-lg font-bold px-4 pb-2 pt-4">
              Configuration
            </h3>

            {/* Radio Buttons */}
            <div className="flex px-4 py-3">
              <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#273a32] p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-[#9bbbae] text-sm font-medium">
                  <span>1m</span>
                  <input type="radio" name="time" className="hidden" value="1m" />
                </label>

                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-white bg-[#111815]">
                  <span>5m</span>
                  <input
                    type="radio"
                    name="time"
                    className="hidden"
                    value="5m"
                    defaultChecked
                  />
                </label>

                <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 text-[#9bbbae] text-sm font-medium">
                  <span>15m</span>
                  <input type="radio" name="time" className="hidden" value="15m" />
                </label>
              </div>
            </div>

            {/* Slider */}
            <div className="px-4 py-3">
              <div className="relative flex w-full flex-col items-start gap-3 p-4">
                <div className="flex w-full items-center justify-between">
                  <p className="text-white text-base font-medium">Timeout Settings</p>
                  <p className="text-white text-sm">10s</p>
                </div>

                <div className="flex h-4 w-full items-center gap-4">
                  <div className="flex h-1 flex-1 rounded-sm bg-[#3a554a]">
                    <div className="h-full w-[32%] rounded-sm bg-white"></div>
                    <div className="absolute -left-2 -top-1.5 w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end px-4 py-3 gap-3">
              <button className="min-w-[84px] rounded-lg h-10 px-4 bg-[#273a32] text-white font-bold">
                Cancel
              </button>
              <button className="min-w-[84px] rounded-lg h-10 px-4 bg-[#06f994] text-[#111815] font-bold">
                Create Monitor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
