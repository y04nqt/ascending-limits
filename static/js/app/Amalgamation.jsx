import React from "react";
import ReactDOM from "react-dom";

import Hub from "./Pages/Hub"
import MainNav from "./Nav/MainNav"

export default class Amalgamation extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Future'
        }
    }
  render () {
    return( 
        <div id="amalgamation">
            <MainNav />
            <h1>Future is here</h1>
            <Hub />
        </div>
    );
  }
}