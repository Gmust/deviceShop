import {$authHost} from './index';
import jwt_decode from "jwt-decode";

export const check = async ()=>{
    const {data} = await $authHost.get(`/api/user/auth`);
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
};