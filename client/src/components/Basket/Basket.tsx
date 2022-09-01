import React, {useEffect} from 'react';
import './basket.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import { getBasket} from "../../services/deviceAPI";
import {setBasket} from "../../store/basketSlice";
import BasketItem from "./BasketItem/BasketItem";

const Basket = () => {





    const {basket} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();
    useEffect(() => {
        getBasket().then(data => dispatch(setBasket(data)))
    }, [])
    let prices = 0;
    basket.map((p: any) => {
        prices += Number(p.device.price)
    })

    return (
        <div className='basket-wrapper'>
            <div className='basket-items'>
                <BasketItem />
            </div>

            <div className='total-price'>
                <h1>Total price:<b>{prices} UAH</b></h1>
            </div>

            <div className='interaction-area'>
                <button onClick={()=>{} }>Buy</button>
            </div>
        </div>
    );
};

export default Basket;