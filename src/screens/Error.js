import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar bg="bg-gray-800" textColor="text-white"></Navbar>
      <img
        src="https://i.ibb.co/sC5Lrbf/error.png"
        className="my-40 w-1/3 mx-auto"
        alt=""
        srcset=""
      />
      <Footer></Footer>
    </div>
  );
};

export default Error;
