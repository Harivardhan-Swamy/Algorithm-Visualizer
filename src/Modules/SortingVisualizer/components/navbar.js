import React, { Component } from 'react';
import "./navbar.css"

export default class Navbar extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="nav-container">
                <div className="nav-logo"><h2>SORTING VISUALIZER</h2></div>
                <div className="item-container">
                    <div className="nav-button" onClick={this.props.onclick.reset}><span className="noselect">RESET</span></div>
                    <div className="nav-button" onClick={this.props.onclick.sort}><span className="noselect">SORT</span></div>
                </div>
            </div>
        );
    }

}