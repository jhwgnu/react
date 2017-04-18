import React from 'react'

class Greeting extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Greeting
