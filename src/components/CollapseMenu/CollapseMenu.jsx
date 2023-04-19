import React, { useState } from 'react';
import "../../styles/collapse-menu.css";
import { AiOutlinePlus } from 'react-icons/ai'
import { Col, Container, Row } from 'reactstrap'

const CollapseMenu = ({ menu, name_list_menu }) => {
    const [openCollapse, setOpenCollapse] = useState(false);

    const toggle = () => {
        setOpenCollapse(!openCollapse);
    };

    return (
        <div className="collapse-container">
            <button onClick={toggle} className={openCollapse ? 'toggle-button_active' : 'toggle-button'}>
                {
                    name_list_menu.map((i) => (
                        <div className="toggle-button-header" key={i.id}>
                            <h4 className="toggle-button-header_title">{i.name}</h4>
                        </div>
                    ))
                }
                <div className="toggle-button-header_icon">
                    <AiOutlinePlus className={openCollapse ? 'toggle-button-icon_active' : 'toggle-button-icon'} />
                </div>
            </button>
            {openCollapse && (
                <>
                    <Container className='collapse-menu-content'>
                        <Row className='collapse-menu-content_row'>
                            {
                                menu.map((data) => (
                                    <Col lg='6' md='6' sm='6' xs='6' key={data.id} className='collapse-menu-content_item'>
                                        <div className="content-detail">
                                            <img src={data.img} alt="food-img" />
                                            <div className='name-price-food'>
                                                <h5>{data.name}</h5>
                                                <h6>{data.price}</h6>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                        <div className='close-collapse'><button onClick={toggle}>close</button></div>
                    </Container>
                </>
            )}
        </div>
    )
}

export default CollapseMenu