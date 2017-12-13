import React, { Component } from 'react';
import { render } from 'react-dom';
import Heading from './header.component';
import DailyStatusForm from './dailyStatusForm.component'
import HistoryCard from './historyCard.component';

export default class DailyStatus extends Component {
    constructor(props) {
        super(props);
        this.getHistory = this.getHistory.bind(this);
    }
    getHistory = () => {
        let statusHistory = JSON.parse(localStorage.getItem('status'));
        if (statusHistory) {
            return statusHistory.map((item) => {
                return <HistoryCard status={item} />
            })
        }
        else {
            return null;
        }
    }

    render() {

        return (
            <div className='container'>
                <Heading />
                <DailyStatusForm />
                <h2 className ='title--margin' >My history</h2>
                {this.getHistory()}
            </div>
        );
    }
}
render(<DailyStatus />, document.getElementById('app'));
