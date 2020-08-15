import React from 'react';
import { connect } from 'react-redux';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';



const CollectionItem = ({ product, addItem }) => {
    const {
        productName,
        productThumbnail,
        productPrice,
        documentID
    } = product;

    // const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${productThumbnail})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{productName}</span>
                <span className='price'>{productPrice}</span>
            </div>
            <CustomButton onClick={() => addItem(product)} inverted >ADD TO CART </CustomButton>
        </div>

    );
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);