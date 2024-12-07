import React from "react";
import {Link} from "react-router-dom"

function Riding() {
  return (
    <div className="h-screen">
        <Link to={"/home"} className="fixed right-2 top-2 w-10 h-10 bg-white flex items-center justify-center rounded-full">
            <i className="text-lg font-medium ri-home-5-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/2 p-7">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
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
        </div>
        <button className="mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
