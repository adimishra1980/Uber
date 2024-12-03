import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CaptainLogout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((respnose) => {
      if (respnose.status === 200) {
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    })
    .catch((err) => {
      console.log("Logout failed:", err.response?.data?.message || err.message);
      navigate("/captain-login");
    });

  return <div>Logging out!!</div>;
}

export default CaptainLogout;
