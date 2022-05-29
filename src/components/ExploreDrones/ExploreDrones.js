import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Footer from "../Footer/Footer";
import Bounce from "react-reveal/Bounce";
import Navbar from "../Navbar/Navbar";
import TourPackCard from "../Tour Package/TourPackCard";

const ExploreDrones = () => {
  const [dronePack, setDronePack] = useState([]);

  useEffect(() => {
    fetch("https://timezoneeee.herokuapp.com/devices")
      .then((res) => res.json())
      .then((data) => setDronePack(data));
  }, []);

  return (
    
  );
};

export default ExploreDrones;
