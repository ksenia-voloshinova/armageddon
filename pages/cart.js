import MainContainer from "../components/MainContainer";
import List from "../components/List";
import {CartContext} from "../components/CartProvider";
import {useContext} from "react";
import ContainerContentCenter from "../components/ContainerContentCenter";

const Cart = ()  =>{
    const { listCart } = useContext(CartContext);

    return (
        <MainContainer>
            <ContainerContentCenter>
                {listCart.length ? <List asteroids={listCart}/> : <p>Нет астероидов на уничтожение</p>}
            </ContainerContentCenter>

        </MainContainer>
    );
}

export default Cart;
