import React, { useContext, useRef, useState } from 'react'
import { userContext } from '../context/UserContext';

export default function Login() {

  const {users, activeUser, setActiveUser} = useContext(userContext);

  const user = useRef()
  const password = useRef()

  const iniciarSesion = (event) =>{
    event.preventDefault()

    setActiveUser({name: user.current.value, password: password.current.value})

    console.log("actveUser", activeUser.name)
    console.log("users", users)
    console.log(user.current.value, password.current.value)
  }

  return <>
    <form onSubmit={iniciarSesion}>
      <input type="text" ref={user} name="user"/>
      <input type="password" ref={password} name="password"/>
      <button className='button'>Iniciar sesion</button>
    </form>
  </>
}
