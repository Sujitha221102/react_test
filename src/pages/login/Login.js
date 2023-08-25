import React from 'react'
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    function submitFn(){
        navigate('/home')
    }
  return (
    <div className='login'>
        <h1>Login to Shop here!</h1>
        <label for="name">Username</label>
        <input type="text" id="name" placeholder="Name"/>
        <label for="email">Email</label>
        <input type="Email" id="email" placeholder="Name"/>
        <button type="submit" onClick={submitFn}>Submit</button>
    </div>
  )
}

export default Login