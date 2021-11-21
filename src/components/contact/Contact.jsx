import "./contact.css";
import Phone from "../../img/phone.png";
import Addres from "../../img/address.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () =>{
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_bcuhtde', 'template_71l304v', formRef.current, 'user_JLLLQ8t7NLjSBJjsYZZpF')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">¡Contáctame aquí!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon"
                            />
                            +57 3158862124
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Linkedin}
                                alt=""
                                className="c-icon"
                            />
                           www.linkedin.com/in/oscaralopez
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email}
                                alt="" 
                                className="c-icon"  
                            />
                            oscarandreslopezv@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                className="c-icon" 
                                src={Addres} 
                                alt="" 
                            />
                            Medellin Colombia
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>¡Déjame tus datos aquí!  </b> para contactarme con usted.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Nombres" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Tema" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333" }}  rows="S" placeholder="Mensaje" name="message"/>
                        <button>Enviar</button>
                        {done && " "+ "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;