import React, {Component} from 'react';

//One limitation here is props value can not be changed in this component.
class Welcome extends Component{
    render(){
        //Destructuring of props in class component
        const {name, age} = this.props;
        return (<div>
                <h1>Hellooo class Component Example!!!!!</h1>
                <h1>{name} is {age} Years Old!!!!!</h1>
                </div>
                )
    }
}
 export default Welcome

