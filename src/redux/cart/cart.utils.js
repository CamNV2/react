export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.documentID === cartItemToAdd.documentID
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.documentID === cartItemToAdd.documentID ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.documentID === cartItemToRemove.documentID
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.documentID !== cartItemToRemove.documentID)
    }

    return cartItems.map(
        cartItem => cartItem.documentID === cartItemToRemove.documentID ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}