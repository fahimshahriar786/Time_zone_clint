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
                     <span className="text-xl md:text-xl lg:text-2xl font-logo font-bold text-gray text-center">
             Time Zone
          </span>
              </Link>
            </div>
            <div className="flex">
              
              <a href="" target="_blank">
              <BsFacebook className="ml-2 mr-2 mt-5 text-2xl text-black-600">
              </BsFacebook>
              </a>
              <a href="" target="_blank">
              <BsInstagram className="mt-5 mr-2 text-2xl text-black-600"></BsInstagram>
              </a>
              <a href="" target="_blank">
                <BsLinkedin className="mt-5 mr-2 text-2xl text-black-600"></BsLinkedin>
                </a>
                <a href="" target="_blank">
                <BsTwitter className="mt-5 mr-2 text-2xl text-black-600"></BsTwitter>
                </a>
                </div>
            <small className="">We do not have a retail sales showroom or pickup order service!</small>
          </div>
          <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Working Hours
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(0, 4).map((item) => (
                  <h5 className="text-sm hover:shadow-xl">{item.text}</h5>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Services
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(4, 8).map((item) => (
                  <h5 className="text-sm hover:shadow-xl">{item.text}</h5>
                ))}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="poppins text-gray-900 text-base mb-3 font-semibold">
                Contact
              </h2>
              <nav className="list-none mb-10 flex flex-col space-y-2">
                {/* list  */}
                {footerLink.slice(8, 12).map((item) => (
                 <h5 className="text-sm hover:shadow-xl">{item.text}</h5>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-screen-2xl mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
            <p className="font-bold text-gray text-sm text-center sm:text-left">
              Copyright &copy; {new Date().getFullYear()} || All Rights Reserve By Time Zone Company.
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
