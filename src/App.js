import React, { Component } from 'react'
import SearchBar from '../containers/SearchBar'
import WeatherList from '../containers/WeatherList'
import Header from '../components/Header'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}

export default App
