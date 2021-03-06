import { useState } from 'react'
import Footer from "../components/Footer/Footer";
/* Componentes */
import {Register} from '../components/Register/Register';
import {Login} from '../components/Login/Login';

export const Signin = () =>{

    const [ login, setLogin ] = useState (true);   
    return (
        <>
        <h1 className="text-center my-4">Bienvenid@s a Flor de Liz...</h1>
            <div>
            <div className="text-center">
        {/* {login ? (
          <p>
            ¿No estás registrado? ¿Qué esperás?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setLogin(false)}
            >
              Registrate!
            </Link>
          </p>
        ) : (
          <p>
            ¿Ya estás registrado?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setLogin(true)}
            >
              Logueate!
            </Link>
          </p>
        )} */}
      </div>
      {login ? <Login /> : <Register />}
            </div>
            <Footer/>
        </>
    )
}