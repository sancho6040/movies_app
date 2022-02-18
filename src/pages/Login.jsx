import React, { useContext, useRef} from 'react'
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';

export default function Login() {

  const {users, setUser} = useContext(userContext)

  const signIn = (event) => {
        event.preventDefault()
        const {email,password} = event.target

        console.log(email.value,password.value)

        //registro: "https://backendtzuzulcode.wl.r.appspot.com/auth/signup"
        //Datos para el registro: firstName,lastName,birthday,city,email,password
        fetch("https://backendtzuzulcode.wl.r.appspot.com/auth/login",{
            method:"POST",
            credentials:'include',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email.value,
                password:password.value
            })
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
            setUser({logged:true,name:user.data.firstName})
        }).catch(error=>setUser({logged:false}))
        
    }

  return <>
    <form className='login' onSubmit={signIn}>
      <input className='login-input' type="email" name="email" placeholder='username'/>
      <input className='login-input' type="password" name="password" placeholder='password'/>
      <button>Iniciar sesion</button>
    </form>
  </>
}
