import React from 'react';
import './navbar.css';
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setIsAuth, setCredentials, IUser} from "../../store/userSlice";
import {BsBasket} from "react-icons/bs";

const Navbar = () => {


    let navigate = useNavigate();
    const {isAuth, user} = useAppSelector(state => state.user)
    const {basket} = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();
    const role = "ADMIN"
    let itemsAmount = basket.length;
    const logOut = () => {
        dispatch(setCredentials({user:{id:null,email:null,role:null,password:null}, token:''}));
        dispatch(setIsAuth(false));
        localStorage.removeItem('token')
    }

    return (
        <div className='navbar'>
            <div className='name'>
                <h1 onClick={() => {
                    navigate(SHOP_ROUTE)
                }}>Device Shop</h1>
            </div>

            {user.role == role && isAuth
                ? <div className='authInfo'>
                    {isAuth && <button className='buttonStyle' onClick={() => {
                        navigate(ADMIN_ROUTE)
                        ;
                    }}>
                        Admin Panel</button>}
                    <button className='buttonStyle' onClick={() => {
                        logOut()
                    }}>Exit
                    </button>
                </div>
                :
                isAuth ?
                    <div className='authInfo'>
                        <button className='basket-icon-style' onClick={()=>navigate(BASKET_ROUTE)}>
                            <div className='items-in-basket'>{itemsAmount}</div>
                            <BsBasket color='white' size='30px'/>
                        </button>

                        <button className='buttonStyle' onClick={() => {
                            logOut()
                        }}>
                            Exit
                        </button>
                    </div>
                    :
                    <div className='authInfo'>
                        <button className='buttonStyle'
                                onClick={() => navigate(LOGIN_ROUTE)}>
                            Login
                        </button>
                    </div>
            }


        </div>
    );
};

export default Navbar;