import React, { Component } from "react";
import Divider from "muicss/lib/react/divider";
import "./css/data-list.css";

export class DataList extends Component {
  constructor(props) {
    super();
    this.state = {
      filteredParkingData: this.filter(props.parkingData, props.parkingFilter)
    };
  }

  filter(parkingData, parkingFilter) {
    var filteredParkingData = [];
    if (!parkingFilter || parkingFilter === "Ingen filter") {
      return parkingData.results;
    } else {
      parkingData.results.forEach(function (parking) {
        if (parkingFilter === parking.providerId) {
          filteredParkingData.push(parking);
        }
      }, this);
    }
    return filteredParkingData;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filteredParkingData: this.filter(nextProps.parkingData, nextProps.parkingFilter) });
  }

  render() {
    return (
      <div>
        <ul style={{ height: "100%" }} >
          {this.state.filteredParkingData.map((parking, i) =>
            <li className="list-items mui--text-body1 list-items-box" key={i}>
              <div>Udbyder</div>
              <div className="gray-text">{parking.providerId}</div>
              <div>Tidspunkt</div>
              <div className="gray-text">{new Date(parking.validityBegin).toLocaleString()} til {new Date(parking.validityEnd).toLocaleString()} </div>
              <div>Koordinater</div>
              <div className="gray-text">{parking.sellingPointLocation} </div>
              <Divider style={{ marginTop: 5 }} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

DataList.propTypes = {
  parkingData: React.PropTypes.object,
  parkingFilter: React.PropTypes.string
};