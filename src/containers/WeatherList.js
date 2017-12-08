/**
 * Created by Superstar on 08.12.2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMaps from '../components/GoogleMaps'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(city => city.main.temp - 273.15)
        const pressures = cityData.list.map(city => city.main.pressure)
        const humidities = cityData.list.map(city => city.main.humidity)
        const { lon, lat } = cityData.city.coord

        return (
            <tr key={name}>
                {/*<td><GoogleMaps lon={lon} lat={lat}/></td>*/}
                <td>{name}</td>
                <td><Chart data={temps} color={'#003459'} unit='&deg;C' /></td>
                <td><Chart data={pressures} color={'#069AEA'} unit='hPa' /></td>
                <td><Chart data={humidities} color={'#007EA7'} unit='%' /></td>
            </tr>
        )
    }

    render() {
        return (
            <div className='table-responsive'>
                <table className='table table-hover'>
                    {this.props.weather.length > 0 &&
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&deg;C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                    </thead>}
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList)