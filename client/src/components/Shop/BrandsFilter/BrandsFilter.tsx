import './brandsFilter.css';
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {selectBrand} from "../../../store/devicesSlice";


type TBrand = {
    name:string,
    id:string
}

const BrandsFilter: React.FC<TBrand> = ({name,id}) => {
        const {selectedBrand} = useAppSelector(state => state.device)
        const dispatch = useAppDispatch();

    return (
        <div className='brandsStyle'>
            <button className={id === selectedBrand ? `selectedFilterBtn` : `filterBtn` }
                    onClick={()=>dispatch(selectBrand(id))} >{name}</button>
        </div>
    );
};

export default BrandsFilter;