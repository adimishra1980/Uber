import React from "react";

function ConfirmRide({setConfirmRidePanel, setVehicleFound}) {
  return (
    <div>
      <h5
        className="absolute p-3 -top-1 text-center w-[93%] text-2xl font-bold"
      >
        <i 
        onClick={() => {
          setConfirmRidePanel(false);
        }}
        className="ri-arrow-down-wide-line text-gray-500"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

      <div className="gap-2 flex items-center flex-col justify-between">
        <img
          className="h-24"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />

        <div className="mt-5 w-full">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-xl  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">
                Kaikondrahilli, Bengaluru, Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2 border-b-2">
          <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p className="-mt-1 text-sm text-gray-600">
                Kaikondrahilli, Bengaluru, Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2">
          <i className="text-xl ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">₹193.20</h3>
              <p className="-mt-1 text-sm text-gray-600">
                Cash p-2 border-b-2
              </p>
            </div>
          </div>
        </div>

        <button 
        onClick={() => {
          setVehicleFound(true)
          setConfirmRidePanel(false)
        }}
        className="mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmRide;
