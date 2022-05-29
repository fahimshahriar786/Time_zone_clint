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
            <div className='p-20'>
                <h2 className='text-xl font-bold'>3. What is a unit test? Why should write unit tests?
                </h2>
                <p>
                    Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. <br /><br />
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </p>
            </div>
            <div className='p-20'>
                <h2 className='text-xl font-bold'>4.How does prototypical inheritance work?
                </h2>
                <p>
                Prototypical inheritance is usually misunderstood with prototype delegation, but it is more related to concatenative inheritance. It simplifies object creation and sets clear boundaries about what is to be inherited and what is not. It has clear advantages over class inheritance and solves many design flaws of the same.
                </p>
            </div>

            <div className='p-20'>
                <h2 className='text-xl font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    
                </h2>
                <p>
                Unit Test Unit Tests typically test functions, methods, and classes. Unit testing is a way to test units - the smallest components of your software, the smallest piece of code. A unit can be a single function. The goal is to validate that each unit performs as it should. A unit test tests a behavior in isolation to other tests. We should write unit tests because, It removes Poor code quality, Increased cost , Meaningless work. Also deals with Bad Product-Market Fit, Demotivated Team ,Unsuccessful Product ,Unhappy Clients.
                </p>

            </div>
<Footer></Footer>
        </div>


       
        
    );
};

export default Blogs;