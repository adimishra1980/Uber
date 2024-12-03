import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { CaptainDataContext } from "../contexts/CaptainContext.jsx";



function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")


  const navigate = useNavigate()

  const {captain, setCaptain} = useContext(CaptainDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
  
      if(response.status == 200){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem("token", data.token)
        navigate("/captain-home")
      }
    } catch (err) {
      let error = err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || "Login failed. try again.";
      setError(error)
      navigate("/captain-login")
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium  mb-2">
            What's our captain's email?
          </h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#eeeeee] mb-7 rounded border px-4 py-2 text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#eeeeee] mb-7 rounded border px-4 py-2 text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
          />
          {error ? <p className=" text-red-600 mb-3 font-semibold text-center">{error}</p> : <></>}

          <button className="w-full bg-[#111] text-white mb-3 font-semibold rounded-lg px-4 py-2 text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?
          <Link to={"/captain-signup"} className="text-blue-600">
            {" "}
            Register as Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to={"/login"}
          className="w-full flex justify-center items-center bg-[#d5622d] text-white mb-5 font-semibold rounded-lg px-4 py-2 text-lg placeholder:text-base"
        >
          Sign In as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
