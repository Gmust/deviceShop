import React, {useState} from 'react';
import './adminCss.css';
import BrandModal from "../../assets/modal/brandModal/BrandModal";
import TypeModal from "../../assets/modal/typeModal/TypeModal";
import DeviceModal from "../../assets/modal/deviceModal/DeviceModal";

const AdminPage = () => {

    const [brandVisibility, setBrandVisibility] = useState<boolean>(false)
    const [typeVisibility, setTypeVisibility] = useState<boolean>(false)
    const [deviceVisibility, setDeviceVisibility] = useState<boolean>(false)

    return (
        <div className='adminPanelWrapper'>
                <button className='optionStyle' onClick={()=> setTypeVisibility(!typeVisibility)}   >
                    Add type
                </button >

                <button className='optionStyle' onClick={()=> setBrandVisibility(!brandVisibility)}  >
                    Add brand
                </button>

                <button className='optionStyle' onClick={()=> setDeviceVisibility(!deviceVisibility)} >
                    Add device
                </button>

            <BrandModal isActive={brandVisibility} setIsActive={setBrandVisibility}/>
            <TypeModal isActive={typeVisibility} setIsActive={setTypeVisibility}/>
            <DeviceModal isActive={deviceVisibility} setIsActive={setDeviceVisibility}/>



        </div>
    );
};

export default AdminPage;