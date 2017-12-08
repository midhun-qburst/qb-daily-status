import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css'

export default class Heading extends Component {
    render() {
        return <h1 className="txt-color-blueDark page-title">Daily Status </h1>;
    }
}
render(<Heading />, document.getElementById('app'));
