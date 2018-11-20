import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Spinner extends React.PureComponent {
    static propTypes = {
        isVisible: PropTypes.bool.isRequired
    };

    render() {
        const { isVisible } = this.props;
        return isVisible ? (
            <div className='spinner-wrapper'>
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            </div>
        ) : null;
    }
}

export default Spinner;
