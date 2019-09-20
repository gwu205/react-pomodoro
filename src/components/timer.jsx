import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
    }

    startTimer = () => {
        console.log('start');
    }

    stopTimer = () => {
        console.log("stop");
    }

    resetTimer = () => {
        console.log("reset");
    }

    render() {
        return (
            <div>
                <button onClick={this.startTimer}>start</button>
                <button onClick={this.stopTimer}>stop</button>
                <button onClick={this.resetTimer}>reset</button>
            </div>
        )
    }
}

export default Timer;