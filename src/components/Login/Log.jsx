import React from 'react'
import '../../components/Login/Log.css'

const Log = () => {
  return (
    <div className='Fatherbox'>
        <div className='Designbox'>
            <h1>Bienvenido!</h1>
        </div>

        <div className='Loginbox'>
            <div className='box'>
                <h1>Login</h1>
                <p className='plogin'>¡Bienvenido! Por favor, entra en tu cuenta.</p>
                <div className='boxusername'>
                <label htmlFor="label">Username</label>
                <input type="text" placeholder='username'/>
                </div>

                <div className='boxpassword'>
                <label htmlFor="label">Password</label>
                <input type="password" placeholder='xxxxxx'/>
                    </div>           

           

                <div className='boxremember'>
                    <div className='Recuerdaboxxx'>
                    <input type="checkbox" />
                    <p>Recuerdame</p> 
                    </div>                   
             
                <a href="">Olvidaste la contraseña¡?</a>
                </div>

                <button className='Buttonlogin'>Login</button>
              

                <div className='boxeresnuevo'>
                    <p>Eres nuevo!?</p> 
                    <a href="">Registrate</a></div>
                
               

                </div>
        </div>
    </div>
  )
}

export default Log