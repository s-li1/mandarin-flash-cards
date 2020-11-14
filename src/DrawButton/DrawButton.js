import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component{
    constructor(props){
        super(props);
        //necessary binding to make 'this' work in call back
        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>Draw Card</button>
            </div>
        )
    }
}

export default DrawButton

