import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Equipo } from './componentes/Equipo'

import './estilos/estyle.css'
import { BrowserRouter } from 'react-router-dom'
import { Enrutador } from './componentes/Enrutador'
import { Header } from './componentes/Header'
import { Canvas } from './componentes/Canvas'
import { CSSGRID } from '../Prueba/CSSGRID'
import { Footer } from './componentes/Footer'


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <StrictMode>
    
    <Enrutador></Enrutador>
    <Footer></Footer>
  </StrictMode>,
 </BrowserRouter>

)
