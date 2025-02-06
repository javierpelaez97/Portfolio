import "./Tecnologias.css"

import reactIcon from "../../../public/svg/React.svg"
import jsIcon from "../../../public/svg/JavaScript.svg"
import htmlIcon from "../../../public/svg/html.svg"
import cssIcon from "../../../public/svg/css.svg"
import angularIcon from "../../../public/svg/angular.svg"
import NodeJsIcon from "../../../public/svg/node.svg"
import gitIcon from "../../../public/svg/git.svg"

export default function Tecnologias(){
    return(
        <>
        <div className="container ">
            <h2>Tecnologías</h2>
            <div class="row ">
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