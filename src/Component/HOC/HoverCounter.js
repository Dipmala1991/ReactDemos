import React, { Component } from 'react';
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const {count, incrementHandler} = this.props;
        return <button onMouseOver={incrementHandler}>Count {count} times</button>     
    }
}

export default withCounter(HoverCounter)