import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export class EventTable extends Component {
    render() {
        return (
            <div className="eventtablecontainer">
                <div id="addnewButtonContainer">
                    <button id="addnewButton">
                        <FontAwesomeIcon icon = {faPlusCircle} />
                    </button>

                </div>
                <table id="events-table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Starting time</th>
                        <th>Add to favorites</th>
                    </tr>
                        <tr>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            <td>Germany</td>
                            
                    </tr>
                </table>

            </div>
        )
    }
}

export default EventTable
