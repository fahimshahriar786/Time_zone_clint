import React from "react";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <Bounce left>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-logo font-semibold text-blue-100 text-center select-none leading-tight">
          Independent  companies since 1923.


          </h1>
          <p className="my-2 font-primary text-yellow-100 text-center text-sm w-96 select-none">
          As well as providing a wide array of watch tools and parts, we are committed to promoting the culture of skillful jobs in horology and jewelry
          </p>
          <Link to="/explore">
            <button className="btn-primary-2 w-36 mt-5">Explore More</button>
          </Link>
        </div>
      </Bounce>
    </section>

  );
};

export default HeroBanner;
