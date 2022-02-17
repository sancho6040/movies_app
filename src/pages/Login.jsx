import React, { useContext, useRef} from 'react'
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';

export default function Login() {

  const {users, activeUser, setActiveUser} = useContext(userContext);

  const user = useRef()
  const password = useRef()

  const iniciarSesion = (event) =>{
    event.preventDefault()

    setActiveUser({name: user.current.value, password: password.current.value})
    
    return <Navigate to="/"/>
  }

  return <>
    <form className='login' onSubmit={iniciarSesion}>
      <input className='login-input' type="text" ref={user} name="user" placeholder='username'/>
      <input className='login-input' type="password" ref={password} name="password" placeholder='password'/>
      <button>Iniciar sesion</button>
    </form>
  </>
}
