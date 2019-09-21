import React, { Component } from 'react';
import Header from './header';
import Timer from './timer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Timer />
            </div>
        )
    }
}

export default App;