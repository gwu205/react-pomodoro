import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date
        });
    }

    getDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return this.state.date.toLocaleDateString('en-US', options);
    }

    getTime = () => {
        return this.state.date.toLocaleTimeString('en-US', {timeStyle: "short"});
    }

    render() {
        return (
            <div className="header">
                <h2>{this.getDate()}</h2>
                <h2>{this.getTime()}</h2>
            </div>
        )
    }
}

export default Header;