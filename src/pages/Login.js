import React from 'react'
import Form from '../components/form'
import Logo from '../img/Logo.png'
import "../css/Login.css"

const Login = () => {
    return (
        <div className='container'>
            <header className='title-login'>
                <img className='logo' src={Logo} />
                <p id='title'>Bem-vindo ao sistema Desinfec!</p>
                <p id='description'>Faça o login para continuar</p>
            </header>

            <div>
                <Form />
            </div>

        </div>

    )
}

export default Login