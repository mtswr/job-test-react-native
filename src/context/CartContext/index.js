import React, { createContext } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (product) => {
        //check if product already exists in cart
        const productExists = cart.find(item => item.id === product.id);
        if (productExists) {
            //productExists.quantity += 1;
            setCart([...cart]);
        } else {
            const newCart = [...cart, product];
            setCart(newCart);
            setTotal(total + product.price);
        }
    };

    const removeFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};