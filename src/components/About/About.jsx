import "./About.css";
import aboutImage from "../../assets/IMG_8006.png";
import pdfFile from "../../assets/JavierPelaezCV.pdf"

export default function About() {

    const openPDF = () => {
        window.open(pdfFile, "_blank")
    }

  return (
    <>
      <div className="container   ">
        <div className="row ">
        <img
          src={aboutImage}
          alt="Mi Foto"
          className="img-fluid rounded w-25 h-25  "
        />
        <div className="disposicion col ">
          <div >
            <h1>Javier Pelaez Giménez</h1>
            <h2>Programador web FullStack Junior</h2>
            <div className="disposicion">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
                stroke-width="2"
              >
                {" "}
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>{" "}
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>{" "}
              </svg>
              <p>Valencia, España</p>
            </div>
        <div className="disposicion ">
            <button className="btn btn-outline-light" onClick={openPDF}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 17h6"></path>
                <path d="M9 13h6"></path>
                </svg>
            </button>
            <button className="btn btn-outline-light">
                <a href="https://www.linkedin.com/in/jpelaezg/" target="_blank">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
                </a>
            </button>
            <button className="btn btn-outline-light"  >
                <a href="https://github.com/javierpelaez97" target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                </a>
            </button>
        </div>
        <div>
            <a href="mailto:javierpealezgimenez@gmail.com" target="_blank">
            <button className="btn btn-info">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="24"
                height="24"
                stroke-width="2"
                >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
                </svg>
                javierpelaezgimenez@gmail.com
            </button>

            </a>
        </div>
          </div>
        </div>
        </div>
      </div>
      <div className="container">
        <h2>Sobre mí</h2>
        <p>Soy desarrollador Full Stack Junior, actualmente trabajo en un ámbito relacionado con las tecnologías,hace 2 años empecé mi aventura en la programación estoy enfocado en seguir creciendo como programador y con muchas ganas de poder utilizar mis habilidades y conocimientos.</p>

      </div>
    </>
  );
}
