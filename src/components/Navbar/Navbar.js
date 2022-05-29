import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Fade from "react-reveal/Fade";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = ({ bg, textColor, width }) => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const history = useNavigate();
  const { user, signOutUser } = useAuth();
  // console.log(user);

  const menu = [
    { id: 1, text: "Dashboard", to: "/dashboard" },
    { id: 2, text: "My bookings", to: "/my-bookings" },
  ];

  //handle click
  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  //route change
  const handleChangeRoute = () => {
    history("/register");
  };
  const handlehome = () => {
    history("/home");
  };
  const handleBlog = () => {
    history("/blogs");
  };
  const handlePortfolio = () => {
    history("/portfolio");
  };
  const handleChangeLogin = () => {
    history("/login");
  };

  //header scroll effect
  const handleChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener("scroll", handleChangeHeader);

  return (
    <header
    className={`${
      changeHeader ? "bg-gray-600" : `${bg}`
    } w-full  fixed top-0 left-0  z-50 transition duration-200`}
  >
    {/* desktop nav  */}
    <nav
      className={`flex items-center px-12 py-3 font-primary ${width} mx-auto`}
    >
      {/* brand  */}
      <div className="flex items-center flex-grow">
        <Link to="/" className="flex items-center space-x-2">
          {changeHeader ? (
            <img
              src="../../../assets/logo.png"
              alt="logo"
              className="w-14 h-14"
            />
            
          ) : (
            <img
              src="../../../assets/logo.png"
              alt="logo"
              className="w-14 h-14"
            />
          )}
          {changeHeader ? (
          <span className="text-xl md:text-xl lg:text-2xl font-logo font-bold text-black text-center">
           Time Zone
        </span>) : (
          <span className="text-xl md:text-xl lg:text-2xl font-logo font-bold text-blue-200 text-center">
           Time Zone
        </span>
          )}
        </Link>
       
        {/* <button onClick={handleBlog}>Blogs</button> */}
        <button className="btn-primary-2 text-black px-3 mx-5" onClick={handlehome}>
                Home
                <Link to="/Home"></Link>
              </button>


        <button className="btn-primary-2 text-black px-3 mx-5" onClick={handleBlog}>
                Blogs
                <Link to="/blogs"></Link>
              </button>


        <button className="btn-primary-2 text-black px-3" onClick={handlePortfolio}>
                Portfolio
                <Link to="/Portfolio"></Link>
              </button>


        
      </div>

  );
};

export default Navbar;
