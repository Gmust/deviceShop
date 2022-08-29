import React, {useState} from 'react';
import './navbar.css';
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setIsAuth, setUser} from "../../store/userSlice";

const Navbar = () => {


    let navigate = useNavigate();
    const {isAuth, user} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();
    const role = "ADMIN"

    const logOut = () => {
        dispatch(setUser({id: null, email: null, role: null, password: null}));
        dispatch(setIsAuth(false));

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

                        <button className='buttonStyle' onClick={() => {logOut()}}>
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