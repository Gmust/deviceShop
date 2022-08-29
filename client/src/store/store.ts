import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import DeviceSlice from "./devicesSlice";
import BasketSlice from "./basketSlice";

const rootReducer = combineReducers({
            user: UserSlice,
            device: DeviceSlice,
            basket: BasketSlice,
});


export const setupStore =() =>configureStore({
    reducer:rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

