import React from "react";

export default class Hub extends React.Component {
    constructor(){
        super();
        this.state = {
            data: 'not'
        }
    }
    
    componentDidMount(){
        console.log('yo');
        fetch('static/data/sample.json')
        .then(results => results.json())
        .then(data => {
            this.setState({data: data})
        })
    }
    render() {
        return(
            <div id="hub">
                <h1>We're in the hub lol</h1>
                <h2>{this.state.data[0].sample}</h2>
            </div>
        );
    }
}