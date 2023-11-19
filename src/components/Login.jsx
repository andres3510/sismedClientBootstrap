import '../styles/login.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import perfilUsuario from '../assets/perfilUsuario.png';

export default function Login() {
  return (
        <div className="container">
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-12 col-xl-12">
            <div className="contenedorLogin">
                <div className="login-box">
                <img className="imagenPerfil" src= {perfilUsuario} />
                <h5 className="tituloIniciarSesion">INICIAR SESIÓN</h5>
                <br />
                <form>
                    <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    placeholder="Usuario"
                    />
                    <input
                    type="password"
                    name="contrasena"
                    id="contrasena"
                    placeholder="contraseña"
                    />
                    <Button variant="primary">Iniciar Sesión</Button>{' '}
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </form>
                
                </div>
            </div>
            </div>
        </div>
        </div>
  );
}
