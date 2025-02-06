import CardProject from "./cardProject/CardProject";


export default function Projects ({datos}){

    
    
    return(
    <>
    <h2>Proyectos</h2>
    <div>
        {datos.map((x)=>(

             <CardProject key={x.id} datos={x}></CardProject> 
            
        ))}
    </div>
    </>
    )
}