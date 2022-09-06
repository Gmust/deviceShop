import React, {useEffect} from 'react';
import './shop.css'
import GoodCard from "./GoodCard/GoodCard";
import TypeBar from "./TypeBar/TypeBar";
import BrandsFilter from "./BrandsFilter/BrandsFilter";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchBrands, fetchDevices, fetchTypes} from "../../services/deviceAPI";
import {setBrands, setDevices, setTotalCount, setTypes} from "../../store/devicesSlice";
import Paginator from "../../assets/pagination/Paginator";


const Shop = () => {

    const {types, brands, devices, limit, page, selectedBrand, selectedType} = useAppSelector(state => state.device)
    const dispatch = useAppDispatch();


    useEffect(  () => {
            fetchTypes().then(data => dispatch(setTypes(data)))
            fetchBrands().then(data => dispatch(setBrands(data)))
            fetchDevices(null, null, 1, limit).then(data => {
                dispatch(setDevices(data.rows))
                dispatch(setTotalCount(data.count))
            })
    }, [])


    useEffect(() => {
        fetchDevices(selectedType, selectedBrand, page, limit).then(data => {
            dispatch(setDevices(data.rows))
            dispatch(setTotalCount(data.count))
        })
    }, [page, selectedType, selectedBrand])


    return (<>
                <div className='showWrapper'>
                    <div className='types'>
                        {
                            types.map((item: { name: string; id: string }) => (
                                <TypeBar name={item.name} id={item.id} key={item.id}/>
                            ))}
                    </div>

                    <div className='brands'>
                        {brands.map((item: { name: string; id: string }) => (
                            <BrandsFilter name={item.name} id={item.id} key={item.id}/>
                        ))}

                    </div>

                    <div className='goods'>
                        {devices.map((item: { name: string; id: number; price: number; rating: number; img: string }) => (
                            <GoodCard id={item.id} name={item.name} price={item.price} rating={item.rating}
                                      img={item.img}
                                      key={item.id}/>
                        ))}
                        <br/>
                    </div>

                    <div className='paginator'>
                        <Paginator/>
                    </div>

                </div>
        </>
    );
};

export default Shop;