import React from 'react';
import {Triangle} from "react-loader-spinner";
import './preloader.css'

const Preloader = () => {
    return (
        <div className='preloader-wrapper'>
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                visible={true}
            />
        </div>
        )


};

export default Preloader;