
import gitIcon from "../../../../public/svg/git.svg";
import linkIcon from "../../../../public/svg/icon.svg";
import { useEffect } from "react";

export default function CardProject({datos}) {

  useEffect(()=>{
    console.log("Datos actuales", datos);
    
  },[datos])



  return (
        
          
        <div className="card mb-3 text-bg-dark ">
          <div className="row g-0">
            <div className="col-md-4  ">
              <a href="https://todolistjjpg.netlify.app/" target="_blank">
                <img src={datos.imagen} alt="" className="img-fluid rounded-start" />
              </a>
            </div>
            
            <div className="col-md-8  ">
              <div className="card-body">
                <h5 className="card-title">{datos.name}</h5>
                <p className="card-text">
                  {datos.descripcion}
                </p>
                <p className="card-text">
                  <small>
                    {datos.disclaimer}
                  </small>
                </p>
                <div>
                  <label>Tecnologias:</label>

                  {(()=>{ 
                    let elementos = []
                    for (let i = 0; i < datos.tecnologias.length; i++) {
                        elementos.push(
                          <img src={datos.tecnologias[i]} className="m-0"/>                         
                        );   
                  }
                  return elementos
                  })()}
                
                </div>
                <div className="col-md-4 ">
                  
                  <a
                    href={datos.enlace}
                    className="btn btn-success m-1"
                    target="_blank"
                  >
                    <img src={linkIcon} alt="Icono Link" className="m-0" />
                  </a>
                  <a
                    href={datos.git}
                    className="btn btn-success m-1"
                    target="_blank"
                  >
                  <img src={gitIcon} alt="Icono git" className="m-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      
    
  );
}
