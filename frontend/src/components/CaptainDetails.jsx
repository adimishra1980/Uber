import React from "react";

function CaptainDetails() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4 className="text-lg font-medium">Hasrh Patel</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.20</h4>
          <p className="text-lg text-gray-600 text-center leading-5">Earned</p>
        </div>
      </div>

      <div className="flex p-3 mt-8 bg-gray-200 rounded-xl items-center justify-center gap-5">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-xl font-medium">10.2</h5>
          <p className="text-sm text-gray-600">HOURS ONLINE</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-xl font-medium">30 Km</h5>
          <p className="text-sm text-gray-600">TOTAL DISTANCE</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-xl font-medium">10</h5>
          <p className="text-sm text-gray-600">TOTAL SALES</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails;
