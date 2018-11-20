import React from 'react';
import PropTypes from 'prop-types';

import close from '~image/close.svg';
import './styles.scss';

class Popup extends React.PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    button: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  handleStopPropagation = (event) => {
    event.stopPropagation();
  };

  render() {
    const {
      isOpen,
      button,
      children,
      onOpen,
      onClose,
    } = this.props;

    return (
      <div className="popup">
        <div onClick={onOpen}>
          {button}
        </div>

        {isOpen && (
          <div
            className="overlay flex-both-centered"
            onClick={onClose}
          >
            <div className="panel" onClick={this.handleStopPropagation}>
              {children}

              <div className="close">
                <img
                  src={close}
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Popup;
