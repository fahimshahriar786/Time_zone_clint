import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import TourPackCard from "./TourPackCard";

const TourPackageSection = () => {
  
  const [toursPack, setToursPack] = useState([]);

  useEffect(() => {
    fetch("https://timezoneeee.herokuapp.com/Devices")
      .then((res) => res.json())
      .then((data) => setToursPack(data));
  }, []);


  return (
    
  );
};

export default TourPackageSection;
