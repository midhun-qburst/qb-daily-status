import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';

export default class HistoryCard extends Component {

    render() {
        return (
            <form className='padding-10 margin-top-10'>
                <div className='row'>
                    <div className="col-md-2">end-of-day
                    <div>{this.props.status.date}</div>
                    <div>Posted on: {this.props.status.postedOn}</div>
                    </div>
                    <div className="col-md-8">{this.props.status.activityDescription}
                    </div>
                    <div className="col-md-2">
                    {this.props.status.timeSpent.hrs}:{this.props.status.timeSpent.min} hour(s)
                    <div>{this.props.status.activityType}</div>
                    </div>
                </div>
            </form>

        );
    }
}
