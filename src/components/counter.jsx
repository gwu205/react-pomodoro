import React, { Component } from 'react';
import Timer from './timer';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        if (this.state.time == 0) {
            this.setState({ count: 1 })
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <Timer onChange={this.increment()} />
            </div>
        )
    }
}

export default Counter;