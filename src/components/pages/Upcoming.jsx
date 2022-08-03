import React from 'react'
import { Link } from 'react-router-dom'
import Ucard from './Ucard'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}

const Upcoming = ({items , Title}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive:[
          {
            breakpoint:800,
            settings:{
                slidesToShow: 2,
        slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <section className="upcome">
        <div className="container">
            <div className="heading flexSb">
                <h1>{Title}</h1>
              <a href='#' >View All</a>
            </div>
            <div className="content">
            <Slider {...settings}>
               {items.map((item)=>(
<Ucard  key={item.id} item={item} />

               ))}
               </Slider>
            </div>
        </div>
    </section>
    </>
  )
}

export default Upcoming