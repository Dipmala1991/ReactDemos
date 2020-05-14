import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             address: '',
             expertise: 'React'
        }
    }
    onUserNameChange = event =>{
        this.setState({
            userName: event.target.value
        })
    }
    onAddressChange = event =>{
        this.setState({
            address: event.target.value
        })
    }
    onExpertiseChange = event =>{
        this.setState({
            expertise:event.target.value
        })
    }
    onSubmitForm = (event) =>{
        alert(`${this.state.userName} And ${this.state.address} And ${this.state.expertise}`);
        event.preventDefault() //Not allowed to referesh page 
    }
    render() {
        const {userName,address,expertise} = this.state;
        return (
            <form onSubmit={this.onSubmitForm}>
                <div>
                    <label>User Name</label>
                    <input type='text' value={userName} onChange={this.onUserNameChange}></input>
                </div>
                <div>
                    <label>Address</label>
                    <textarea type='text' value={address} onChange={this.onAddressChange}></textarea>
                </div>
                <div>
                  <label>Expertise</label>
                  <select value={expertise} onChange={this.onExpertiseChange}>
                    <option value='React'>React</option>
                    <option value='Angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
            
        )
    }
}

export default Forms
