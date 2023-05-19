import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './css/App.css';

import Navbar from './components/navbar';
import Hub from './pages/hub';
import Login from './pages/Login';

function App() {

  //  Mude o status de logado aqui
  const [logged, setLogged] = useState(false);
    
  function initAW(){
    const aux = document.getElementsByClassName('App')[0]?.clientWidth

    return aux;

  }

  const [appWidth, setAW] = useState('')

  useEffect(()=>{
    setAW(initAW());
    setLogged(localStorage.getItem('authToken') ? true : false)
  },[])
  
  // Maior que 1500 <- width

  return (
    <>

      <Navbar
        type={1}
        logged={logged}
        setLogged={setLogged}
      />
      <div className={appWidth > 1500 ? " flex-column App  App-sb " : " flex-column App "}>
        <Routes>
          <Route
            path='/'
            element={logged ? <Hub/> : <Login/>}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
