

export const Contacto = ({nombre,email,description,imagen,orcid,egoogacad,escopus,logoemail,logorcid,loggacadem,logscopus}) => {

  return (
    <div className="card">
    <img className="card-img-top"  src={imagen} alt="imagen de {nombre}" />

    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">{description}</p>
    <nav className="card-body" >
    <a  href={email}target="_blank"><img src={logoemail} alt="Enviar email"/></a> 
    <a href={orcid} target="_blank"><img src={logorcid}alt="logo de ORCID"/></a>
   <a  href={egoogacad} target="_blank"><img src={loggacadem}  alt="Presione aquí para ir a Google académico"/></a>
   <a  href={escopus} target="_blank"><img src={logscopus}  alt="Presione aquí para ir a Scopus"/></a>
    </nav>
    </div>
  )
}
