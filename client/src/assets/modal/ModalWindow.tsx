import React from 'react';
import './modalWindow.css'

type TModalProps = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    children: any
}

const ModalWindow: React.FC<TModalProps> = ({isActive, setIsActive, children}) => {
    return (
        <div className={isActive ? 'modal active' : 'modal'} onClick={() => setIsActive(!isActive)}>
            <div className={isActive ? 'modalContent active' : 'modal'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;