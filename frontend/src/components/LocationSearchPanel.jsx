import React from "react";

function LocationSearchPanel({setPanelOpen, setVehiclePanelOpen}) {

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22D, Near yo yo singh's cafe, Sheryians Coding School, Bhopal",
    "14A, Near dinco's cafe, Sheryians Coding School, Bhopal",
    "24L, Near kapoor and sons cafe, Sheryians Coding School, Bhopal",
  ]
  return (
    <div>
      {/* this is just a sample data */}

      {locations.map((location, idx) => {
        return (
        <div 
        key={idx}
        onClick={() => {
          setVehiclePanelOpen(true)
          setPanelOpen(false)
        }}
        className="flex items-center gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black my-2 justify-start">
          <h2 className="bg-[#eee] flex items-center justify-center w-16 h-10 rounded-full"><i className="ri-map-pin-fill text-lg"></i></h2>
          <h4 className=" font-medium">{location}</h4>
        </div>
        )
      })}
    </div>
  );
}

export default LocationSearchPanel;
