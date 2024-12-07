import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div 
      onClick={() => {
        setFinishRidePanel(true)
      }}
      className="h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative">
        <h5 className="absolute p-3 -top-1 text-center w-[90%] text-2xl font-bold">
          <i
            onClick={() => {}}
            className="ri-arrow-up-wide-line text-gray-700"
          ></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Km away!</h4>
        <button className="w-1/2 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full translate-y-full z-10 bg-white bottom-0 rounded-tr-xl rounded-tl-xl px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
}

export default CaptainRiding;