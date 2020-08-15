import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from '../collection-item/collection-item.component'
import { useSelector } from 'react-redux';
const mapState = ({ productsData }) => ({
    products: productsData.products

});
const CollectionPreview = ({ title, item }) => {
    const { products } = useSelector(mapState);
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>

                {products
                    .map(product => (
                        <CollectionItem key={products.documentID} product={product} />
                    ))}
            </div>
        </div>
    )
};
export default CollectionPreview;