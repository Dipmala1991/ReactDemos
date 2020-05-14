import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component/greet'
import { Component } from 'react';
import Hello from './Component/hello';
import Welcome from './Component/Welcome';
import Message from './Component/Message';
import Count from './Component/Count';
import EventBind from './Component/EventBind';
import ParentComponent from './Component/ComponentComm/ParentComponent';
import UserGreeting from './Component/UserGreeting';
import Forms from './Component/Forms';
import Fragement from './Component/FragementDemo/Fragement';
import Parent from './Component/FragementDemo/Parent';
import MemoDemo from './Component/MemoDemo';
import RefsDemo from './Component/RefsDemo';
import PortalsDemo from './Component/PortalsDemo';
import ClickCounter from './Component/HOC/ClickCounter';
import HoverCounter from './Component/HOC/HoverCounter';

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Greet name='Rani' age='28'></Greet> */}
        {/* <Hello></Hello> */}
        {/* <Welcome name='Patil' age='100'></Welcome> */}
        !!!!!............... State Demo ...................!!!!
        {/* <Message></Message>
        <Count></Count>
        <EventBind></EventBind>
        <ParentComponent></ParentComponent> */}

        !!!!!........Conditional render Demo IF/ELSE................................!!!!!
        {/* <UserGreeting></UserGreeting> */}
        ..................................................................................
        !!!!!!!!!!!!!!!!!!.........FORM DEMO.......................................!!!!!
        <Forms></Forms>
        ..................................................................................
        !!!!!!!!!!!...............Fragment Demo......................!!!!!!!!!!!!!!!!!
        <Fragement></Fragement>
        <Parent></Parent>
        ..............................................................................
        <MemoDemo name='Test'></MemoDemo>
        <RefsDemo></RefsDemo>
        <PortalsDemo></PortalsDemo>
        !!!!!!!!!!!!!!!!...........HOC.................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        <ClickCounter></ClickCounter>
        <br/>
        <HoverCounter></HoverCounter>
        ............................................................................
      </div>
    );
  
  }
}

export default App;
