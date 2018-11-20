import React from 'react';

import Form from '~components/ApplyToUs/Form';

class RoboticsEngineering extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="description">
          <div className="title">
            Robotics Engineering
          </div>

          <div className="small-title">
            What we believe
          </div>

          <div className="text">
            REMY Robotics is seeking a Lead Engineer (LE) to join our team and lead the development of our robot. 
            The ideal candidate enjoys building beautiful and well-behaved robots, and loves leading high-energy 
            teams. The LE will drive the technical vision for REMY Robotics.The LE will also manage and recruit 
            technical staff, forecast and manage the technology development.This position reports to the Chief 
            Executive Officer.
          </div>

          <div className="small-title">
            Who we are
          </div>

          <div className="text">
            Remy Robotics is the latest project from Kinetik, a technology investment group with companies at the cutting edge of Electric Vehicles (ARRIVAL), Robofacturing (TRA Robotics) and Autonomous Vehicles (Roborace). Kinetik has offices in London, Los Angeles,
            and Moscow, while Remy Robotics is located in Barcelona with some engineering functions in Moscow. For Remy Robotics, we have brought together talented specialists in the fields of robotics and machine learning from all over the world.
          </div>

          <div className="small-title">
            What We're Building
          </div>

          <div className="text">
            We are using robotic technology to take the routine and inefficiency out of cooking, creating a ‘chef robot’ that can help in cooking any cuisine or any dish in the world. This could be used for businesses (factories, restaurants, delivery-only), or at home, where people will be
            able to eat restaurant quality meals at a fraction of the cost.
          </div>
        </div>

        <Form onSendResponse={() => {}}/>
      </div>
    );
  }
}

export default RoboticsEngineering;
