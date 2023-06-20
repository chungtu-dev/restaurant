import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo_yen.png";
import { getListInfo } from "../../api";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [infomation, setInfomation] = useState([])

  const listInfo = () => {
    getListInfo().then((info) => {
      const contentList = new Array(Object.assign({}, ...info.map(i => ({ [i.SUB_ID]: i.CONTENT }))))
      setInfomation(contentList)
    })
  }

  useEffect(() => {
    listInfo()
  }, [])

  return (
    <footer className="footer" id="lien-he">
      <Container >
        <Row>
          <Col lg="3" md="3" sm="6">
            <div className=" footer__logo hello__footer">
              <Link to={'/'}><img src={logo} alt="logo" /></Link>
              {/* <h5>YenLongHai</h5> */}
              <p>
                &#127867; NHAHANGYENLONGHAI &#127860; Ẩm thực Châu Á
              </p>
              <p>
                Kính chào quý khách &#129309;
              </p>
              <hr style={{ width: '100%', border: '1px solid #fff' }} />
              {/* <p className="copyright__text" style={{color:'#2e3131'}}>
                Dev: <a href="https://ngchungtu.vercel.app/">NgChungTu</a>
              </p>
              <p className="copyright__text" style={{color:'#2e3131'}}>
                BA: NgocAnhLaura
              </p> */}
            </div>
          </Col>

          {
            infomation?.map((i, index) => (
              <Col lg="3" md="3" sm="6" key={index}>
                <ListGroup className="deliver__time-list">
                  <ListGroupItem className=" delivery__time-item border-0 ps-0">
                    <span>Địa chỉ:</span>
                    <p>{i.address}</p>
                  </ListGroupItem>
                  <ListGroupItem className=" delivery__time-item border-0 ps-0">
                    <span>Điện thoại: </span>
                    <p><a href={`tel:${i.hotline}`} className="quick-tell">{i.hotline}</a></p>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            ))
          }

          <Col lg="3" md="3" sm="6">
            <div className="map-container">
              <h5>Địa điểm</h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.4537713431746!2d107.23929559999999!3d10.385487999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317577867c111c39%3A0x8534c74204b7ab9c!2zUXXDoW4gxINuIGdpYSDEkcOsbmggWeG6v24gTG9uZyBI4bqjaQ!5e0!3m2!1svi!2s!4v1684257889971!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map-place"></iframe>
            </div>
          </Col>

          <Col lg="3" md="3" sm="6">
            <div className="map-container">
              <h5>Fanpage Facebook</h5>
              <div>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100088807146937&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map-place"></iframe>
              </div>
            </div>
            {/* https://developers.facebook.com/docs/plugins/page-plugin/ */}
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;