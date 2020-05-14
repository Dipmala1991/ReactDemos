import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn ? <div>Welcome Rani!!!!!!!!!!!!!</div> :<div>Welcome Patil!!!!!!!!!!!!!</div>

        // Approch 2
        // let message;
        // if(this.state.isLoggedIn){
        //    message = 'Welcome Rani'
        // }else{;
        //     message = 'Welcome Patil'
        // }
        // return <div>{message}</div>

        //Approch 3
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Rani!!!!!!!!!!!!!</div>
        //     )
        // }else{
        //     return (
        //         <div>Welcome Patil!!!!!!!!!!!!!</div>
        //     )
        // }
        
    }
}

export default UserGreeting
