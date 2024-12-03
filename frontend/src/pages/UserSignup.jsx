import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {UserDataContext} from "../contexts/UserContext.jsx"

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const {user, setUser} = useContext(UserDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
  
      if(response.status == 201){
        const data = response.data
        setUser(data.user)
        localStorage.setItem("token", data.token)
        navigate('/home')
      }
    } catch (err) {
      let error = err.response?.data?.errors[0]?.msg || "Please ensure all required fields are filled correctly.";
      setError(error)
      navigate("/signup")
    }

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

  return (
    <div>
      <div className=" h-screen p-7 flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-medium  mb-2">What's your name?</h3>

            <div className="flex gap-3 mb-6">
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
                required
                type="text"
                placeholder="First name"
              />
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
                type="text"
                placeholder="Last name"
              />
            </div>

            <h3 className="text-lg font-medium  mb-2">What's your email?</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#eeeeee] mb-6 rounded border px-4 py-2 text-lg placeholder:text-base"
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
            <button className="w-full bg-[#111] text-white mb-3 font-semibold rounded-lg px-4 py-2 text-base placeholder:text-sm">
              Create Account
            </button>
          </form>
          <p className="text-center">
            Already have account?
            <Link to={"/login"} className="text-blue-600">
              Login here
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

export default UserSignup;
