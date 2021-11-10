import React, { Component } from 'react';
import './Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';



class Pokecard extends Component {
    render() {
    let padToThree = number => (number <= 999 ? `00${number}`.slice(-3): number)
      return (
            <div className = "Pokecard">
                    <h1 className = "Pokecard-title">{this.props.name}</h1>
                    <div className = "Pokecard-image">
                      <img src={POKE_API + padToThree(`${this.props.id}`) + '.png'} alt="img"/>
                    </div>
                    <div className = "Pokecard-data">Type: {this.props.type}</div>
                    <div className = "Pokecard-data">Exp: {this.props.exp}</div>      
            </div>
      );
    }
}

export default Pokecard