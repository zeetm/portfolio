import React from 'react';
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.png"
import AVTR2 from "../../assets/avatar2.png"
import AVTR3 from "../../assets/avatar3.png"
import AVTR4 from "../../assets/avatar4.png"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//TESTIMONAL DATA FOR ARRAY//
const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sapiente quam tenetur laboriosam tempore, quia sunt temporibus et ea commodi illum libero perspiciatis fuga odio ipsum quis accusantium. Dolor, quod?"
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sapiente quam tenetur laboriosam tempore, quia sunt temporibus et ea commodi illum libero perspiciatis fuga odio ipsum quis accusantium. Dolor, quod?"
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sapiente quam tenetur laboriosam tempore, quia sunt temporibus et ea commodi illum libero perspiciatis fuga odio ipsum quis accusantium. Dolor, quod?"
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sapiente quam tenetur laboriosam tempore, quia sunt temporibus et ea commodi illum libero perspiciatis fuga odio ipsum quis accusantium. Dolor, quod?"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index}className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials