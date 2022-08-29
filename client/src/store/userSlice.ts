import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUser {
    id: null | number,
    email: string | null,
    password: string | null,
    role: string | 'USER'| null,
}

const initialState = {
    user: {} as IUser,
    isAuth: false,
   
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setIsAuth (state,action: PayloadAction<boolean>){
            state.isAuth = action.payload;
        },
        setUser (state , action: PayloadAction<IUser>){
            state.user  = action.payload;
        }


    }
});


export const {setIsAuth, setUser} = userSlice.actions;
export default userSlice.reducer;



