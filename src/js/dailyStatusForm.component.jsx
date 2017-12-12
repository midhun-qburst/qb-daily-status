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
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <label for="activityDesc">Activity description</label><br />
                            <textarea id="activityDesc" rows="7" maxLength='180'
                                placeholder="Use T# or t# in your description to indicate Redmine ticket/task. For example : T#1234" >
                            </textarea>
                        </div>
                        <div className="form-group col-md-6">
                            <p className='padding-top-10 margin-top-10'>Enter the actual number of hours against each of your project(s). If you're working on multiple projects, submit separate entry for each project. <br />
                                If you're not assigned to a project, select the option "N/A" from Project drop down. <br />
                                You should book the time against a project if you are contributing your effort, whether you are allocated or not. If you have been working on the project regularly, ask the PM to formally allocate you. <br />
                                Please make sure you're not booking time for organizational (non project) activities like pre-sales, trainings, your non project related self learning activity to any project.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <strong>180</strong>

                        </div>
                        <div className="form-group col-md-6">
                            <p className='padding-top-10 margin-top-10'>Also, if you are learning something, mention the platform name too.(Java, iPhone etc).<br />
                                Directions:<br /><br />
                                <i class="fa fa-asterisk"></i> Do not include lunch time and long breaks greater than 15 minutes.<br />
                                <i class="fa fa-asterisk"></i> You are expected to put in 8 hours a day. <br />
                                <i class="fa fa-asterisk"></i> However report actual hours worked whether it is lesser or greater than 8 hours.
                                </p>
                        </div>
                    </div>
                    <hr />
                    <div className="center">
                        <button className='btn btn-primary' id="activityDesc" >Save</button>
                    </div>

                </form>
            </div>
        );
    }
}
