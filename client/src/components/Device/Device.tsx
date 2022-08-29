import './device.css';
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {addToBasket, fetchOneDevice} from "../../services/deviceAPI";
import Rating from "./Rating/Rating";
import {useAppSelector} from "../../hooks/redux";

const Device = () => {
    //@ts-ignore
    const [device, setDevice] = useState<any[{}]>({info: []});
    const {id} = useParams();
    const {user} = useAppSelector(state => state.user)

    useEffect(() => {
        fetchOneDevice(Number(id)).then(data => setDevice(data))
    }, [])

    console.log(user.id)

    const handleAddToBasket = () => {
        const formData = new FormData();
        // @ts-ignore
        formData.append('deviceId', id)
        // @ts-ignore
        formData.append('basketId', user.id)
        addToBasket(formData).then(response => alert(`Item` + device.name`has been successfully to the basket `))
    }

    return (
        <div className='deviceWrapper'>
            <div className='imgStyle'>
                <img src={'http://localhost:8080/' + device.img} alt={device.name}/>
            </div>

            <h1 className='nameStyle'>
                {device.name}
                <div className='priceStyle'>
                    {device.price} UAH
                </div>

            </h1>

            <div className='deviceInteractions'>
                <button className='interactionBtnStyle' onClick={handleAddToBasket}>Add to basket</button>
                <button className='interactionBtnStyle'>Buy</button>
            </div>

            <div className='description'>
                <h1>Characteristics:</h1>
                {device.info.map((item: any, index: number) => (
                    <div key={item.id} className='infoStyle'>
                        <a style={{background: index % 2 === 0 ? 'transparent' : 'lightgray'}}>
                            {item.title} : {item.description}
                        </a>
                    </div>
                ))}
            </div>

            <div className='rating'>
                <Rating rating={device.rating}/>
            </div>

        </div>
    );
};

export default Device;