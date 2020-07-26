import React, { Component } from 'react'
import EventTable from './EventTable'

export class ContentArea extends Component {
    render() {
        return (
            <div className="contentarea">
                 <EventTable />            
            </div>
        )
    }
}

export default ContentArea
