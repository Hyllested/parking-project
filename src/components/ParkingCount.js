import React, { Component } from "react";
import "./css/parking-count.css";

export class ParkingCount extends Component {
  constructor(props) {
    super();
    // Set up state object
    this.state = {
      count: props.count,
      textLabel: props.textLabel
    };
    console.log(props.textLabel);
  }

  render() {
    return (
      <div className="parking-box mui--text-title title-text">
        {this.state.textLabel}{this.state.count}
      </div>
    );
  }
}

ParkingCount.propTypes = {
  count: React.PropTypes.number,
  textLabel: React.PropTypes.string
};