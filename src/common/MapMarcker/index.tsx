
import React from 'react';
import PropTypes from 'prop-types';
import './MapMarker.scss';

const MapMarker = ({ width, height }: any) => {

    return (
        <div
            className="geolocation-marker"
            style={{ "width": `${width}px`, "height": `${height}px` }}
            data-testid="map-marcker-field"
        />
    )
}

MapMarker.propTypes = {
    "width": PropTypes.number,
    "height": PropTypes.number
};

export default MapMarker;
