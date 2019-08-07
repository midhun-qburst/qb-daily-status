import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';

export default class Heading extends Component {
    render() {
        return <h1 className="title title--margin">Daily Status </h1>;
    }
}
