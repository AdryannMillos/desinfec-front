import { useEffect, useState } from 'react';
import Greating from './components/greating';
import Navbar from './components/navbar';
import './css/App.css';
import Content from './components/content';

function App() {

  const logged = true;
  
  const [content, setContent] = useState(1);
  
  function initAW(){
    const aux = document.getElementsByClassName('App')[0]?.clientWidth

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
      <div className={appWidth > 1500 ? " flex-column App  App-sb " : " flex-column App "}>
        <Greating/>
        <div className=' flex-row App-content '>
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
