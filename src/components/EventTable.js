import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/events'

export class EventTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: []
        }
    }

    // Get data
    refreshList =() => {
        axios.get(baseUrl)
        .then((response) => {

            const events = response.data
            console.log(events)
            this.setState({
                data: events
            })
        })
        .catch(function (error) {
            console.log(error);
        });



    }

    getNextAvailabeId = (events) => {
        var last = events[events.length -1];
        return last['id'] + 1
    }

    
    // Add new event data
    addNewEvent = () => {
        var nextId = this.getNextAvailabeId(this.state.data)
        const newEvent = 
        {
            id: nextId,
            name: 'New event',
            category: 'Seminars',
            start_time: '7.3.2021, 2.00 pm',
            end_time: '8.3.2021, 2.00 pm'
        }

        axios
        .post(baseUrl, newEvent)
        .then(res => this.refreshList())
        .catch(err => console.log(err));       
    }

    // Get data from local server when start
    UNSAFE_componentWillMount(){
        this.refreshList()
       }

    // Render table data
    renderTableData() {
        return this.state.data.map((event, i) => {
            const {id, name, category, start_time} = event
            
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{start_time}</td>
                    <td>
                        <button id="addfavoriteButton">
                            <FontAwesomeIcon icon = {faStar}/>
                            </button>
                            </td>
            </tr>
            )
        })
    }

    render() {
        return (
            
            <div className="eventtablecontainer">
                <div id="addnewButtonContainer">
                    <button id="addnewButton" onClick={() => this.addNewEvent()} type="submit">
                        <FontAwesomeIcon icon = {faPlusCircle} />
                    </button>

                </div>
                <table id="events-table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Starting time</th>
                            <th>Add to favorites</th>
                        </tr>
                        {this.renderTableData()}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default EventTable
