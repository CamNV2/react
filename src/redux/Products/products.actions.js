import productsTypes from './products.types';

export const addProductStart = productData => ({
    type: productsTypes.ADD_NEW_PRODUCT_START,
    payload: productData
});

export const fetchProductsStart = () => ({
    type: productsTypes.FETCH_PRODUCTS_START
});
export const fetchProductsSuccess = (products) => ({
    type: productsTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
});
export const fetchProductsFailure = (err) => ({
    type: productsTypes.FETCH_PRODUCTS_FAILURE,
    payload: err
});

export const setProducts = products => ({
    type: productsTypes.SET_PRODUCTS,
    payload: products
});

export const deleteProductStart = productID => ({
    type: productsTypes.DELETE_PRODUCT_START,
    payload: productID
});