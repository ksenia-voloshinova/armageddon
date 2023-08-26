import {createContext, useState} from 'react';
import list from "./List";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [listCart, setList] = useState([]);
    let isOrdered;
    const addAsteroid = (item) => {
        if (!listCart.includes(item)) {
            setList([...listCart, item]);
        }
    };

    const removeAsteroid = (id) => {
        const newList = listCart.filter((item) => item.id !== id);
        setList(newList);
    };

    const value = {  listCart, addAsteroid, removeAsteroid };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
