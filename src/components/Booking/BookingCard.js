import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";

const BookingCard = (props) => {
  const { title, description, image, duration, groupMembers, price, country } =
    props;
  return (
    <>
      <div className="py-4 box-border overflow-hidden relative flex flex-col space-y-3">
        <div>
          {/* country badge  */}
          <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">
            {country}
          </div>
          {/* image  */}
          <div className="overflow-hidden rounded-xl h-full w-full">
            <img
              className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </div>
        </div>
  );
};

export default BookingCard;
