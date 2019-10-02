import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import logo from '~image/Remy_logo_white.svg';
import './styles.scss';

smoothscroll.polyfill();

class Footer extends React.PureComponent {
  static propTypes = {
    onOpenPrivacyPolicy: PropTypes.func.isRequired,
  };

  handleOpenPrivacyPolicy = () => {
    const { onOpenPrivacyPolicy } = this.props;

    onOpenPrivacyPolicy();
    window.scroll({ top: 0, left: 0 });
  };

  render() {
    const currentYear = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="countries">
          <div className="country">
            <div className="title">
              Barcelona
            </div>

            <div className="address">
              <span>Remy Robotics (HQ)</span>
              <span>Port Vell Barcelona</span>
              <span>Carrer de l’Escar 26 (Gallery Building)</span>
              <span>Passeig de Joan de Borbó,</span>
              <span>99, 1st floor</span>
              <span>08039</span>
              <span>Barcelona, Spain</span>
            </div>
          </div>

          <div className="country">
            <div className="title">
              London
            </div>

            <div className="address">
              <span>Kinetik</span>
              <span>4th floor, Beaumont House</span>
              <span>Kensington Village</span>
              <span>W14 8TS</span>
              <span>London, United Kingdom</span>
            </div>
          </div>

          <div className="country">
            <div className="title">
              Berlin
            </div>

            <div className="address">
              <span>Kinetik</span>
              <span>Friedrichstrasse 68,</span>
              <span>Berlin</span>
              <span>10117</span>
              <span>Germany</span>
            </div>
          </div>

          <div className="country">
            <div className="title">
              Moscow
            </div>

            <div className="address">
              <span>Kinetik</span>
              <span>8th floor, Leningradsky prospect</span>
              <span>36 bld. 11</span>
              <span>125167</span>
              <span>Moscow, Russia</span>
            </div>
          </div>

          <div className="country">
            <div className="title">
              Los Angeles
            </div>

            <div className="address">
              <span>Kinetik</span>
              <span>520 Broadway, Suite 200</span>
              <span>Santa Monica</span>
              <span>90401</span>
              <span>California, USA</span>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="logo-line">
            <img
              src={logo}
              className="logo"
            />
            <span className="copyright">Copyright © { currentYear }. All rights reserved.</span>
          </div>
          <span
            className="privacy-policy"
            onClick={this.handleOpenPrivacyPolicy}
          >
            Privacy Policy
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
