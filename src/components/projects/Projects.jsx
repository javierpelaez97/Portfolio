import CardProject from "./cardProject/CardProject";


export default function Projects ({datos}){

    
    
    return(
    <>
    <div className="container">
        <h2>Proyectos</h2>
        <div className="p-4">
            {datos.map((x)=>(

                <CardProject key={x.id} datos={x}></CardProject> 
            
                
            ))}
        </div>

    </div>
    </>
    )
}