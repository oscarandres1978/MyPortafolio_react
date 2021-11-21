import "./intro.css";
import Me from "../../img/me.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hola, Mi nombre es </h2>
                    <h1 className="i-name">Oscar A Lopez</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Front-end</div>
                            <div className="i-title-item">React.js</div>
                            <div className="i-title-item">Back-end</div>
                            <div className="i-title-item">Node.js</div>
                        </div>
                    </div>
                    <p className="i-desc">
                      He desarrollado varios proyectos para clientes que necesitaban un portal web
                      para dar a conocer sus negocios.
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            
        </div>
    )
}

export default Intro
