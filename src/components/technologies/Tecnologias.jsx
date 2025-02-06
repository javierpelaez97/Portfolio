import "./Tecnologias.css"

import reactIcon from "../../../public/assets/svg/React.svg"
import jsIcon from "../../../public/assets/svg/JavaScript.svg"
import htmlIcon from "../../../public/assets/svg/html.svg"
import cssIcon from "../../../public/assets/svg/css.svg"
import angularIcon from "../../../public/assets/svg/angular.svg"
import NodeJsIcon from "../../../public/assets/svg/node.svg"
import gitIcon from "../../../public/assets/svg/git.svg"

export default function Tecnologias(){
    return(
        <>
        <div className="container ">
            <h2>Tecnologías</h2>
            <div className="row ">
                    <div className=" btn col ">
                        <img src={htmlIcon} alt="Icono HTML"  className="m-0"/>
                        <p>HTML</p>
                    </div>

                    <div className=" btn col ">
                        <img src={cssIcon} alt="Icono Css" className="m-0" />
                        <p>CSS</p>
                    </div>
                
                    <div className=" btn col  ">
                        <img src={jsIcon} alt="Icono JavaScript" className="m-0" />
                        <p>JavaScript</p>
                    </div>
                
                    <div className=" btn col ">

                            <img src={reactIcon} alt="Icono React" className="m-0" />
                        <p>React</p>
                    </div>
                
                    <div className=" btn col ">
                        <img src={angularIcon} alt="Icono Angular" className="m-0" />
                        <p>Angular</p>
                    </div>
                
                    <div className=" btn col  ">
                        <img src={NodeJsIcon} alt="Icono node "  className="m-0"/>
                        <p>Node.js</p>
                    </div>

                
                    <div className=" btn col  ">
                        <img src={gitIcon} alt="Icono git" className="m-0" />
                        <p>Git</p>
                    </div>

            </div>
            
            

            
            

        </div>
        </>
    )
}