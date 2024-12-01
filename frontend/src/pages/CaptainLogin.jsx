import React, { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password,
    });

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
          <h3 className="text-lg font-medium  mb-2">What's our captain's email?</h3>
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
