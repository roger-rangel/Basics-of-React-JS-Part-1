import React, { Component } from 'react';
// import BoxList from './BoxList';

class Box extends Component {
    render() {
        return (
            <div>
             <div style={{
                 backgroundColor: `${this.props.color}`,
                 height: `${this.props.height}em`,
                 width: `${this.props.width}em`
             }}   
             />   
            
             <button onClick = {this.props.removeBox}>Delete Box</button>
            </div>
            
        )
    }
}

export default Box;