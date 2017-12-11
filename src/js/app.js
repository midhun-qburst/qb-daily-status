import React, { Component } from 'react';
import { render } from 'react-dom';
import Heading from './header.component';
import DailyStatusForm from './dailyStatusForm.component'

export default class DailyStatus extends Component {
    render() {
        return (
            <div className='container'>
                <Heading />
                <DailyStatusForm />
            </div>
        );
    }
}
render(<DailyStatus />, document.getElementById('app'));
