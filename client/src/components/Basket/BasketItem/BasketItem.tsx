import React, {useEffect} from 'react';
import './basketItem.css'
import {BsTrash} from "react-icons/bs";
import { useAppSelector} from "../../../hooks/redux";
import { deleteItemFromBasket} from "../../../services/deviceAPI";


const BasketItem = () => {
    const {basket} = useAppSelector(state => state.basket);

    return (<>
            {
                basket.map((basket: any) =>
                    <div className='basket-item-wrapper' key={basket.id}>
                        <img src={'http://localhost:8080/' + basket.device.img} alt={basket.device.name}/>
                        <h3>{basket.device.name}</h3>
                        <div className='basket-btn'>
                            <button onClick={()=>{
                                deleteItemFromBasket(basket.id).then(response => alert(`Item` +  basket.device.name + `has been successfully deleted from basket `))
                            }} >
                                <BsTrash/>
                            </button>
                        </div>
                    </div>)
            }
        </>
    );
};

export default BasketItem;