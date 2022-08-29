import React from 'react';
import './brandModal.css'
import ModalWindow from "../ModalWindow";
import {useInput} from "../../../hooks/useInput";
import {createBrand} from "../../../services/deviceAPI";


type TModalProps = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const BrandModal: React.FC<TModalProps> = ({isActive, setIsActive}) => {

    const {bind, value, reset} = useInput('')
    const handleAddBrand = () => {
        createBrand({name:value}).then(data => reset());
        setIsActive(false);
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