import { useEffect, useState } from 'react';
import Greating from './components/greating';
import Navbar from './components/navbar';
import Login from './pages/Login';
import './css/App.css';
import Content from './components/content';

function App() {

<<<<<<< HEAD
  const [content, setContent] = useState(1);
  const logged = false;
=======
  const logged = true;
  
  const [content, setContent] = useState(1);
  
  function initAW(){
    const aux = document.getElementsByClassName('App')[0]?.clientWidth
>>>>>>> f51c49050dbe16c080b30aebb01b7ad5fc08b111

    return aux;

  }

  const [appWidth, setAW] = useState('')

  useEffect(()=>{
    setAW(initAW());
  },[])
  
  // Maior que 1500 <- width

  return (
    <>
      <Navbar
        type={1}
        logged={logged}
      />
<<<<<<< HEAD

      <div className="flex-column App">
        <Greating
          logged={logged}
        />
        <Login />
        <div className={logged ? ' flex-row App-content ':'display-none'}>
=======
      <div className={appWidth > 1500 ? " flex-column App  App-sb " : " flex-column App "}>
        <Greating/>
        <div className=' flex-row App-content '>
>>>>>>> f51c49050dbe16c080b30aebb01b7ad5fc08b111
          <Navbar
            type={2}
            setContent={setContent}
            logged={logged}
          />
          <Content
            index={content}
          />
        </div>
      </div>
    </>
  );
}

export default App;
