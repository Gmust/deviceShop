import React, {useEffect, useState} from 'react';
import '../authForm.css'
import {Link, useNavigate} from "react-router-dom";
import { REGISTRATION_ROUTE, SHOP_ROUTE} from "../../../utils/consts";
import {useDispatch} from "react-redux";
import { setIsAuth, setCredentials} from "../../../store/userSlice";
import {useLoginUserMutation} from "../../../services/AuthService";
import jwt_decode from "jwt-decode";

const LoginForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState()

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginUser, {data, isError, error}] = useLoginUserMutation()

    useEffect(() => {
        if (data && data.token) {
            dispatch(setCredentials({user:jwt_decode(data.token),token:data.token}));
            localStorage.setItem('token', data.token);
            dispatch(setIsAuth(true));
            navigate(SHOP_ROUTE)
        } else if (isError) {
            // @ts-ignore
            setErrorMsg(error.data.message)
        }
    }, [data, isError])

    const login = async (e: any) => {
        e.preventDefault()
        await loginUser({email, password})
    }


    return (
        <div className='authWrapper' style={{height: window.innerHeight - 200}}>
            <div className='formWrapper'>
                <h1>Login</h1>
                {errorMsg && <p style={{color: 'red', fontSize: 40}}>{errorMsg}</p>}
                <div className='formInput'>
                    <form>
                        <input className='inputStyle' value={email} onChange={(e) => setEmail(e.target.value)}
                               placeholder={'Enter your email...'}/>
                        <br/>
                        <br/>
                        <input className='inputStyle' value={password} type='password'
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder={'Enter your password...'}/>
                    </form>
                </div>

                <div className='footStyle'>
                    <p>Haven`t got account yet? < Link to={REGISTRATION_ROUTE}> Register</Link></p>
                    <button onClick={(e) => login(e)} className='loginBtn'> Login</button>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;