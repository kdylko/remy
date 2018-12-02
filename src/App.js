import React from 'react';

import Landing from '~containers/Landing';
import HiringPanel from '~containers/HiringPanel';
import PrivacyPolicy from '~containers/PrivacyPolicy';

const Screen = {
  Landing: 'Landing',
  HiringPanel: 'Hiring Panel',
  PrivacyPolicy: 'Privacy Policy',
};

class App extends React.PureComponent {
  state = {
    height: 0,
    width: 0,
    activeJob: null,
    activeScreen: Screen.Landing,
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: document.documentElement.clientWidth,
    });
  };

  handleOpenHiringPanel = (id) => {
     this.setState({
      activeJob: id,
       activeScreen: Screen.HiringPanel,
    });
  };

  handleCloseHiringPanel = () => {
    this.setState({
      activeJob: null,
      activeScreen: Screen.Landing,
    });
  };

  handleChooseOtherJob = (id) => {
    this.setState({
      activeJob: id,
    });
  };

  handleCloseCurrentJob = () => {
    this.setState({
      activeJob: null,
    });
  };

  handleOpenPrivacyPolicy = () => {
    this.setState({
      activeScreen: Screen.PrivacyPolicy,
    });
  };

  handleClosePrivacyPolicy = () => {
    this.setState({
      activeScreen: Screen.Landing,
    });
  };

  render() {
    const {
      height,
      width,
      activeJob,
      activeScreen,
    } = this.state;

    if (activeScreen === Screen.HiringPanel) {
      return (
        <HiringPanel
          activeJob={activeJob}
          onCloseHiringPanel={this.handleCloseHiringPanel}
          onChooseOtherJob={this.handleChooseOtherJob}
          onCloseCurrentJob={this.handleCloseCurrentJob}
        />
      );
    }

    if (activeScreen === Screen.PrivacyPolicy) {
      return (
        <PrivacyPolicy
          height={height}
          width={width}
          screen={Screen.PrivacyPolicy}
          onClose={this.handleClosePrivacyPolicy}
        />
      );
    }

    return (
      <Landing
        height={height}
        width={width}
        onOpenHiringPanel={this.handleOpenHiringPanel}
        onOpenPrivacyPolicy={this.handleOpenPrivacyPolicy}
      />
    );
  }
}

export default App;
