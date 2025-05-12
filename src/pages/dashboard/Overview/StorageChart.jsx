import React from "react";

const data = [
  { name: "Swiprr", size: 12.5, color: "bg-blue-600", icon: "🦁" },
  { name: "Clikkle Ads", size: 5.0, color: "bg-green-500", icon: "📈" },
  { name: "Kept Up", size: 2.8, color: "bg-yellow-400", icon: "📦" },
  { name: "Hivrr", size: 2.2, color: "bg-red-500", icon: "🎯" },
];

const totalUsed = data.reduce((sum, app) => sum + app.size, 0);
const totalSize = 100;

export default function StorageChart() {
  return (
    <div className="w-full border-1 border-[#292929] rounded-xl pt-5">    
    <div>
        <h1 className="text-white text-xl font-bold m-3">Storage Chart</h1>
    </div>
    <div className=" p-6 max-w-xl bg-black text-white rounded-xl mt-3">
      <div>
        <h2 className="text-lg">Total Size</h2>
        <p className="text-2xl font-bold">
          {totalUsed.toFixed(2)} GB{" "}
          <span className="text-gray-400 text-sm font-normal">Used of {totalSize} GB</span>
        </p>
      </div>

      {/* Bar */}
      <div className="flex w-full h-4 mt-4 overflow-hidden rounded-full bg-gray-800">
        {data.map((app, index) => (
          <div
            key={index}
            className={`${app.color} h-full`}
            style={{ width: `${(app.size / totalSize) * 100}%` }}
          />
        ))}
      </div>

      {/* App List */}
      <div className="mt-6 lg:flex gap-2 space-y-3">
        {data.map((app, index) => (
          <div key={index} className="flex space-x-3">
            <div className={`w-10 h-10 flex items-center justify-center text-2xl rounded-md ${app.color}`}>
              {app.icon}
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-semibold">{app.name}</p>
              <p className="text-xs text-gray-400">{app.size} GB</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
