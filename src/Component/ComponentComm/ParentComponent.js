import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

   
    triggerAction(val){
        alert(`Hello from ${val}`)
    }
    render() {
        return (
            <div>
               <ChildComponent ClickHandler={this.triggerAction}></ChildComponent> 
            </div>
        )
    }
}

export default ParentComponent
