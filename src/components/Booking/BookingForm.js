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
    data["status"] = "pending";
    const newData = { bookings, data };
    console.log(newData);
    axios
      .post("https://timezoneeee.herokuapp.com/bookings", newData)
      .then((response) => {
        if (response.statusText === "OK") {
          swal("Good job!", "Order has been placed", "success").then(() => {
            reset();
            history.push("/my-bookings");
          });
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="py-4 flex flex-col space-y-3 justify-between">
        <div className="flex flex-col space-y-4">
          {/* Name  */}
          <input
            className="input-primary"
            defaultValue={user.displayName}
            placeholder="👤 Name"
            {...register("name", { required: true })}
          />
          {/* Email  */}
          <input
            type="email"
            className="input-primary"
            defaultValue={user.email}
            placeholder="✉ Email"
            {...register("email", { required: true })}
          />
  );
};

export default BookingForm;
