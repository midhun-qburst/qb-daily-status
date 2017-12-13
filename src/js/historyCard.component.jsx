import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';

export default class HistoryCard extends Component {

    render() {
        return (
            <form>
                <div className='row'>


                    <div className="col-md-2">end-of-day
                    <div>
                        {this.props.status.date}
                    </div>
                    </div>
                    <div className="col-md-8">dfdf
                      </div>
                    <div className="col-md-2">{this.props.status.activityType}
                    </div>
                </div>
            </form>

        );
    }
}
