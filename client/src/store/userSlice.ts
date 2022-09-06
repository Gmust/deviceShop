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
    token: ''
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setIsAuth (state,action: PayloadAction<boolean>){
            state.isAuth = action.payload;
        },
        setCredentials (state , {payload:{user,token}}: PayloadAction<{ user: IUser; token: string }>){
            state.user  = user;
            state.token = token;
        },



    }
});


export const {setIsAuth, setCredentials} = userSlice.actions;
export default userSlice.reducer;



