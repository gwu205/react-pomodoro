import React, { Component } from 'react';
// const prettyMilliseconds = require('pretty-ms');
const millisec = require('millisec');

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 2000,
            start: 2000,
            isOn: false,
            count: 0
        }
    }

    startTimer = () => {
        console.log('start');
        this.setState({
            // time: this.state.time,
            // start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = 
            setInterval(() => (this.state.time > 0) ? 
            this.setState({ time: this.state.time - 1000}) : this.stopTimer(), 1000)
    }

    stopTimer = () => {
        console.log("stop");
        clearInterval(this.timer);
        this.setState({ isOn: false })
    }

    resetTimer = () => {
        console.log("reset");
        this.setState({
            time: this.state.start
        })
    }

    render() {
        let start = (this.state.time == this.state.start) ? <button onClick={this.startTimer}>start</button> : null;
        let stop = (this.state.isOn) ? <button onClick={this.stopTimer}>stop</button> : null;
        let reset = (!this.state.isOn) ? <button onClick={this.resetTimer}>reset</button> : null;
        let resume = (this.state.time != 0 && !this.state.isOn && this.state.time != this.state.start) ? <button onClick={this.startTimer}>resume</button> : null;
        let format = `${(millisec(this.state.time).getMinutes() < 10) ? "0mm" : "mm"} : ${(millisec(this.state.time).getSeconds() < 10) ? "0ss" : "ss"}`
        return (
            <div>
                <h1>{millisec(this.state.time).format(format)}</h1>
                {start}
                {resume}
                {stop}
                {reset}
            </div>
        )
    }
}

export default Timer;