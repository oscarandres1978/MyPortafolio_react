import "./about.css";
import Award from "../../img/cesde.jpg";
import Oscar from "../../img/oscar.jpg";
import Platzi from "../../img/platzi.JPG";

const About = () =>{
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img
                     src={Oscar}
                    alt=""
                    className="a-img"
                />
                </div>
            </div>
            <div className="a-right"><br/>
        <h1 className="a-title">Acerca de mí</h1>
        <p className="a-sub">
          Oscar Andrés López Velásquez.
        </p>
        <p className="a-desc">
          Soy tecnólogo y técnico en desarrollo de software.
          Antes de ingresar al mundo web, obtuve experiencia de 12 años en el sector financiero en procesos operativos.
          <br/>
          Estudios web: <br/>
          Curso de Front-end Developer, Curso de React practico, Curso de Asincronismo JavaScript, Curso de EcmaScript6, <br/>
          Apasionado del desarrollo web, por eso estoy enfocado en aprender y ejecutar las herramientas más
          demandadas en la parte del front-end como:  React.Js, Angular, Vue y complementar en el back-end 
          con Node.Js para convertirme en un futuro en Desarrollador Full-Stack.

        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Técnico Asistente en Desarrollo de Software 2019</h4>
            <p className="a-award-desc">
              Cesde Medellín -Colombia.
            </p>
          </div>
        </div>

        <div className="a-award">
          <img src={Platzi} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Curso de React 2021</h4>
            <p className="a-award-desc">
              Platzi Plataforma tecnológica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;