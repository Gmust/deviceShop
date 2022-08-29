import React from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../Routes";
import {SHOP_ROUTE} from "../utils/consts";
import {useAppSelector} from "../hooks/redux";

const Router = () => {


    const {isAuth} = useAppSelector(state => state.user)

    return (
        <>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <>
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                </>
                <>
                    <Route
                        path="*"
                        element={<Navigate to={SHOP_ROUTE}  />}
                    />
                </>
            </Routes>

        </>


    );
};


export default Router;