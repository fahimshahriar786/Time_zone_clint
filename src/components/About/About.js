import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  const service = [
    {
      id: 1,
      text: "Two Years Extended Warrenty",
      image: "../../../assets/smartph.png",
    },
    {
      id: 2,
      text: "World Wide Free Shipping",
      image: "../../../assets/travel.png",
    },
    {
      id: 3,
      text: "Guaranteed Authentic Product",
      image: "../../../assets/sleep.png",
    },
  ];
  return (
    
<div className="bg-red-100 py-10">
      <section className="max-w-screen-xl  mx-auto px-6">
      {/* heading  */}
      <Fade left>
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-logo text-gray-800 text-3xl font-semibold">
             Time Zone Query !
          </h1>
          <div className="h-1 w-28 bg-gray-400 rounded-full"></div>
        </div>
      </Fade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {/* left side image  */}
  );
};

export default About;
