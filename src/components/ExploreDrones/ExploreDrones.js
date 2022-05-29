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
    <div className="bg-gray-200">
      <Navbar
        bg="bg-transparent"
        textColor="text-white"
        width="max-w-screen-xl"
      />
      <section className="all-drones-hero-section h-screen">
        <Bounce right>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold  text-center text-white select-none leading-tight">
            We also carry, <br />
            A wide range of watch tools for professionals !
            </h1>
            <p className="my-2 font-primary  text-yellow-200 text-center text-sm w-96 select-none">
            Whether you need watch-back openers, watch testers, screwdrivers, tweezers or watch straps, Esslinger.com is your go-to place for any watch tools, watch parts and timepiece accessories you desire. If it exists and is used by watchmakers or watch enthusiasts, we’ve probably got it.
            </p>
          </div>
        </Bounce>
      </section>
      <section className="max-w-screen-xl mx-auto px-6 relative my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dronePack?.map((item) => {
            return (
              <Fade key={item._id} bottom>
                <TourPackCard {...item} />
              </Fade>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ExploreDrones;
