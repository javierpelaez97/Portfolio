import "./Experience.css"

export default function Experience(){

    return(
        <>
        <div className="container">

         <h2>Experiencia</h2>
         <div className="container card text-bg-dark ">
            <div className="row ">
                <div className="col-sm">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="34" height="34" stroke-width="2"> <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"></path> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path> </svg> 
                    
                </div>
                <div className="col-md-auto texto">
                    <h3>Dual System S.L</h3>
                    <h5>Técnico de redes y sistémas</h5>
                    <p className="fw-ligh text-break">
                        Mi función principal es solucionar problemas en los crietes de manera 
                        presencial y remota a través de herramientas de ticketing
                    </p>
                </div>
                <div className="col-sm">
                    <span >2018-Actualidad</span>
                </div>

            </div>

         </div>
         <div className="container card text-bg-dark">
            <div className="row">
                <div className="col-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="34" height="34" stroke-width="2">
                <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2"></path>
                <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2"></path>
                </svg>
                </div>
                <div className="col-md-auto texto">
                    <h3>Freelance</h3>
                    <h5>FullStack developer</h5>
                    <p className="fw-light">
                        Creación de administración de webs para la pequeña empresa utilizando las
                        tecnologías antes mencionadas, tambien pequeños proyectos en webs de freelance.
                    </p>
                </div>
                <div className="col-sm">
                    <span>2024-Actualidad</span>
                </div>

            </div>

         </div>
         
        </div>
        </>
    )
        
}