import React from "react";

function VehiclePanel({setConfirmRidePanel, setVehiclePanelOpen}) {
  return (
    <div>
      <h5
        className="absolute p-3 -top-1 text-center w-[93%] text-2xl font-bold"
      >
        <i 
        onClick={() => {
          setVehiclePanelOpen(false);
        }}
        className="ri-arrow-down-wide-line text-gray-500"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>

      <div 
      onClick={() => {
        setConfirmRidePanel(true)
      }}
      className="w-full border-2 active:border-black mb-2 rounded-xl p-3 flex items-center justify-between">
        <img
          className="h-11"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2 mr-2">
          <h4 className="font-medium leading-5 text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill ml-1 text-base">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-base leading-5">2 mins away </h5>
          <p className="font-normal text-gray-600 text-sm">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-bold">₹193.20</h2>
      </div>

      <div 
      onClick={() => {
        setConfirmRidePanel(true)
      }}
      className="w-full border-2 active:border-black mb-2 rounded-xl p-3 flex items-center justify-between">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 mr-6">
          <h4 className="font-medium leading-5 text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill ml-1 text-base">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-base leading-4">2 mins away </h5>
          <p className="font-normal text-gray-600 text-[13px]">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-bold">₹65</h2>
      </div>

      <div
      onClick={() => {
        setConfirmRidePanel(true)
      }}
      className="w-full border-2 active:border-black mb-2 rounded-xl p-3 flex items-center justify-between">
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2 mr-2">
          <h4 className="font-medium leading-5 text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill ml-1 text-base">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-base leading-4">2 mins away </h5>
          <p className="font-normal text-gray-600 text-sm">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-bold">118.21</h2>
      </div>
    </div>
  );
}

export default VehiclePanel;
