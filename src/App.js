import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header>
        <img className='logo' src='https://www.tzuzulcode.com/_next/image?url=%2Flogo.png&w=64&q=75' alt='TuzuzulCode'/>
        <p className='page-name'>Info Peliculas</p>
        <a href={"/login"}>Iniciar Sesion</a>
      </header>

      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path='/login' element={<Login/>}/>
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
