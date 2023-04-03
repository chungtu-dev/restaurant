import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/product-card.css'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'

const ProductCard = (props) => {
    const {id, title, image01, price} = props.i //các thành phần trong products được props thông qua biến i
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id, title, image01, price
        }))
    }

  return (
    <div className='product__item'>
        <div className="product__img">
            <img src={image01} alt="product-img" className='w-50'/>
        </div>

        <div className="product__content">
            <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='product__price'>{price}đ</span>
                <button className='addToCart__btn' onClick={addToCart}>Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard