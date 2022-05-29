import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { BsFacebook,  BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const footerLink = [
    { id: 1, text: "Monday to Sunday" },
    { id: 2, text: "9 am to 5 pm" },
    { id: 3, text: "221/B, Baker Street" },
    { id: 4, text: "London, UK" },
    { id: 5, text: "24/7 open" },
    { id: 6, text: "Online Payments" },
    { id: 7, text: "Customer Support" },
    { id: 8, text: "+ (880)17xxxxxxxxxx" },
    { id: 9, text: "Facebook" },
    { id: 10, text: "Instagram" },
    { id: 11, text: "Twitter" },
    { id: 12, text: "+ (880)15xxxxxxxxx" },
  ];
  return (
   
 <Fade bottom>
 <footer className="text-gray-600 poppins bg-yellow-200">
   <div className="max-w-screen-xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
       {/* brand  */}
       <div className="flex items-center flex-grow">
         <Link to="/" className="flex items-center space-x-2">
           <img
             src="../../../assets/logo.png"
             alt="logo"
             className="w-12 h-12"
           />
  );
};

export default Footer;
