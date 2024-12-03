import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../contexts/CaptainContext";
import axios from "axios";

function CaptainProtectWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default CaptainProtectWrapper;
