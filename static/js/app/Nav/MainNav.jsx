import React from "react";
import ReactDOM from "react-dom";

export default class MainNav extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Main Navigation'
        }
    }
  render () {
    return( 
        <nav>
            <a href="/code">Code</a>
            <a href="#">Climbing</a>
            <a href="#">Insight</a>
        </nav>
    );
  }
}