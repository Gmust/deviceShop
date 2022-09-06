import React, {useEffect, useState} from 'react';
import '../authForm.css'
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE} from "../../../utils/consts";
import {useDispatch} from "react-redux";
import {IUser, setIsAuth, setCredentials} from "../../../store/userSlice";
import {useRegisterUserMutation} from "../../../services/AuthService";
import jwt_decode from "jwt-decode";

const RegistrationForm = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [registerUser, {data, isError, error}] = useRegisterUserMutation()

    useEffect(() => {
        if (data && data.token) {
            dispatch(setCredentials({user: data, token: data.token}))
            dispatch(setIsAuth(true))
            localStorage.setItem('token', data.token);
            navigate(SHOP_ROUTE)
        } else if (isError) {
            // @ts-ignore
            setErrorMsg(error.data.message)
        }
    }, [data, isError])

    const register = async (e: any) => {
        e.preventDefault()
        await registerUser({email, password})
    }


    return (
        <div className='authWrapper' style={{height: window.innerHeight - 200}}>
            <div className='formWrapper'>
                <h1>Registration</h1>
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
                    <p>Already have account? < Link to={LOGIN_ROUTE}> Login</Link></p>
                    <button onClick={(e) => register(e)} className='loginBtn'> Register</button>
                </div>

            </div>
        </div>
    );
};

export default RegistrationForm;