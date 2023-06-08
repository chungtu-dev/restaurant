import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './carouselSlider.css'
import { introSlide } from '../../assets/fake-data/introSlide'

const CarouselSlider = () => {
    return (
        <Carousel autoPlay interval="3000" transitionTime="1500" showThumbs={false} infiniteLoop={true}>
            {
                introSlide.view_restaurant.map((i) => (
                    <div key={i.id}>
                        <img alt={i.alt} src={i.src} className='carousel_img' loading="lazy"/>
                        {/* <p className="legend">Món 1</p> */}
                    </div>
                ))
            }
        </Carousel>
    )
}

export default CarouselSlider