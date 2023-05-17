import React from 'react'
import "../css/form.css"

const Form = () => {
    return (
        <form className='form-container'>
            <div className='form-inputs-container'>
                <span>Login</span>
                <input type='email' placeholder='Digite o seu E-mail' required></input>

                <span>Senha</span>
                <input type='password' placeholder='Digite a sua senha' required></input>
            </div>

            <div className='form-button-container'>
                <p className='link'>Esqueceu a senha? Clique aqui</p>
                <button className='in' type='submit'>Entrar</button>
            </div>


        </form>
    )
}

export default Form