import './typeBar.css'
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectType} from "../../../store/devicesSlice";


type TType = {
    name: string;
    id:string
};


const TypeBar: React.FC<TType> = ({name,id})=> {
    const dispatch = useAppDispatch();



    return (
                <ul className='listStyle'>
                    <li onClick={()=> dispatch(selectType(id))}>{name}</li>
                    <br/>
                </ul>
    );
};

export default TypeBar;