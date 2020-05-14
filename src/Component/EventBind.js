import React, { Component } from 'react'

export class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Helloooo'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            message: 'Raniiiiiiiii'
        })
        console.log(this);
    }

    //This can be used together //////4
    // clickHandler = () => {
    //     this.setState({
    //         message: 'Raniiiiiiiii'
    //     })
    //     console.log(this);
    // }
    // <button onClick={this.clickHandler}>Click</button>

    //This can be used together ////3
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          message: 'Helloooo'
    //     }
    //     this.clickHandler = this.clickHandler.bind(this);
    // }
    // <button onClick={this.clickHandler}>Click</button>
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> ///1
                <button onClick={() => this.clickHandler()}>Click</button> ///2*/}  
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
