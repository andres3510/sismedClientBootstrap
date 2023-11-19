import sismedLogo from '../assets/sismedLogo.png';
import lupa from '../assets/lupa.png';
import '../styles/styles.css';

export default function Header(){

    return(
        <>
            <img className="logotipo" src={sismedLogo} alt="logo" />
            <form className="buscador">
                <input className="form-control" type="search" placeholder="Buscar" aria-label="Search"/>
                <img className="lupa" src={lupa} alt="lupa"/>
            </form>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example" id="cabecera1">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example" id="cabecera1"/>
                    <button type="button" className="btn btn-custom">Rastreo de pedidos</button>
                    <a href="home.html"><button type="button" className="btn btn-custom" id="btn-custom5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                    </svg></button></a>
             </div>
        </>
    )
}