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
   
  );
};

export default Navbar;
