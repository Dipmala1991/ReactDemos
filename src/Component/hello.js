import React from 'react';

//JSX Version
// function Hello(){
//     return <h1>Hellooooo Rani!!!</h1>
// }

//Without JSX
function Hello(){
   return React.createElement('div', null, React.createElement('h1',{id:'myId', className: 'myClass'},'Hellloooo Rani!!!!'));
}
//So for null its obj we can pass to element like id,class like above so to h1 tag now we have id and class both.
//And in js we can't give simple class for specifying class we need to add className


export default Hello;


