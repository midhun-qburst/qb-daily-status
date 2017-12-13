import React, { Component } from 'react';
import { render } from 'react-dom';
import Heading from './header.component';
import DailyStatusForm from './dailyStatusForm.component'
import HistoryCard from './historyCard.component';

export default class DailyStatus extends Component {
    
     history = JSON.parse(localStorage.getItem('status'));
    render() {
        return (
            <div className='container'>
                <Heading />
                <DailyStatusForm />
                {   
                    history.length > 0 ?  this.history.map((item)=> {
                       return <HistoryCard status = {item} />
                        
                    }) : ''
                }
                
            </div>
        );
    }
}
render(<DailyStatus />, document.getElementById('app'));
