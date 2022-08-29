import React, {useState} from 'react';
import './authForm.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {login, registration} from "../../services/authApi";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/redux";
import {IUser, setIsAuth, setUser} from "../../store/userSlice";

const AuthForm = () => {

    const[email,setEmail] = useState<string>('');
    const[password,setPassword] = useState<string>('');

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const auth = async ()=>{
        try{
            let data;
            if(isLogin){
                data = await  login(email,password)
            }else{
                data = await registration(email,password)
            }
            dispatch(setUser(data as IUser))
            dispatch(setIsAuth(true))
            navigate(SHOP_ROUTE)
        }catch (e){
            alert(e.response.data)
        }

    }




    return (
        <div className='authWrapper' style={{height: window.innerHeight - 200}}>
            <div className='formWrapper'>
                <h1>AUTHORISATION</h1>

                <div className='formInput'>
                    <input className='inputStyle' value={email} onChange={(e)=>setEmail(e.target.value)}
                           placeholder={'Enter your email...'}/>
                    <br/>
                    <br/>
                    <input className='inputStyle' value={password} type='password' onChange={(e)=>setPassword(e.target.value)}
                           placeholder={'Enter your password...'}/>
                </div>

                <div className='footStyle'>

                    {isLogin ? <p>Haven`t got account yet? < Link to={REGISTRATION_ROUTE}> Register</Link></p>
                        : <p>Already have account? < Link to={LOGIN_ROUTE}> Login</Link></p>
                    }
                    <button onClick={()=> auth()} className='loginBtn'> {isLogin? "Login" : "Register"}</button>
                </div>

            </div>
        </div>
    );
};

export default AuthForm;