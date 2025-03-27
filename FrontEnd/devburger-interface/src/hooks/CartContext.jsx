import { createContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({Children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {

    }

    const clearCart = () => {

    }

    const deleteCart = (product) => {

    }

    const increaseCart = (productId) => {

    }

    const decreaseCart = (productId) => {

    }

    return(
        <CartContext.Provider value={{cartProducts, putProductInCart, clearCart, deleteCart, increaseCart,decreaseCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error("useCart must be used within a context");
    }

    return context;
}