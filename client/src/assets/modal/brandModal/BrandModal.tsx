import React from 'react';
import './brandModal.css'
import ModalWindow from "../ModalWindow";
import {useInput} from "../../../hooks/useInput";
import {useCreateBrandMutation} from "../../../services/DeviceService";


type TModalProps = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const BrandModal = ({isActive, setIsActive}:TModalProps) => {


    const {bind, value, reset} = useInput('')
    const  [createBrand, {data,error,isError}] = useCreateBrandMutation()
    const handleAddBrand =()=>{
        createBrand({name:value});
        if(isError === false && !error){
            reset();
        }
        setIsActive(false)
    }

    return (
        <ModalWindow isActive={isActive} setIsActive={setIsActive}>
            <div className='brandModalWrapper'>
                <div>
                    <input className='brandInputStyle' {...bind} placeholder="Type brand here..."/>
                </div>

                <div className={'csd'}>
                    <button className='btnStyle' onClick={() => handleAddBrand()}>Add</button>
                    <button className='btnStyle' onClick={() => {
                        setIsActive(!isActive)
                    }}>Close
                    </button>
                </div>
            </div>
        </ModalWindow>
    );
};

export default BrandModal;