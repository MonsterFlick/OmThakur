"use client"
import { useState } from "react";

export default function PowerMenu() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Hover Trigger Area */}
      <div
        className="fixed top-0 left-0 w-full h-6 cursor-pointer"
        onMouseEnter={() => setIsVisible(true)}
      >
<div
  className="absolute left-1/2 -translate-x-1/2 text-gray-400 text-lg transition-opacity duration-300"
  style={{ opacity: isVisible ? 0 : 1 }}
>
  <img src="/down.svg" alt="Drop Icon" className="w-6 h-6" />
</div>

      </div>

      {/* Power Menu */}
      <div
        className="fixed top-0 left-0 w-full flex justify-center items-center transition-transform duration-300 ease-in-out"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
        onMouseLeave={() => setIsVisible(false)}
      >
        {/* Menu Container */}
        <div className="bg-[#1a1b26] p-4 rounded-b-lg shadow-lg flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-gray-200"
            onClick={() => {
                if (window.opener) {
                window.close(); // Close if opened via window.open()
                } else {
                window.location.href = "about:blank"; // Fallback: Redirect to a blank page
                }
            }}
            >
            <img src="/power.svg" alt="Power Icon" className="w-8 h-8" />
            </button>
          <span className="bg-green-500 px-3 py-1 rounded-md text-black">
            catppuccin
          </span>
          <span className="text-gray-400">Uptime: 24/7</span>

          <div className="flex gap-3">
            <button className="bg-gray-700 p-2 rounded-lg">🔒</button>
            <button className="bg-gray-700 p-2 rounded-lg">➡️</button>
            <button className="bg-gray-700 p-2 rounded-lg">🌙</button>
            <button className="bg-gray-700 p-2 rounded-lg">⏸️</button>
            <button className="bg-gray-700 p-2 rounded-lg">🔄</button>
            <button className="bg-blue-500 p-2 rounded-lg">⏻</button>
          </div>
        </div>
      </div>
    </>
  );
}
