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
        this.handleActivityDescChange = this.handleActivityDescChange.bind(this);
        this.handleActivityTypeChange = this.handleActivityTypeChange.bind(this);
        this.handleTimeHrsChange = this.handleTimeHrsChange.bind(this);
        this.handleTimeMinChange = this.handleTimeMinChange.bind(this);


        this.dateDropdown = this.dateDropdown.bind(this);


    }
    handleSubmit(event) {
        const dailyStatus = this.state;
        if (localStorage.getItem('status') === null) {
            let statusArray = [];
            statusArray.push(dailyStatus);
            localStorage.setItem('status', JSON.stringify(statusArray));
        } else {
            let statusArray = JSON.parse(localStorage.getItem('status'));
            statusArray.push(book);
            localStorage.setItem('status', JSON.stringify(statusArray));
        }
        event.preventDefault();
    }
    handleActivityTypeChange(event) {
        this.setState({ activityType: event.target.value });
    }
    /**
     * handles onChange event of activity description.
     * @param {*} event 
     */
    handleActivityDescChange(event) {
        this.setState({ activityDescription: event.target.value });
    }
    handleTimeHrsChange(event) {
        this.setState({ timeSpent: { hrs: event.target.value } });
    }
    handleTimeMinChange(event) {
        this.setState({ timeSpent: { min: event.target.value } });
    }

    dateDropdown() {
        debugger;
        let currentDate = new Date();
        let dateArray = [0, 1, 2, 3, 4, 5, 6];
        dateArray.map((days) => {
            let last = new Date(currentDate.getTime() - (days * 24 * 60 * 60 * 1000));
            let day = last.getDate();
            let month = last.getMonth() + 1;
            let year = last.getFullYear();
            let date = [day, month, year].join('/');
            return <option key={date} value={date}>{date}</option>;
        });
    }

    render() {
        return (
            <div className='padding-10'>
                <form onSubmit={this.handleSubmit}>
                    <h2 className='title--margin' >Bursts</h2>
                    <div className='row'>
                        <div className="form-group col-md-3">
                            <label for="date">Date</label>
                            <div>
                                <select id='date' value={this.state.date} >
                                    {
                                         this.dateDropdown()
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="project">Project</label>
                            <div>
                                <select id='project' value='' >
                                    {
                                        projectDropdown.map((activity) => {
                                            return <option key={activity} value={activity}>{activity}</option>;

                                        })
                                    }
                                </select></div>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="activityType">Activity type</label>
                            <div>
                            <select id='activityType' value={this.state.activityType} onChange={this.handleActivityTypeChange} >
                                {
                                    activityTypeDropdown.map((activity) => {
                                        return <option key={activity} value={activity}>{activity}</option>;

                                    })
                                }
                            </select>
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                            <label for="timeInHour">Time spent(hours:minutes)</label>
                            <div>
                            <select id='timeInHour' value={this.state.timeSpent.hrs} onChange={this.handleTimeHrsChange} >
                                {
                                    timeDropdown.hrs.map((hours) => {
                                        return <option key={hours} value={hours}>{hours}</option>;

                                    })
                                }
                            </select>
                            <select id='timeInMin' value={this.state.timeSpent.min} onChange={this.handleTimeMinChange} >
                                {
                                    timeDropdown.min.map((minutes) => {
                                        return <option key={minutes} value={minutes}>{minutes}</option>;
                                    })
                                }
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="form-group col-md-6">
                            <label for="activityDesc">Activity description</label><br />
                            <textarea id="activityDesc" rows="7" maxLength='180' onChange={this.handleActivityDescChange}
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
                            <strong>{(180 - this.state.activityDescription.length)}</strong>

                        </div>
                        <div className="form-group col-md-6">
                            <p className='padding-top-10 margin-top-10'>Also, if you are learning something, mention the platform name too.(Java, iPhone etc).<br />
                                Directions:
                                <div className='margin-top-10'>
                                    <i class="fa fa-asterisk"></i> Do not include lunch time and long breaks greater than 15 minutes.<br />
                                    <i class="fa fa-asterisk"></i> You are expected to put in 8 hours a day. <br />
                                    <i class="fa fa-asterisk"></i> However report actual hours worked whether it is lesser or greater than 8 hours.
                                </div>
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
