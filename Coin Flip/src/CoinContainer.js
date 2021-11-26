/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Coin from './Coin'
import { choice } from './helpers'
import './CoinContainer.css'

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
        { side: 'heads', imgSrc: "./heads.jpg" },
        { side: 'tails', imgSrc: "./tails.jpg"}
        ]
    }
    
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1,   
            }
            if (newCoin.side === "heads") {
                newState.nHeads += 1;
            } else {
                newState.nTails += 1;
            }
            return newState
        })
    }
    
    handleClick(e) {
        this.flipCoin()
    }
    
    render() {
        return (
            <div className="CoinContainer">
                <h1> Coin Flip</h1>
                <div>
                    {this.state.currCoin && <Coin info={this.state.currCoin} />}
                 </div>
                <button onClick = {this.handleClick}>Flip me!</button>
                <p>Out of {this.state.nFlips}, {this.state.nHeads} are Heads and {this.state.nTails} are Tails</p>
            </div>
        )
    }
}

export default CoinContainer;