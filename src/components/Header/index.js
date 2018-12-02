import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import logo from '~image/Remy_logo_white.svg';
import './styles.scss';

smoothscroll.polyfill();

class Header extends React.PureComponent {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    screen: PropTypes.string,
    onClosePrivacyPolicy: PropTypes.func,
  };

  scrollTo = (offsetTop) => {
      window.scroll({ top: offsetTop, left: 0, behavior: 'smooth' });
  };

  handleScroll = () => {
    this.scrollTo(
        document.querySelector('.about-us').offsetTop
    );
  };

  handleJoinUsScroll = () => {
    const { onClosePrivacyPolicy } = this.props;
    onClosePrivacyPolicy && onClosePrivacyPolicy();

    setTimeout(() => {
      this.scrollTo(
        document.querySelector('.hiring-section').offsetTop
      );
    }, 100);
  };

  render() {
    const {
      height,
      width,
      screen,
    } = this.props;
    const isPrivacyPolicy = screen === 'Privacy Policy';

    return (
      <div
        className="header"
        style={{ height, width: width }}
      >
        <div
          className="gradient-pattern"
          style={{ height, width: width }}
        />

        <img
          src={logo}
          className="logo"
        />

        {!isPrivacyPolicy && (
          <div className="title">
            robotics solutions that takes the routine and inefficiency out of cooking
          </div>
        )}

        {isPrivacyPolicy && (
          <div className="title">
            Privacy Policy
          </div>
        )}

        {!isPrivacyPolicy && (
          <div className="discover-more" onClick={this.handleScroll}>
            <div className="ball-section">
              <div className="ball" />
            </div>

            discover more
          </div>
        )}

        <div className="join-us flex-both-centered" onClick={this.handleJoinUsScroll}>
          join us
        </div>
      </div>
    );
  }
}

export default Header;
