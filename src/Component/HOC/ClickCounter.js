import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
    

    render() {
    const {count, incrementHandler} = this.props;
    return <button onClick={incrementHandler}>Count {count} times</button>
    }
}

export default withCounter(ClickCounter)


//As on mouse hover we can have onMouseOver function with same code of incremeng coount and if any other requiremen is for key press as
//well so redudent code in multiple components so to aviold that HOC comes into picture  