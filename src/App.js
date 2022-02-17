import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';
import { useContext } from 'react';
import { userContext } from './context/UserContext';

function App() {

  const {activeUser} = useContext(userContext)

  const userName = (activeUser) =>{
    console.log(activeUser)
    if(activeUser.name != undefined){
      return activeUser.name
    }else{
      return "Iniciar Sesion"
    }
  }

  return (
    <div className="App">
      <header>
        <a href='/'>
          <img className='logo' src='https://cdn-icons-png.flaticon.com/512/2184/2184561.png'/>
        </a>
        <p className='page-name'>Info Peliculas</p>
        
        <a className='header-login' href={"/login"}>
          <img className='user-logo' src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png'/>
          <p>{userName(activeUser)}</p>
        </a>
      </header>

      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </main>
      
      <footer>
        <p>Designed by: Sergio Andrés Sánchez</p>
      </footer>
    </div>
  );
}

export default App;
