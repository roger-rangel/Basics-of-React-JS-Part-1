import React, { Component } from 'react';

class Clicker extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.timer = this.timer.bind(this);
    }
    timer() {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({num: rand})
    }
    render() {
        return (
            <div>
                
                <h1>Number is: {this.state.num} </h1>
                {this.state.num === 7
                    ? <h2>You Won!!!</h2>: <button onClick={this.timer}>Click me</button>  }
                
            </div>
        )
    }
}

export default Clicker;