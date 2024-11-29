import { Equipo } from "./Equipo"



export const Canvas = () => {
  return (
    <>
    <div className="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasLabel">Equipo de trabajo</h5>
    
  </div>
  <div className="offcanvas-body">
    <Equipo></Equipo>
  </div>
</div>
    </>
  )
}
