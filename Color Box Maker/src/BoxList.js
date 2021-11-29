/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { height: 10, width: 10, color: 'lightblue', id: uuidv4() },
                { height: 10, width: 10, color: 'lightgreen', id: uuidv4() },
                { height: 10, width: 10, color: 'lightpink', id: uuidv4() },
                {height: 10, width: 10, color: 'lightyellow', id: uuidv4() }
            ]
        }
        this.create = this.create.bind(this);
    }
    
    remove(id) {
        this.setState({
         boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    
    create(box) {
        let newBox =  {...box, id: uuidv4()}
        this.setState(st => ({
            boxes: [...st.boxes, newBox]
        }))
    }
    
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox= {() => this.remove(box.id)}
            />))
        return (
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm addBox = {this.create} />
                <div style={{
                    display: 'inline-flex',
                    marginTop: 20,
                    marginLeft: 30
                }}>{boxes}</div>
            </div>
        )
    }
}

export default BoxList;