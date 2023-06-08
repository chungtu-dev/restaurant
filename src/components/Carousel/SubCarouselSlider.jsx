import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './carouselSlider.css'
import { introSlide } from '../../assets/fake-data/introSlide'

const SubCarouselSlider = () => {
    return (
        <Carousel autoPlay interval="3000" transitionTime="1000" showThumbs={false} infiniteLoop={true}>
            {
                introSlide.view_lobby.map((i) => (
                    <div key={i.id}>
                        <img alt={i.alt} src={i.src} className='sub_carousel_img' loading="lazy"/>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default SubCarouselSlider