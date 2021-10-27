import React, { Component } from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



class Pokecard extends Component {
    render() {
      return (
            <div className = "Pokecard">
                <div className = "container" align="center">
                    <p className = "name">{this.props.name}</p>
                    <img src={POKE_API + `${this.props.id}.png`} alt="img"/>
                    <p>{this.props.type}</p>
                    <p>{this.props.exp}</p>
                    
                </div>    
            </div>
      );
    }
}

export default Pokecard