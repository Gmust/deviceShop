import React, {useEffect} from 'react';
import './typeModal.css'
import ModalWindow from "../ModalWindow";
import {useInput} from "../../../hooks/useInput";
import {createType} from "../../../services/deviceAPI";


type TModalProps = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const TypeModal: React.FC<TModalProps> = ({isActive, setIsActive}) => {

    const {bind, value, reset} = useInput('')

    const handleAddType =()=>{
        createType({name:value}).then( data =>reset())
        setIsActive(false)
    }

    return (
        <ModalWindow isActive={isActive} setIsActive={setIsActive}>
            <div className='typeModalWrapper'>
                <div>
                    <input className='typeInputStyle' {...bind} placeholder="Type type here..."/>
                </div>

                <div className={'csd'}>
                    <button className='btnStyle' onClick={() => handleAddType()}>Add</button>
                    <button className='btnStyle' onClick={() => {setIsActive(!isActive)}}>Close</button>
                </div>
            </div>
        </ModalWindow>
    );
};

export default TypeModal;