import React, { Component } from 'react';
import Header from './header';
import Counter from './counter';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Counter />
            </div>
        )
    }
}

export default App;