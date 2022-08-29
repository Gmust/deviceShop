import React, {useEffect, useState} from 'react';
import {TiStarFullOutline} from "react-icons/ti";
import './rating.css'
import useWindowDimensions from "../../../hooks/screen";
import {useAppSelector} from "../../../hooks/redux";

type TRating = {
    rating: number
}

const Rating: React.FC<TRating> = ({rating}) => {

    const {width} = useWindowDimensions();
    const [ratingVal, setRatingValue] = useState(0)
    const [hover, setHover] = useState(0)
    const {isAuth} = useAppSelector(state => state.user)

    return (
        <div className='ratingInfoStyle'>
            Your rating is {ratingVal} of 5
            <br/>
            {[...Array(5)].map((star, index) => {

                    const ratingValue = index + 1;
                    return (
                        <label key={index}>
                            <input type='radio' value={ratingValue}
                                   onClick={() => isAuth ? setRatingValue(ratingValue) : alert('You must be logged in!')}/>
                            <TiStarFullOutline style={{cursor: 'pointer'}} size={width > 760 ? "50px" : "20px"}
                                               color={ratingValue <= (hover || ratingVal) ? 'yellow' : 'gray'}
                                               onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)}
                                               onDoubleClick={() => setRatingValue(0)}
                            />
                        </label>
                    )
                }
            )


            }


        </div>
    );
};

export default Rating;