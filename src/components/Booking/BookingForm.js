import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const BookingForm = ({ bookings, totalBookingCost }) => {
  const history = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  //send data to server
  const onSubmit = (data) => {
    
  };
  return (
    
  );
};

export default BookingForm;
