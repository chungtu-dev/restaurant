import React, { useEffect, useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import './carouselSlider.css'
import axios from 'axios';

const CarouselSlider = () => {

    const [imgSlider, setImgSlider] = useState([])
    
    const getImgSlider = () =>{
        return axios.get(`https://opensheet.elk.sh/1yG2k0Vc_qHP46E7IxrfLS1wp6sQLBNr-Y6Npaaon_tI/API-LANDING`).then((response) => setImgSlider(response.data))
    }

    useEffect(() => {
        getImgSlider()
    }, [])

    return (
        <Carousel autoPlay interval="3000" transitionTime="1500" showThumbs={false} infiniteLoop={true}>
            {
                imgSlider.map((i, index) => (
                    <div key={index}>
                        <img alt='landing-img' src={i.ANH_LANDING} className='carousel_img' loading="lazy" />
                        {/* <p className="legend">Món 1</p> */}
                    </div>
                ))
            }
        </Carousel>
    )
}

export default CarouselSlider