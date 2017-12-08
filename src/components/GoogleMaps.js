/**
 * Created by Superstar on 08.12.2017.
 */
import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

const GoogleMaps = withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
    )
})

export default GoogleMaps