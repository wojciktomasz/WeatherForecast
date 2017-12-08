/**
 * Created by Superstar on 08.12.2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'
import {FormGroup, InputGroup} from 'react-bootstrap'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term: ''})
    }

    render() {
        return (
            <div className='flex'>
                <form onSubmit={this.onFormSubmit} className='col-lg-10'>
                    <FormGroup>
                        <InputGroup>
                            <InputGroup.Addon>PL</InputGroup.Addon>
                            <input
                                className='form-control'
                                onChange={this.onInputChange}
                                value={this.state.term}
                                placeholder='Enter a city name..'
                            />
                            <span className='input-group-btn'>
                                <button type='submit' className='btn btn-secondary'>Search</button>
                            </span>
                        </InputGroup>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)