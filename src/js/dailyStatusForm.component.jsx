import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';
import { timeDropdown, activityTypeDropdown, projectDropdown } from './constants'

export default class DailyStatusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            project: '',
            activityType: 'Coding',
            timeSpent: {
                hrs: '08',
                min: '00'
            },
            activityDescription: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        // event.preventDefault();
    }



    render() {
        return (
            <div className='padding-10'>
            <form onSubmit={this.handleSubmit}>
                <h2 className='page-title' >Bursts</h2>
                <div className='row'>
                    <div className="form-group col-md-3">
                        <label for="date">Date</label>
                        <input type="text" id="date" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="project">Project</label><br />
                        <select id='project' value='' >
                            {
                                projectDropdown.map((activity) => {
                                    return <option key={activity} value={activity}>{activity}</option>;

                                })
                            }
                        </select>                    </div>
                    <div className="form-group col-md-3">
                        <label for="activityType">Activity type</label><br />
                        <select id='activityType' value={this.state.activityType} >
                            {
                                activityTypeDropdown.map((activity) => {
                                    return <option key={activity} value={activity}>{activity}</option>;

                                })
                            }
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="timeInHour">Time spent(hours:minutes)</label><br />
                        <select id='timeInHour' value={this.state.timeSpent.hrs} >
                            {
                                timeDropdown.hrs.map((hours) => {
                                    return <option key={hours} value={hours}>{hours}</option>;

                                })
                            }
                        </select>
                        <select id='timeInMin' value={this.state.timeSpent.min} >
                            {
                                timeDropdown.min.map((minutes) => {
                                    return <option key={minutes} value={minutes}>{minutes}</option>;
                                })
                            }
                        </select>
                    </div>
                </div>
            </form>
            </div>
        );
    }
}
