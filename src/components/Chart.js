/**
 * Created by Superstar on 08.12.2017.
 */
import React from 'react'
import { Sparklines, SparklinesLine, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'

function average(data) {
    return Math.round((data.reduce((a,b) => a+b))/data.length)
}

function max(data) {
    return _.round(_.max(data))
}

function min(data) {
    return _.round(_.min(data))
}


export default (props) => {
    return(
        <div>
            <Sparklines width={180} height={120} data={props.data}>
                <SparklinesBars style={{ stroke: 'white', fill: `${props.color}`, fillOpacity: '.25' }} />
                <SparklinesLine style={{ stroke: `${props.color}`, fill: 'none' }} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div>max: {max(props.data)}{props.unit}, min: {min(props.data)}{props.unit}</div>
            <div>avg: {average(props.data)}{props.unit}</div>
        </div>
    )
}