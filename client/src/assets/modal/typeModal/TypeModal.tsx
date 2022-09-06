import React, {useEffect} from 'react';
import './typeModal.css'
import ModalWindow from "../ModalWindow";
import {useInput} from "../../../hooks/useInput";
import {useCreateTypeMutation} from "../../../services/DeviceService";


type TModalProps = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const TypeModal = ({isActive, setIsActive}:TModalProps) => {

    const {bind, value, reset} = useInput('')
    const  [createType, {data,error,isError}] = useCreateTypeMutation()
    const handleAddType =()=>{
        createType({name:value});
        if(isError === false && !error){
            reset();
        }
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