import axios from "axios";
import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Testimonial from "./Testimonial";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
  

  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    axios
      .get("https://timezoneeee.herokuapp.com/testimonials")
      .then((res) => setTestimonialData(res.data));
  }, []);

  return (
   
  );
};

export default Testimonials;
