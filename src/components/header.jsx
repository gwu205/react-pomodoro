import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    getDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return this.state.date.toLocaleDateString('en-US', options);
    }

    getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const time = `${h}:${m}:${s}`;
        setTimeout(this.getTime, 500);
        return time;
    }

    render() {
        return (
            <div>
                <h1>{this.getDate()}</h1>
                <h1>{this.getTime()}</h1>
            </div>
        )
    }
}

export default Header;