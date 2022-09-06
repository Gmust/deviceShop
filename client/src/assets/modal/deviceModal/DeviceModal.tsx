import React, {useEffect, useState} from 'react';
import './deviceModal.css'
import ModalWindow from "../ModalWindow";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectBrand, selectType, setBrands,  setTypes} from "../../../store/devicesSlice";
import { fetchBrands,  fetchTypes} from "../../../services/deviceAPI";
import {useCreteDeviceMutation} from '../../../services/DeviceService'

type TModalProps = {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
}


const DeviceModal: React.FC<TModalProps> = ({isActive, setIsActive}) => {

    const dispatch = useAppDispatch();
    const [createDevice, {data,isError, error}] = useCreteDeviceMutation();
    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
    }, [])

    const {types, brands, selectedBrand, selectedType} = useAppSelector(state => state.device)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [info, setInfo] = useState([])
    const [file, setFile] = useState<any>()

    const addInfo = () => {
        // @ts-ignore
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const changeInfo = (key:any, value:any, number:any) => {
        // @ts-ignore
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e:any) => {
        setFile(e.target.files[0])
    }


    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId',selectedBrand)
        formData.append('typeId',selectedType )
        formData.append('info', JSON.stringify(info))
        createDevice(formData)
        if(isError === false){
            setIsActive(false)
        }else if (isError == true){
            alert(error)
        }
    }


    const removeInfo = (number: number) => {
        setInfo(info.filter((i: any) => i.number !== number))
    }




    const typeOptions =
        <select className='selectStyle' onChange={e => dispatch(selectType(e.target.value))}>
            {types.map((i: any) => <option key={i.id} value={String(i.id)}>{i.name}</option>)}
        </select>;

    const brandOptions =
        <select className='selectStyle' onChange={e => dispatch(selectBrand(e.target.value))}>
            {brands.map((i: any) => <option key={i.id} value={String(i.id)}>{i.name}</option>)}
        </select>;


    return (
        <ModalWindow isActive={isActive} setIsActive={setIsActive}>
            <div className='deviceModalWrapper'>
                {typeOptions}
                {brandOptions}
                <div className='deviceInputWrapper'>
                    <input className='deviceInput' onChange={e => setName(e.target.value)}
                           type="text" placeholder='Enter device name'/>
                    <input className='deviceInput' onChange={e => setPrice(Number(e.target.value))}
                           type="text" placeholder='Enter device price'/>
                    <input className='deviceInput' onChange={selectFile} type="file" placeholder='Enter device img'/>
                </div>
                <hr/>
                <button className='addPropertyBtn' onClick={addInfo}>Add new property</button>
                <div className='propertyWrapper'>
                    {info.map((i: any) =>
                        <div key={i.number} className='propertyContent'>
                            <input className='propertyInputStyle' type="text" value={i.title}
                                   onChange={e => changeInfo('title', e.target.value, i.number)}
                                   placeholder='Enter property name...'/>
                            <input className='propertyInputStyle' type="text" value={i.description}
                                   onChange={e => changeInfo('description', e.target.value, i.number)}
                                   placeholder='Enter property description...'/>

                            <button className='propertyButtonStyle' onClick={() => removeInfo(i.number)}>Delete</button>
                        </div>
                    )}
                </div>
                <hr/>


            </div>
            <div className='footBtnStyle'>
                <button className={'closeBtn'} onClick={() => setIsActive(!isActive)}>Close</button>
                <button className={'addBtn'} onClick={addDevice}>Add
                </button>
            </div>
        </ModalWindow>
    );
};

export default DeviceModal;