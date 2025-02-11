import "./formation.css"
import upGrade from "../../assets/upgrade.png"
import epla from "../../assets/epla.png"
import estudios from "../../assets/estudios.png"
export default function Formation(){

    return(
        <>
            <div className="container">
                <h2>Formación</h2>
                <div className="container card text-bg-dark p-2">
                    <div className="row">
                        <div className="col-sm-3 ">
                            <img src={upGrade} alt="Upgrade Hub" className="logo"  />
                        </div>
                        <div className="col-sm  mb-3">
                            <h3>Upgrade Hub</h3>
                            <h5>Bootcamp FullStack developer</h5>
                            <p>Bootcamp de formación rápida con todas las habilidades y aptitudes necesarias para el mercado laboral en el ámbito del desarrollo web, Durante este periodo aprendí a compaginar trabajo con estudios, conociendo los tiempos y trabajo en cuanto al desarrollo.
                            Como aptitudes principales nos enseñaron el manejo de lenguajes de Marcas como HTML y CSS para la maquetación, una introducción a la programación con JavaScript para después poder utilizarlo con React y Node</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <span>Sept.2023-Mayo2024</span>
                        </div>
                    </div>
                </div>
                <div className="container card text-bg-dark p-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={epla} alt="EPLA" className="logo" />
                        </div>
                        <div className="col-sm mb-3">
                            <h3>Epla</h3>
                            <h5>-GS Sistemas de Telecomunicaciones e Informáticos</h5>
                            <p>Grado superior Oficial en Sistemas de Telecomunicaciones e Informáticos, nos enseñaron a saber realizar varias tareas como montaje y diseño de redes y televisión, control de CCTV, y mantenimiento de redes eléctricas a nivel doméstico y pequeña industria, el funcionamiento, configuración, montaje y reparación de equipos informáticos entre otros.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <span>Sept.2017-Junio2019</span>
                        </div>
                    </div>
                </div>
                <div className="container card text-bg-dark p-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={estudios} alt="Ies el grao" className="logo"/>
                        </div>
                        <div className="col-sm mb-3">
                            <h3>Ies el grao</h3>
                            <h5>GS DAM semipresencial</h5>
                            <p>Grado superior enfocado a la creación de software para cualquier dispositivo. 
                            Primer Curso: Actualmente, cursándolo, nos están enseñado a crear aplicaciones en un entorno local con Java y BBDD en postgressSQL no solo manejándolas sino creándolas desde cero, incluido el esquema, también lenguajes de marcas como HTML, XML y DTD, y gestión de equipos con SO Linux.</p>
                        </div>
                        <div className="d-flex justify-content-end">
                            <span>Sept.2024-Actualidad</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}