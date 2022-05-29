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
        <Fade left>
          <div className="flex justify-center lg:justify-start ">
            <img src="../../../assets/about.png" alt="about" />
          </div>
        </Fade>
        {/* right side description  */}
        <Fade right>
          <div className="flex flex-col items-center lg:items-start space-y-3 ">
            {/* description  */}
            <div className="text-gray-500 text-sm font-primary">
           <h1 className="text-xl">WHO WE ARE</h1> 
Timezone.com is a leading supplier and one-stop shop of tools, equipment and watch parts for watchmakers, jewelers and horologists. We are a customer-oriented company serving independent watchmakers and watch servicing companies since 1923.
            </div>
            <div className="text-gray-500 text-sm font-primary">
           <h1 className="text-xl ">WHAT WE DO</h1> 
           We provide a variety of products from around the globe, including the United States and Switzerland, that enables us to offer you the highest quality at the lowest price. We have an array of watch parts ranging from clasps and gaskets to pins and screws. 

Timezone.com

We also carry a wide range of of watch tools for professional or home watch repair. 

Whether you need watch-back openers, watch testers, screwdrivers, tweezers or watch straps, Timezone.com is your go-to place for any watch tools, watch parts and timepiece accessories you desire. If it exists and is used by watchmakers or watch enthusiasts, we’ve probably got it.


            </div>
            <div className="text-gray-500 text-sm font-primary">
           <h1 className="text-xl">SOCIAL OUTREACH
</h1> 
           As well as providing a wide array of watch tools and parts, we are committed to promoting the culture of skillful jobs in horology and jewelry repair through the providing of education, information and employment opportunities. We continuously strive to aid the development and preservation of clock and watch trades by supporting independent watchmaking and jewelry enthusiasts and small businesses.

 If you would like to refine your skills or learn a new trade, we have detailed step-by-step videos, articles, and courses which explain things such as watch repair and watch manufacturing.
            </div>

            {/* heading  */}
            <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">
              Why Choose Us
            </h1>

            {/* services  */}
            <div className="flex flex-col space-y-5 my-4">
              {service.map((item) => (
                <div className="flex items-center space-x-3" key={item.id}>
                  <img className="w-12" src={item.image} alt={item.text} />
                  <span className="w-36 text-gray-500 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
    </div>
  );
};

export default About;
