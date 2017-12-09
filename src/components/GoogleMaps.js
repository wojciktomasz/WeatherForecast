/**
 * Created by Superstar on 08.12.2017.
 */
import React from 'react'
import GoogleMapReact from 'google-map-react'

const GoogleMaps = (props) => {
    return (
        <GoogleMapReact
            defaultZoom={12}
            center={{lat: props.lat, lng: props.lon}}
            bootstrapURLKeys={{key: 'AIzaSyBJa1Gqs0a9D8lISJtefwnWNAyh2FZp6xo'}}
        />
    )
}

export default GoogleMaps