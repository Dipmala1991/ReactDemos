import React from 'react';

function Greet(props){
    return (<div>
        <h1>Hellooo JS function Component Example!!!!!</h1>
        <h1>{props.name} is {props.age} Years Old!!!!!</h1>
        </div>
        )
}

export default Greet;
//OR
// export function Greet(){
//     return <h1>Hellooooo functional Component!!!!</h1>
// }



//Destructuring of props

// There are 2 ways to destructure in function Component

// 1) In function Parameter: Insted of props we can take object.E.g
// function Greet({name, age}){
//     return (<div>
//         <h1>Hellooo JS function Component Example!!!!!</h1>
//         <h1>{name} is {age} Years Old!!!!!</h1>
//         </div>
//         )
// }

//2) In function Body:
// function Greet(props){
//     const {name, age} = props;
//     return (<div>
//         <h1>Hellooo JS function Component Example!!!!!</h1>
//         <h1>{name} is {age} Years Old!!!!!</h1>
//         </div>
//         )
// }