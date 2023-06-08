import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/hero-section.css'
import '../styles/home.css'

import menuToSearch from '../assets/fake-data/menuToSearch'
import info from '../assets/fake-data/info.js'

import CarouselSlider from '../components/Carousel/CarouselSlider'
import SubCarouselSlider from '../components/Carousel/SubCarouselSlider'
import Menu from '../components/UI/menu/Menu'
import Form from '../components/Form/Form'
import CollapseMenu from '../components/CollapseMenu/CollapseMenu'
import { menu, name_list_menu, thuc_uong, loai_thuc_uong } from '../assets/fake-data/menu'
import form_bg from '../assets/images/form-bg.jpg'

import { useTranslation } from 'react-i18next';

const Home = () => {
  const [hotPizza, setHotPizza] = useState([])
  const [infomation, setInfomation] = useState(info)
  
  useEffect(() => {
    const filteredPizza = menuToSearch.filter((i) => i.cate === 'ghe')
    const slicePizza = filteredPizza.slice(0, 4)
    setHotPizza(slicePizza)
  }, [])

  const { t } = useTranslation();

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
                    {/* <h5>&#127754; {i.title}</h5> */}
                    <h5>&#127754; {t('info.info_desc_1')}</h5>
                    <ul className="hero__content-info">
                      <li>&#10024; {i.title_2}</li>
                      <li>&#10024; {i.title_3}</li>
                      <li>&#10024; {i.title_4}</li>
                      <li>&#10024; {i.title_5}</li>
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
        <CollapseMenu menu={menu.khaivi} name_list_menu={name_list_menu.cate_khaivi} />
        <CollapseMenu menu={menu.ca} name_list_menu={name_list_menu.cate_ca} />
        <CollapseMenu menu={menu.cahap} name_list_menu={name_list_menu.cate_cahap} />
        <CollapseMenu menu={menu.ghe} name_list_menu={name_list_menu.cate_ghe} />
        <CollapseMenu menu={menu.oc} name_list_menu={name_list_menu.cate_oc} />
        <CollapseMenu menu={menu.mongtay} name_list_menu={name_list_menu.cate_mongtay} />
        <CollapseMenu menu={menu.lau} name_list_menu={name_list_menu.cate_lau} />
        <CollapseMenu menu={menu.thit} name_list_menu={name_list_menu.cate_thit} />
        <CollapseMenu menu={menu.ga} name_list_menu={name_list_menu.cate_ga} />
        <CollapseMenu menu={menu.tom} name_list_menu={name_list_menu.cate_tom} />
        <CollapseMenu menu={menu.ochuong} name_list_menu={name_list_menu.cate_oc_huong} />
        <CollapseMenu menu={menu.sodiep} name_list_menu={name_list_menu.cate_so_diep} />
        <CollapseMenu menu={menu.hau} name_list_menu={name_list_menu.cate_hau} />
        <CollapseMenu menu={menu.comchien} name_list_menu={name_list_menu.cate_com_chien} />
        <CollapseMenu menu={menu.chao} name_list_menu={name_list_menu.cate_chao} />
        <CollapseMenu thuc_uong={thuc_uong} name_list_menu={name_list_menu.cate_thuc_uong} loai_thuc_uong={loai_thuc_uong} />
      </div>

      <section id="sanh-tiec"></section>
      <div className='hero_info'>
        <Container>
          <div className="hero">
            <div class="hero__content">
              {
                infomation?.map((i, index) => (
                  <div className="hero__content" key={index}>
                    <h5 className='hero__content-lobby-title'>{t('info.intro_lobby_title')}</h5>
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