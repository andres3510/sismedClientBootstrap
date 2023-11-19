import { useRef,useState,useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

import axios from './api/axios';
const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef =useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    
    useEffect(() =>{
        userRef.current.focus();
        
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({user,pwd}),
            {
                headers: { 'Content-Type': 'application/json'}, 
                withCredentials: true
            }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken});
            setAuth({user, pwd, roles, accessToken});
              setUser('');
               setPwd('');
            setSuccess(true);
        }catch(err){
            if (!err?.response) {
                setErrMsg('El servidor no obtuvo respuesta');
            } else if (err.response?.status === 400) {
               setErrMsg('Nombre de usuario o contraseña incorrecta');
            } else if (err.response?.status === 401) {
                setErrMsg('Ingreso no autorizado');
            }
            if(!err?.response){
                setErrMsg('El servidor no obtuvo respuesta')
            }else if(err.rsponse?.status === 400){
              setErrMsg('Nombre de usuario o contraseña incorrecta');
            }else if(err.response?.status === 401){
                setErrMsg('Ingreso no autorizado');
            }else if(err.response?.status === 500){
                setErrMsg('Error del servidor');
            }
        }

    
    }

    return (
        <>
           {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br/>
                <p>
                 <a href="#">Go to home</a>
                </p>
                
            </section>
           ) : (
            
            
        <section>
            <p ref={errRef} className={errMsg ? "errMsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nombre de usuario:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    />  
                
                 <label htmlFor="Contrasena">Contraseña:</label>

                <input
                    type="password"
                    id="Contrasena"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    />  
                    <button>Sign In </button>
                    <p>
                        ¿Olvidaste tu contraseña? <br/>
                        <span className="line">
                            {/*put router link here */}
                        </span>
                    </p>
            </form>    
        </section>
           ) }
           </>



                                                     )
}

    export default Login 