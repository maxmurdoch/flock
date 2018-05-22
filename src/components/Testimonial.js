import React from 'react'
import Slider from 'react-slick'

const Testimonial = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidestoscroll: 1,
  }

  return (
    <Flex>
      <h2>Single item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </Flex>
  )
}

export default Testimonial
