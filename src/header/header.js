import React from 'react';
import ReactDOM from 'react-dom';
import styles from './header.css';


const logo = <img className={styles.logo} src='/img/Remy_logo_black.svg'/>;
const video = <video autoPlay muted loop className={styles.video} src="/video/23396707-hd.mov"/>
const tagline = 
<div>
    <h1 className={styles.tagline}>Robotics technology that takes the routine and inefficiency out of cooking</h1>
    <h2 className={styles.tg1t}>
        We believe that the advances in robotics and machine learning will transform the food industry,
        just as they are changing many industries now. In the not-too-distant future,
        the meals we eat will be prepared - chopped, cooked, and served - with the help of  robots.
        This will save people - and businesses - time, lower costs, improve and standardise quality, and reduce food waste.
        <br></br><br></br>
        We are using robotic technology to 
        create a ‘chef robot’ that can help in cooking any cuisine or any dish in the world. 
        This could be used for businesses (dark-kitchens, restaurants, factories), or at home, 
        where people will be able to eat restaurant quality meals at a fraction of the cost. 

   </h2>
</div>
const discover = <h1 className={styles.discover}>DISCOVER MORE</h1>;

const joinus = <h1 className={styles.joinus}>join us</h1>;

const Header = () => (
    <div className={styles.red}>
        {logo}
        {tagline}
        {joinus}
        {discover}
    </div>
)

export default Header;