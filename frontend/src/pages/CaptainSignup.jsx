import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../contexts/CaptainContext.jsx";
import axios from "axios"

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [error, setError] = useState("")


  const navigate = useNavigate()

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
  
      if(response.status == 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem("token", data.token)
        navigate("/captain-home")
      }
    } catch (err) {
      let error = err.response?.data?.errors[0]?.msg || err.response?.data?.message || "Please ensure all required fields are filled correctly.";
      setError(error)
      navigate("/captain-signup")
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setVehicleCapacity('')
    setVehicleColor('')
    setVehicleType('')
    setVehiclePlate('')
  };

  return (
    <div>
      <div className=" h-screen py-5 px-5 flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
            alt=""
          />
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-medium  mb-2">
              What's our captain's name?
            </h3>

            <div className="flex gap-3 mb-6">
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-base placeholder:text-base"
                required
                type="text"
                placeholder="First name"
              />
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-base placeholder:text-base"
                type="text"
                placeholder="Last name"
              />
            </div>

            <h3 className="text-base font-medium  mb-2">
              What's our captain's email?
            </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#eeeeee] mb-6 rounded border px-4 py-2 text-base placeholder:text-base"
              required
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-base font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#eeeeee] mb-6 rounded border px-4 py-2 text-base placeholder:text-base"
              required
              type="password"
              placeholder="password"
            />

            <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4 mb-3">
              <input
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base"
                type="number"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <select
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base"
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            {error ? <p className=" text-red-600 mb-3 font-semibold text-center">{error}</p> : <></>}


            <button className="w-full bg-[#111] text-white mb-3 font-semibold rounded-lg px-4 py-2 text-base placeholder:text-sm">
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already have account?
            <Link to={"/captain-login"} className="text-blue-600">
              {" "}
              Login as captain
            </Link>
          </p>
        </div>

        <div>
          <p className="text-[10px] mt-6 leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaptainSignup;
