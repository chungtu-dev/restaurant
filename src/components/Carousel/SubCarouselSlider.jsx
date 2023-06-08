import React, { useState, useEffect } from 'react'
import { Carousel } from "react-responsive-carousel";
import './carouselSlider.css'
import axios from 'axios';

const SubCarouselSlider = () => {

    const [subImgSlider, setSubImgSlider] = useState([])

    const getDataImgSubSlider = () => {
        return axios.get(`https://opensheet.elk.sh/1yG2k0Vc_qHP46E7IxrfLS1wp6sQLBNr-Y6Npaaon_tI/API-SANH`).then((response) => {
            setSubImgSlider(response.data)
        })
    }

    useEffect(() => {
        getDataImgSubSlider()
    }, [])

    return (
        <Carousel autoPlay interval="3000" transitionTime="1000" showThumbs={false} infiniteLoop={true}>
            {
                subImgSlider.map((i, index) => (
                    <div key={index}>
                        <img alt="sanh-img" src={i.SANH_TIEC} className='sub_carousel_img' loading='lazy'/>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default SubCarouselSlider