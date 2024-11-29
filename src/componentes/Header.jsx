import { Enrutador } from "./Enrutador"


export const Header = () => {
  return (
    <header>
    <div className="content">
       <div className="menu container">
 <a href="/index.html" className="logo">Logo</a>
 <input type="checkbox"  id="menu"/>
 <label >
 <img src="../imagenes/logo_centro.jpg" className="menu-icono" alt="Icono del proyecto"/>
 </label>
<Enrutador></Enrutador>
       </div>
    </div>
        
    </header>
  )
}
