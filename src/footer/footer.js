import React from 'react';
import ReactDOM from 'react-dom';
import styles from './footer.css';


const contact = <span className={styles.contact}>
                    Contacts<br></br><br></br>
                    Remy Robotics (HQ)<br></br>
                    Port Vell Barcelona, Carrer de l’Escar 26 <br></br>
                    (Gallery Building)<br></br>
                    08039, Barcelona, Spain<br></br><br></br>
                    info@remyrobotics.com
                </span>
const logo = <img className={styles.logo} src='/img/Remy_logo_white.svg'/>;

const Footer = () => (
    <div className={styles.red}>
        {contact}
        {logo}
    </div>
)

export default Footer;