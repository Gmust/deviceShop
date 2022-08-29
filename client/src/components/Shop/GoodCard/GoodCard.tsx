import React from 'react';
import './goodCard.css'
import {TiStarFullOutline} from "react-icons/ti";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../../../utils/consts";



type TGoods ={
    name: string,
    price: number,
    rating: number,
    img: string,
    id: number
}

const GoodCard: React.FC<TGoods> = ({name,price,rating,img,id}) => {

    const navigate = useNavigate();


    return (
        <div onClick={()=> navigate(DEVICE_ROUTE + `/${id}` )} className='goodCardWrapper'>
            <img src={'http://localhost:8080/' + img} alt={name}/>
            <div className='textStyle'>
                <h3>{name}</h3>
                <div>{price} UAH</div>
            </div>
            <div className='ratingStyle'>
                {rating}/5 <TiStarFullOutline color='yellow'/>
            </div>

        </div>
    );
};

export default GoodCard;

