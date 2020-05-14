import React, { Component } from 'react'

const withCounter = OrignalComponent =>{
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        clickHindler = ()=>{
            this.setState( prevState =>{
                return {count: prevState.count+1 }
            })
        }

        render() {
            return <OrignalComponent count={this.state.count} incrementHandler={this.clickHindler}/>
        }
    }
    return NewComponent;
}


export default withCounter
