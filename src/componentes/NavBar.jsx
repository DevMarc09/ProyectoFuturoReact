import { Link, NavLink } from "react-router-dom"
import face from "../imagenes/facebook-bw.png"
import x from "../imagenes/x-bw.png"
import instagram from "../imagenes/instagram-bw.png"
import rutafuturo from "../imagenes/logo_centro.jpg"
import revista from "../imagenes/revista.png"


export const NavBar = () => {
  return (
    <div className="navbar">
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><img src={rutafuturo} id="logo-ruta-futuro" alt="Logo de ruta futuro" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className="nav-link" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/equipo' className="nav-link" >Conocenos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='objetivos' className="nav-link" >Objetivos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/estrategias' className="nav-link " >Estrategias</NavLink>
        </li>
      </ul>





    </div>
  </div>
</nav>
<div className="redes">
      <img src={face} alt="icono de facebook" />
<img src={instagram} alt="icono de Instagram" />
<img src={x} alt="icono de X" />
<img src={revista} width={80} alt="icono de la Revista ADP23" />
      </div>

    </div>
  )
}
