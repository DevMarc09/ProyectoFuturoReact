import { Route,Routes,Navigate } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Equipo } from "./Equipo"
import { Estrategias } from "./Estrategias"
import { Objetivos } from "./Objetivos"
import { Home } from "./Home"
import { Canvas } from "./Canvas"


export const Enrutador = () => {

  return (
<>
<NavBar/>
<Routes>
  
  <Route path='/' element={<Home></Home>}></Route>
  <Route path='/equipo' element={<Equipo></Equipo>}></Route>
  <Route path='/estrategias' element={<Estrategias></Estrategias>}></Route>
  <Route path='/objetivos' element={<Objetivos></Objetivos>}></Route>
  <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>

</Routes>
</>
  )
}
