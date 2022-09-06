import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import DeviceSlice from "./devicesSlice";
import BasketSlice from "./basketSlice";
import {authService} from "../services/AuthService";
import {deviceService} from "../services/DeviceService";

const rootReducer = combineReducers({
            user: UserSlice,
            device: DeviceSlice,
            basket: BasketSlice,
            [authService.reducerPath]: authService.reducer,
            [deviceService.reducerPath]: deviceService.reducer
});


export const setupStore =() =>configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authService.middleware, deviceService.middleware)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

