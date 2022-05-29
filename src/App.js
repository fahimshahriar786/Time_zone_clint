import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import ExploreDrones from "./components/ExploreDrones/ExploreDrones";
import Portfolio from "./components/Portfolio/Portfolio";
import AuthProvider from "./contexts/AuthProvider";
import BookingProvider from "./contexts/BookingProvider";
import useLoading from "./hooks/useLoading";
import PrivateRoute from "./routes/PrivateRoute";
import BookingScreen from "./screens/BookingScreen";
import Error from "./screens/Error";
import HomeScreen from "./screens/HomeScreen";
import MyBookingScreen from "./screens/MyBookingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SignInScreen from "./screens/SignInScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = useLoading();

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          {loading ? (
            spinner
          ) : (
            <Routes>
              <Route path="/" element={<HomeScreen/>}/>
               
              <Route path="/home" element={<HomeScreen/>}/>


              <Route path="/blogs" element={<Blogs/>}/>


              <Route path="/portfolio" element={<Portfolio></Portfolio>}/>
                
              <Route path="/register" element={<RegisterScreen/>}/>
                
              <Route path="/login" element={<SignInScreen/>}/>
               
              <Route path="/explore" element={<ExploreDrones/>}/>
              

              
              
              <Route path="/dashboard" element={<PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>}/> 


              <Route path="/booking/:id" element={<PrivateRoute>
                <BookingScreen></BookingScreen>
              </PrivateRoute>}/> 

              
              <Route path="/my-bookings" element={<PrivateRoute>
                <MyBookingScreen></MyBookingScreen>
              </PrivateRoute>}/> 

              
              
              <Route path="*" element={<Error/>}/>
              
            </Routes>
          )}
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
