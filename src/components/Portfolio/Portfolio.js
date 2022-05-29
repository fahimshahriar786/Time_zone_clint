import React from 'react';
import Fade from "react-reveal/Fade";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const Portfolio = () => {
    return (
        <div className="bg-purple-400 py-10">
            <Navbar></Navbar>
        <section className="max-w-screen-xl  mx-auto px-6">
        {/* heading  */}
        <Fade left>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-logo pt-20 text-gray-800 text-3xl font-semibold">
            DEVELOPER. DEBUGGER. DEBUTANTE !
            </h1>
            <div className="h-1 w-28 bg-gray-900 rounded-full"></div>
          </div>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
          {/* left side image  */}
          <Fade left>
            <div className="flex justify-center lg:justify-start ">
              {/* <img src="./img/port.jpg" alt="about" /> */}
              <img src="./port.jpg" alt="" />
            </div>
          </Fade>
          {/* right side description  */}
          <Fade right>
            <div className="flex flex-col items-center lg:items-start space-y-3 ">
              {/* description  */}
              <div className="text-gray-900 text-sm font-primary">
             <h1 className="text-xl">ABOUT ME !</h1> 
             Hello World! I'm Fahim Shahriar, a Front-End Web Developer based out of Toronto. From choreography on a stage to lines of code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.
              </div>
              <div className="text-gray-900 text-sm font-primary">
             
              Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
  
  
  
  
              </div>
              <div className="text-gray-900 text-sm font-primary">
       
  I'm excited to make the leap and continue refining my skills with the right company. Drop me a line and/or your favourite restaurant in Toronto in the contact form below or check me out at:
              </div>
  
            
              
            </div>
          </Fade>
        </div>

        
      </section>

      <Footer></Footer>
      </div>
    );
};

export default Portfolio;