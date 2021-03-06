import React from 'react';

import Popup from '~components/Popup';
import Task from './Task';
import Form from './Form';
import Submission from './Submission';
import './styles.scss';

class ApplyToUs extends React.PureComponent {
  state = {
    step: 1,
    topValue: '',
    bottomValue: '',
    isOpen: false,
    typeSubmission: '',
  };

  handleChangeTop = ({ target: { value }}) => {
    this.setState({
      topValue: value,
    });
  };

  handleChangeBottom = ({ target: { value }}) => {
    this.setState({
      bottomValue: value,
    });
  };

  switchStep = () => {
    const {
      step,
      topValue,
      bottomValue,
      typeSubmission,
    } = this.state;

    switch (step) {
      /*case 1:
        return (
          <Task
            topValue={topValue}
            bottomValue={bottomValue}
            onNextStep={this.handleNextStep}
            onChangeTop={this.handleChangeTop}
            onChangeBottom={this.handleChangeBottom}
          />
        );*/

      case 1:
        return (
          <Form onSendResponse={this.handleSendResponse} />
        );

      case 2:
        return (
          <Submission
            type={typeSubmission}
            onApply={this.handleApply}
            onTryAgain={this.handleTryAgain}
          />
        );

      default:
        return null;
    }
  };

  handleNextStep = () => {
    this.setState({
      step: 1,
    });
  };

  handleSendResponse = (type) => {
    this.setState({
      step: 2,
      typeSubmission: type,
    });
  };

  handleOpenPopup = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleApply = () => {
    this.handleClosePopup();
  };

  handleClosePopup = () => {
    this.setState({
      isOpen: false,
      step: 1,
      topValue: '',
      bottomValue: '',
      typeSubmission: '',
    });
  };

  handleTryAgain = () => {
    this.setState({
      step: 2,
      typeSubmission: '',
    });
  };

  render() {
    // const { isOpen } = this.state;
    // const component = this.switchStep();

    return (
			<a
				href="https://remy-robotics.breezy.hr"
				className="button"
			>
				apply here
			</a>
    );
  }
}

export default ApplyToUs;
