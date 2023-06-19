import React, { useState } from 'react';
import "../../styles/collapse-menu.css";
import { Col, Container, Row } from 'reactstrap'

const CollapseMenu = ({ menu }) => {
    const [openCollapse, setOpenCollapse] = useState(false);

    const toggle = () => {
        setOpenCollapse(!openCollapse);
    };

    // console.log(menu);

    return (
        <div className="collapse-container">
            <button onClick={toggle} className={openCollapse ? 'toggle-button_active' : 'toggle-button'}>
                {
                    menu.filter((i) => i.titleCate).map((i, index) => (
                        <div className="toggle-button-header" key={index}>
                            <h4 className="toggle-button-header_title">{i.titleCate}</h4>
                        </div>
                    ))
                }
            </button>
            {openCollapse && (
                <>
                    <Container className='collapse-menu-content'>
                        <Row className='collapse-menu-content_row'>
                            {
                                menu.filter((i) => i.ID).map((data, index) => (
                                    <Col lg='6' md='6' sm='6' xs='6' key={index} className='collapse-menu-content_item'>
                                        <div className="content-detail">
                                            <div>
                                                <img src={data.IMAGE} alt="food-img" />
                                            </div>
                                            <div className='name-price-food'>
                                                <h5>{data.NAME}</h5>
                                                <h6>{data.PRICE}</h6>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                        <div className='close-collapse'><button onClick={toggle}>Đóng</button></div>
                    </Container>
                </>
            )}
        </div>
    )
}

export default CollapseMenu