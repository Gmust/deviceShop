import {createSlice, PayloadAction} from "@reduxjs/toolkit";




const initialState = {
    selectedType:  '',
    selectedBrand: '',
    page: 1,
    totalCount: 0,
    limit: 3,
    types: [] ,
    brands: [],
    devices: [],
}


const devicesSlice = createSlice(

    {
        name: 'device',
        initialState,
        reducers: {
            setTypes(state,action){
                state.types = action.payload
            },
            setBrands(state,action){
                state.brands = action.payload
            },
            setDevices(state,action){
                state.devices = action.payload
            },
            setPage(state,action){
                state.page = action.payload
            },
            setTotalCount(state,action){
                state.totalCount = action.payload
            },
            setLimit(){

            },
            selectType(state, action: PayloadAction<string>) {
                state.selectedType = action.payload;
            },
            selectBrand(state, action: PayloadAction<string>) {
                state.selectedBrand = action.payload;
            }

        }


    }
)

export const {selectType, selectBrand, setTypes,setBrands,setDevices,setPage,setTotalCount,setLimit} = devicesSlice.actions;

export default devicesSlice.reducer;