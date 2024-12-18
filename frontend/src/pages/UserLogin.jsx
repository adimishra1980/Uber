import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/UserContext";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")


  const navigate = useNavigate()

  const {user, setUser} = useContext(UserDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
  
      if(response.status == 200){
        const data = response.data
        setUser(data.user)
        localStorage.setItem("token", data.token)
        navigate("/home")
      }
    } catch (err) {
      let error = err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || "Login failed. try again.";
      setError(error)
      navigate("/login")
    }
    
    setEmail("");
    setPassword("");
  };

  return (
    <div className=" h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium  mb-2">What's your email?</h3>
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
            className="w-full bg-[#eeeeee] mb-3 rounded border px-4 py-2 text-lg placeholder:text-base"
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
          New here?{" "}
          <Link to={"/signup"} className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to={"/captain-login"}
          className="w-full flex justify-center items-center bg-[#10b461] text-white mb-5 font-semibold rounded-lg px-4 py-2 text-lg placeholder:text-base"
        >
          Sign In as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
