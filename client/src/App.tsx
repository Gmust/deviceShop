import React, {useEffect, useState} from 'react';
import Router from "./components/Router";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {check} from "./services/authApi";
import {setIsAuth} from "./store/userSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {Triangle} from "react-loader-spinner";
import './app.css'
import {getBasket} from "./services/deviceAPI";
import {setBasket} from "./store/basketSlice";

const App = () => {

    const [loading, setLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch();

    useEffect(() => {
        check().then(data => {
            dispatch(setIsAuth(true))
            getBasket().then(data => dispatch(setBasket(data)))
        }).finally(()=> setLoading(false))
    }, [])
if (loading){

    return  <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        // @ts-ignore
        wrapperClassName="preloader-wrapper"
        visible={true}
    />

}

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Router/>
            </BrowserRouter>
        </>

    );
};

export default App;