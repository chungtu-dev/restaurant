import React from 'react'
import { Container } from 'reactstrap'
import '../styles/page-not-found.css'
import page_not_found_svg from '../assets/images/page-not-found.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <Container>
            <img src={page_not_found_svg} alt="vector" className='img-page-not-found' />
            <div class="wrapper">
                <h3>Oái!!...</h3>
                <p class="message">Trang bạn tìm kiếm không tồn tại</p>
                <div className='go-back'>
                <Link to={"/"} className="go-back-btn">Quay lại</Link>
                </div>
            </div>
        </Container>
    )
}

export default PageNotFound