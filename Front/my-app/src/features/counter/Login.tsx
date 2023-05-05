import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginAsync,
         logout,
         selectLogged,
         aboutAsync,
         contactAsync,
         registerAsync,
        //  selectUsr,
         } from './loginSlice';


const Login = () => {
    const logged = useAppSelector(selectLogged);
    // const usr = useAppSelector(selectUsr);

    const dispatch = useAppDispatch();
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")

  return (
    <div>
        <input placeholder='username' onChange={(e) => setusername(e.target.value)}/>
        <input placeholder='email' onChange={(e) => setemail(e.target.value)}/>
        <input placeholder='password' onChange={(e) => setpassword(e.target.value)}/>


        {logged ? <button onClick={() => dispatch(dispatch(logout()))}>Logout</button> :
        <>
          <button onClick={() => dispatch(loginAsync({username: username, password: password})) }>Login</button>  
          <button onClick={() => dispatch(registerAsync({username: username, email: email, password: password})) }>register</button>
        </>
        }
        {logged ? <div>Welcome {username}</div> : <div style={{color: 'red'}}>Please Log-in or Register</div>}
        <br/>
        <button onClick={() => dispatch(aboutAsync())}>ABOUT - permission</button>
        <button onClick={() => dispatch(contactAsync())}>contact - no permission required</button>

    </div>
  )
}

export default Login