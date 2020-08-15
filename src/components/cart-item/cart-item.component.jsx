import React from 'react';

import './cart-item.style.scss'


const CartItem = ({ item: {
    productName,
    productThumbnail,
    productPrice,
    documentID
    , quantity } }) => (


        <div className='cart-item' alt=' item'>
            <img src={productThumbnail} alt='item' />
            <div className='item-details'>
                <span className='name'>{productName}</span>
                <span className='price'>{quantity} x ${productPrice}</span>

            </div>
        </div>
    )
export default CartItem;