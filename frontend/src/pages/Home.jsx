import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";
import VehiclePanel from "../components/VehiclePanel.jsx";
import ConfirmRide from "../components/ConfirmRide.jsx";
import LookingForDriver from "../components/LookingForDriver.jsx";
import WaitingForDriver from "../components/WaitingForDriver.jsx";


function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confrimRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  //for loaction search panel 
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  //for vehicle panel open
  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  //for confirm ride panel open
  useGSAP(
    function () {
      if (ConfirmRidePanel) {
        gsap.to(confrimRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confrimRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePanel] 
  );

  //for vehicle found
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound] 
  );


  //waiting for driver
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver] 
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />

      <div
        onClick={() => {
          setPanelOpen(false);
          setVehiclePanelOpen(false);
        }}
        className="h-screen w-screen"
      >
        {/* {temporary image for use } */}
        <img
          className=" h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="findTrip flex flex-col justify-end absolute h-screen top-0 w-full">
        <div className="h-[30%] p-6 relative bg-white rounded-tl-xl rounded-tr-xl">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-7 right-7 text-2xl font-bold"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 rounded-full bg-gray-700"></div>
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              placeholder="Enter your destination"
              className=" bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>

        <div ref={panelRef} className="h-[0%] bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div ref={vehiclePanelRef} className="fixed w-full translate-y-full z-10 bg-white bottom-0 rounded-tr-xl rounded-tl-xl px-3 py-10 pt-12">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>

      <div ref={confrimRidePanelRef} className="fixed w-full translate-y-full z-10 bg-white bottom-0 rounded-tr-xl rounded-tl-xl px-3 py-6 pt-12">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full translate-y-full z-10 bg-white bottom-0 rounded-tr-xl rounded-tl-xl px-3 py-6 pt-12">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 rounded-tr-xl rounded-tl-xl px-3 py-6 pt-12">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
}

export default Home;
