
import img1 from '../imagenes/ADP-23.png'
export const Bootstrap = ({nombre,description,imagen,orcid}) => {
  return (
    <div className="card" >
  <img src={imagen} className="card-img-top" alt="No encontrado"/>
  <div className="card-body">
    <h5 className="card-title">nombre</h5>
    <p className="card-text">{description}</p>
    <a href={orcid} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}
