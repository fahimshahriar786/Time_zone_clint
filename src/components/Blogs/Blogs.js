import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Blogs = () => {
    return (
        <div className='bg-gray-600 text-white'>
            <Navbar></Navbar>
            <div className='p-20  py-40'>
                <h2 className='text-xl font-bold'>1. How will you improve the performance of a React Application?
                </h2>
                <p>1- Keeping component state local where necessary. <br />
                    2- Memoizing React components to prevent unnecessary re-renders. <br />
                    3- Code-splitting in React using dynamic import(). <br />
                    4- Windowing or list virtualization in React. <br />
                    5- Lazy loading images in React.
                </p>
            </div>

            <div className='p-20'>
                <h2 className='text-xl font-bold'>2. What are the different ways to manage a state in a React application?
                </h2>
                <p>
                    there are four main types of state to manage in a React Application.
                    1. Local state: Local state is data we manage in one or another component. <br />
                    2. Global state: Global state is data we manage across multiple components. <br />
                    3. Server state: Data that comes from an external server that must be integrated with our UI state. <br />
                    4. URL state: Data that exists on our URLs, including the pathname and query parameters. <br />
                </p>
            </div> 


            
       
        
    );
};

export default Blogs;