import { Contacto } from "./contacto";
import logemail from "../imagenes/email-upload-svgrepo-com.svg";
import logorcid from "../imagenes/ORCID.svg";
import loggacadem from "../imagenes/gooAcademico.jfif";
import logscopus from "../imagenes/scopus.webp";
import img1 from "../imagenes/Maylin_Marquez.jpg";
import img2 from "../imagenes/Alberto_Medina.jpg";
import img3 from "../imagenes/Arials_Hernandez.jpg";
import img4 from "../imagenes/Dianelys_ Nogueira.png";
import img5 from "../imagenes/Jenny_ Correa.png";
import img6 from "../imagenes/Leudis_ Orlando.jpg";
import img7 from "../imagenes/Leonardo_Domínguez.jpg";
import img8 from "../imagenes/Olga_ Gómez.jpg";
import img9 from "../imagenes/Yasniel_ Sánchez.png";

export const Equipo = () => {
  //{ equipo.map(item=><Bootstrap key={item.nombre}  nombre={item.nombre}  description={item.description} imagen={item.imagen} orcid={item.orcid} />)}

  const equipo = [
    {
      id: 1,
      nombre: "PhD. Maylín Marqués León",
      email: "maylin.marques@umcc.cu",
      description:
        "Ingeniera Industrial, 2006 y Máster en Administración de Empresas, 2009, Universidad de Matanzas. Doctora en Ciencias Técnicas, 2013. Profesora titular de la Carrera de Ingeniería Industrial, Universidad de Matanzas y diferentes programas de postgrado. Miembro de proyectos nacionales e internacionales (EFMD, COSUDE). Consultora empresarial. Ha impartido cursos en Chile, Venezuela, México y colaborado con actividades de postgrado en España. Principales líneas de investigación: Administración de Operaciones, Gestión de Procesos, Dirección Estratégica, Gestión de Cadenas de Suministro y Gestión Hospitalaria.",
      imagen: img1,
      orcid: "https://orcid.org/0000-0001-9758-0520",
      egoogacad:
        "https://scholar.google.com.cu/citations?user=GGW_Qu0AAAAJ&hl=es",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 2,
      nombre: "PhD. Alberto Arnaldo Medina León",
      email: "amedinaleon@gmail.com",
      description:
        "Ingeniero Industrial (1980), Maestría en Gestión de Empresas Turísticas, Las Palmas, España (2001), Maestría en Ciencias de la Educación Superior, UM (2011), Doctor en Ciencias Técnicas, UCLV (1992). Orden “Frank País” Segundo Grado (2019); Premio Juan Cristóbal Gundlach a la Excelencia en Científica (2021); Orden Carlos J. Finlay (2020); Miembros de Honor de la ACC (2021), entre otras. Tribunal Nacional de Grado Científico de Cuba para Ingeniería Industrial (2000), y vicepresidente (2008). Distinciones del Ministro de Educación Superior en postgrado (4) y de investigación (1); Premio Academia de Ciencias de Cuba (2020), Profesor Invitado de las Universidades de la UCLV, Cienfuegos, Holguín y Consultante de la UM: Posee 240 artículos y 22 libros como autor o coautor, 60 tesis de maestrías y 22 de doctorado dirigidas. Principales líneas de investigación: gestión por procesos, gestión del conocimiento, gestión de proyectos.",
      imagen: img2,
      orcid: "https://orcid.org/0000-0003-2986-0568",
      egoogacad: "https://scholar.google.com/citations?user=GDjXHx8AAAAJ&hl=en",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 3,
      nombre: "PhD. Arialys Hernández Nariño",
      email: "arialishn.mtz@infomed.sld.cu",
      description:
        "Ingeniera Industrial, 2001. Máster en Administración de empresas, mención Gestión de la producción y los servicios, 2005. Master en Turismo Internacional, 2008. Doctora en Ciencias Técnicas, 2010. Profesor Titular, 2017. Investigador Titular, 2016. Miembro de más de cinco proyectos de Ciencia Tecnología e Innovación, con resultados científicos avalados por las instituciones pertinentes; ha participado en más de 100 ponencias y artículos científicos, destacándose aquellos publicados en revistas de alto impacto en su área del conocimiento, como: International Journal of Innovation (Brasil); Revista San Gregorio (Ecuador); Revista Universidad y Sociedad (Cuba); Revista Venezolana de Gerencia (Venezuela); Ingeniería Industrial (Cuba); Horizonte Sanitario (México); Ingeniare Revista chilena de ingeniería (Chile); DYNA (Colombia) y Revista de Administração (Brasil), Revista Gerencia y Políticas de Salud (Colombia). Principales líneas de investigación: Gestión de procesos y proyectos; Gestión logística, de cadenas de suministro y encadenamientos productivos; Control de Gestión, Gestión de la ciencia y la innovación.",

      imagen: img3,
      orcid: "https://orcid.org/0000-0002-0180-4866",
      egoogacad:
        "https://scholar.google.com.cu/citations?user=s9kqx_wAAAAJ&hl=es",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 4,
      nombre: "PhD. Dianelys Nogueira Rivera",
      email: "nelydaylinyuly@gmail.com",
      description:
        "Ingeniera Industrial (1986), Maestría en Gestión de la Producción, UM (1997), Doctor en Ciencias Técnicas, Cujae (2002). Premio Juan Cristóbal Gundlach a la Excelencia en Científica (2024). Miembro Titular de la ACC (2024). Orden Carlos J. Finlay (2020), Orden “Frank País” Segundo Grado (2019); Orden José Tey (2013); Distinción de la Educación Cubana (2009); Premios CITMA (17), entre otras. Tribunal Nacional de Grado Científico de Cuba para Ingeniería Industrial (2004), y nombrada como Secretaria (2016). Distinciones del Ministro de Educación Superior en postgrado (2) y de investigación (1). Premio Academia de Ciencias de Cuba (2020). Profesor Invitado de la Universidad de Holguín. Posee 190 artículos en revistas científicas y 18 libros como autor o coautor, 46 tesis de maestrías y 20 tesis de doctorado dirigidas. Principales líneas de investigación: control de gestión, gestión por procesos y gestión del conocimiento.",

      imagen: img4,
      orcid: "https://orcid.org/0000-0002-0198-852X",
      egoogacad: "https://scholar.google.es/citations?user=iWEK2QMAAAAJ&hl=es",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 5,
      nombre: "PhD. Jenny Correa Soto",
      email: "jcorrea@ucf.edu.cu",
      description:
        "Ingeniera Industrial. Máster en Ingeniería Industrial, mención Calidad. Master en Eficiencia Energética. Doctora en Ciencias Técnicas. Profesor Auxiliar. Ha dirigido Proyectos Asociados a Programas Nacionales y participado en Proyectos Internacionales, Asociados a programas Nacionales y Territoriales de más de cinco proyectos de Ciencia Tecnología e Innovación, con resultados científicos avalados por las instituciones pertinentes; ha participado en con ponencias en Eventos Internacionales en México, Colombia, Ecuador y Cuba, los artículos científicos más  destacados se encuentran  publicados en revistas de alto impacto en su área del conocimiento, como:  Procedia Computer Science, SSRN, IEEE, Journal of Pharmacy & Pharmacognosy Research, Journal of Engineering Science and Technology, Ingeniería Energética y Revista Universidad y Sociedad. Líneas de investigación: Gestión de la Energía, Gestión medioambiental, Gestión de la Calidad, Economía Circular, Gestión del Mantenimiento, Gestión de la Producción y los Servicios e Innocuidad de los alimentos.",
      imagen: img5,
      orcid: "https://orcid.org/0000-0002-2007-9268",
      egoogacad: "#",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 6,
      nombre: "PhD. Leudis Orlando Vega de la Cruz",
      email: "leudisvegadelacruz@gmail.com",
      description:
        "Ingeniero Industrial (2014), Maestría en Matemática Aplicada e Informática para la Administración, Universidad de Holguín, Holguín (2017), Doctor en Ciencias Técnicas, Uho (2020). Miembro de la Academia de Ciencias de Cuba (2024). Distinción del Ministro de Educación Superior en pregrado (2022). Mención y Premio Nacional Joven Investigador CITMA (2021, 2022). Premio Provincial Academia de Ciencias de Cuba (5), Reconocimiento Provincial por la actividad científica “Rosa Elena Simeón” (3). Posee 100 artículos, 60 tesis de diploma, 15 de maestría y 4 de doctorado dirigidas. Principales líneas de investigación: control interno, matemática aplicada, estadística, logística empresarial, gestión por procesos y gestión de riesgos.",
      imagen: img6,
      orcid: "https://orcid.org/0000-0001-7758-2561",
      egoogacad: "https://scholar.google.es/citations?user=4292hokAAAAJ&hl=es",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 7,
      nombre: "BSc. Eng. Leonardo Ernesto Domínguez Díaz",
      email: "leonardoernestodd@gmail.com",
      description:
        "Ingeniero Industrial, 2022. Profesor Instructor de la Universidad de Matanzas. Se encuentra en el proceso de formación doctoral. Principales líneas de investigación: gestión de procesos, gestión de cadenas de suministro, gestión del conocimiento, logística y gestión de proyectos.",
      imagen: img7,
      orcid: "https://orcid.org/0009-0008-1470-9527",
      egoogacad: "#",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 8,
      nombre: "PhD. Olga Gómez Figueroa",
      email: "olgafiigueroa@gmail.com",
      description:
        "Ingeniera Industrial (1983), Doctora en Ciencias Técnicas (1994), Profesora Titular de la carrera de Ingeniería Industrial de la Universidad de Matanzas y de diferentes formas de postgrado. Miembro del tribunal nacional de doctorado de Ingeniería Industrial. Tutora de seis tesis de doctorado defendidas. Docencia impartida en universidades de Honduras, México, Venezuela y Brasil. Premio Ministro Educación Superior en el área de Trabajo Educativo y Docente Metodológico (2). Autora de varias investigaciones con presentaciones en eventos científicos y con más de 60 publicaciones en revistas científicas entre las que destaca; Revista Ingeniería industrial, Revista Médica Electrónica, Revista DYNA, Revista Atenas Cubana de Administración Pública y Empresarial, Revista Retos Turísticos entre otras.",
      imagen: img8,
      orcid: "https://orcid.org/0000-0002-3017-834X",
      egoogacad: "https://scholar.google.com/citations?user=k6CDf1sAAAAJ&hl=es",
      escopus: "https://www.scopus.com/home.uri",
    },
    {
      id: 9,
      nombre: "PhD. Yasniel Sánchez Suárez",
      email: "yasnielsanchez9707@gmail.com",
      description:
        "Ingeniero Industrial, 2021. Máster en Administración de Empresas, Mención Gestión de la Producción y los Servicios, 2023. Doctor en Ciencias Técnicas, 2023. Profesor Instructor de la Universidad de Matanzas. Miembro del Proyecto Asociado a Programa Nacional Perfeccionamiento de los procesos de la Cadena de Suministro. con resultados científicos avalados por las instituciones pertinentes; ha publicado más de 30 artículos científico, destacándose aquellos publicados en revistas de alto impacto en su área del conocimiento, como: Revista San Gregorio (Ecuador); Revista Universidad y Sociedad (Cuba); Ingeniería Industrial (Cuba); Ingeniare Revista chilena de ingeniería (Chile); DYNA (Colombia) y Revista Cubana de Medicina Militar (Cuba), Revista de Información para Directivos de la Salud (Cuba). Principales líneas de investigación: administración de procesos en salud, gestión por procesos, control de gestión, gestión de cadenas de suministro, logística y gestión de proyectos.",
      imagen: img9,
      orcid: "https://orcid.org/0000-0003-1095-1865",
      egoogacad: "https://scholar.google.es/citations?user=-jrFQv8AAAAJ&hl=es",
      escopus: "https://www.scopus.com/home.uri",
    },
  ];
  return (
    <>
    <p className="font-monospace">Nuestro equipo está formado por expertos de renombre y científicos brillantes, dedicados a compartir su conocimiento y experiencia. Juntos, fomentamos un entorno de aprendizaje colaborativo donde los estudiantes pueden desarrollar habilidades de vanguardia para liderar el camino hacia un futuro más sostenible.</p>

      {equipo.map((item) => (
        <Contacto
          key={item.id}
          nombre={item.nombre}
          email={item.email}
          description={item.description}
          imagen={item.imagen}
          escopus={item.escopus}
          orcid={item.orcid}
          egoogacad={item.egoogacad}
          logoemail={logemail}
          logorcid={logorcid}
          loggacadem={loggacadem}
          logscopus={logscopus}
        />
      ))}
    </>
  );
};
