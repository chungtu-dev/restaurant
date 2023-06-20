import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/hero-section.css'
import '../styles/home.css'
import { getListInfo } from '../api'

import CarouselSlider from '../components/Carousel/CarouselSlider'
import SubCarouselSlider from '../components/Carousel/SubCarouselSlider'
import Menu from '../components/UI/menu/Menu'
import Form from '../components/Form/Form'
import form_bg from '../assets/images/form-bg.jpg'

// import { useTranslation } from 'react-i18next';
import CollapseMenuList from '../components/CollapseMenu/CollapseMenuList'

const Home = () => {
  const [infomation, setInfomation] = useState([])

  // const { t } = useTranslation();

  const listInfo = () => {
    getListInfo().then((info)=>{
      // map multi object in one object
      const contentList = new Array(Object.assign({}, ...info.map(i => ({[i.SUB_ID]: i.CONTENT}))))
      // console.log(contentList);
      setInfomation(contentList)
    })
  }

  useEffect(()=>{
    listInfo()
  },[])

  return (
    <Helmet title="Home">
      <CarouselSlider />
      <section id="gioi-thieu"></section>

      <div className='hero_info'>
        <Container>
          <div className="hero">
            <div class="hero__content">
              {
                infomation?.map((i, index) => (
                  <div className="hero__content" key={index}>
                    <h5>&#127754; {i.content_1}</h5>
                    {/* <h5>&#127754; {t('info.info_desc_1')}</h5> */}
                    <ul className="hero__content-info">
                      <li>&#10024; {i.content_2}</li>
                      <li>&#10024; {i.content_3}</li>
                      <li>&#10024; {i.content_4}</li>
                      <li>&#10024; {i.content_5}</li>
                    </ul>

                    <div className="hero__btns d-flex align-items-center gap-5">
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Container>
      </div>

      <section id='mon-ban-chay'></section>
      <div className="pt-0" >
        <Menu />
      </div>

      <div id='thuc-don' className='menu_section'>
        <h2>Thực đơn</h2>
      </div>
      <div>
        <CollapseMenuList/>
      </div>

      <section id="sanh-tiec"></section>
      <div className='hero_info'>
        <Container>
          <div className="hero">
            <div class="hero__content">
              {
                infomation?.map((i, index) => (
                  <div className="hero__content" key={index}>
                    {/* <h5 className='hero__content-lobby-title'>{t('info.intro_lobby_title')}</h5> */}
                    <h5 className='hero__content-lobby-title'>{i.intro_lobby_title}</h5>
                    <ul className="hero__content-info">
                      <li className="hero__content-info-lobby">&#10024;{i.intro_lobby}</li>
                    </ul>

                    <div className="hero__btns d-flex align-items-center gap-5">
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="hero__img">
              <div>
                <SubCarouselSlider />
              </div>

            </div>
          </div>
        </Container>
      </div>

      <section id="dat-ban" className='section_form'>
        <div className='form'>
          <Form />
        </div>
        <img src={form_bg} alt="form-booking-bg" loading="lazy"/>
      </section>

    </Helmet>
  )
}

export default Home