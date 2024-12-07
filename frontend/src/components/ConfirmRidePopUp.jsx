import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmRidePopUp({ setConfirmRidePopUpPanel, setRidePopUpPanel }) {


  const [otp, setOtp] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h5 className="absolute p-3 -top-1 text-center w-[93%] text-2xl font-bold">
        <i
          onClick={() => {
            setConfirmRidePopUpPanel(false);
            setRidePopUpPanel(false);
          }}
          className="ri-arrow-down-wide-line text-gray-500"
        ></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center ">
        Confirm this ride to start
      </h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center justify-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3 className="text-lg font-medium">Hasrh Patel</h3>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="gap-2 flex items-center flex-col justify-between mt-2">
        <div className="mt-2 w-full">
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

        <form onSubmit={handleSubmit} className="w-full py-5">

          <input
            className=" bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-5"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={() => setOtp(e.target.value)}
          />

          <div className="buttons w-full flex items-center justify-center mt-5 gap-2">
            <button
              onClick={() => {
                setConfirmRidePopUpPanel(false);
                setRidePopUpPanel(false);
              }}
              className="w-1/2 text-lg bg-red-600 text-white font-semibold p-2 rounded-lg"
            >
              Cancel
            </button>

            <Link
              to={"/captain-riding"}
              onClick={() => {}}
              className="w-1/2 text-lg bg-green-600 text-white font-semibold p-2 rounded-lg flex items-center justify-center"
            >
              Confirm
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
