import React from "react";

function WaitingForDriver({setWaitingForDriver}) {
  return (
    <div>
      <h5 className="absolute p-3 -top-1 text-center w-[93%] text-2xl font-bold">
        <i 
        onClick={() => {
            setWaitingForDriver(false)
        }}
        className="ri-arrow-down-wide-line text-gray-500"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img className="h-16" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
        <div className="text-right">
            <h2 className="text-lg font-medium">Santh</h2>
            <h4 className="text-xl font-semibold -mb-1 -mt-1">MP 04 AB 7777</h4>
            <p className="text-sm text-gray-600">White Suzuki S-Presso LXI</p>
        </div>
      </div>

      <div className="gap-2 flex items-center flex-col justify-between">
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
              <p className="-mt-1 text-sm text-gray-600">Cash p-2 border-b-2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver;
