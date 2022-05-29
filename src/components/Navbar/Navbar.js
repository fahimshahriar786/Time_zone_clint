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
      {/* menu */}
      <div className="hidden md:flex lg:flex space-x-3">
          {user.email && (
            <>
              <ul className="flex items-center space-x-4">
                {menu.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.to}
                      className={`${
                        changeHeader ? "text-white" : `${textColor} `
                      } text-base`}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
           {/* user authentication  */}
           {user.email ? (
            <div className="flex items-center space-x-3">
              <img
                src={user?.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full"
              />
              <span
                className={`${changeHeader ? "text-white" : `${textColor}`}`}
              >
                {user.displayName}
              </span>
              {changeHeader ? (
                <button className="btn-primary px-3" onClick={signOutUser}>
                  Logout
                </button>
              ) : (
                <button className="btn-primary-2 px-3" onClick={signOutUser}>
                  Logout
                </button>
              )}
            </div>
          ) : (
            <div>
              {changeHeader ?  (
                <button
                  className="btn-primary px-3"
                  onClick={handleChangeRoute}
                >
                  Register
                </button>
              ) : (
                <button
                  className="btn-primary-2 px-3"
                  onClick={handleChangeRoute}
                >
                  Register
                </button>
              )}
              {changeHeader ? (
                <button
                  className="btn-primary ml-5 px-3"
                  onClick={handleChangeLogin}
                >
                  Signin
                </button>):(
                  <button
                  className="btn-primary-2 ml-5 px-3"
                  onClick={handleChangeLogin}
                >
                  Signin
                </button>
                )
              }
            </div>
          )}
        </div>
         {/* menu icon  */}
         <div className="block md:hidden lg:hidden">
          <HiMenuAlt3
            className="w-10 h-10 ring-red-300 bg-red-500 text-white focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110"
            onClick={handleClick}
          />
        </div>
      </nav>

      {/* mobile nav  */}
      {mobileNav && (
        <Fade>
          <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-6 block md:hidden lg:hidden">
            <ul>
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.to}
                  className="text-white text-lg"
                >
                  <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
                    {item.text}
                  </li>
                </NavLink>
              ))}
            </ul>
               {/* user authentication  */}
               {user.email ? (
              <div className="flex flex-col items-center space-y-3">
                <img
                  src={user?.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-white">{user.displayName}</span>
                <button className="btn-primary px-3" onClick={signOutUser}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <div className="px-3 py-2">
                  <button
                    className="btn-primary w-full mb-4"
                    onClick={handleChangeRoute}
                  >
                    Register
                  </button>
                  <button
                    className="btn-primary w-full"
                    onClick={handleChangeLogin}
                  >
                    Signin
                  </button>
                </div>
              </>
            )}
            {/* button  */}
          </nav>
        </Fade>
      )}
    </header>

  );
};

export default Navbar;
