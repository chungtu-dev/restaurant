import React from 'react'
import '../../../styles/product-card.css'
const ProductCard = (props) => {

    const { ID, IMAGE, NAME, PRICE } = props.i

    return (
        <div className='product__item' id={ID}>
            <div className="product__img">
                <img src={IMAGE} alt="product-img"/>
            </div>

            <div className="product__content">
                <h5 className="product_name" 
                >{NAME}</h5>
                <div className='d-flex product__price-container'>
                    <span className='product__price'>{PRICE}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard