import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/header.js';
import Offices from './offices/offices.js';
import Hr from './hr/hr.js';
import Footer from './footer/footer.js';

const App = () => (
    <div id="root">
    <Header />
    <Offices />
    <Hr />
    <Footer />
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));