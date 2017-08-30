import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={15}
        defaultCenter={{ lat: 55.6764, lng: 12.5681 }}
        onClick={props.onMapClick}>
        <Marker
            position={{ lat: 55.6764, lng: 12.5681 }} />
    </GoogleMap >
));

export default Map
