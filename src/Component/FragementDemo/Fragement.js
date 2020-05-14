import React from 'react'

export default function Fragement() {
    return (
        <React.Fragment>
            <h1>Hellooooooo Fragment Demo!!!!!</h1>
            <p>Welcome to Fragement</p>
        </React.Fragment>
    )
}



//What happens here as we have to add h1 and p both element so we muct have to wrap it into the div tag otherwise it will not work so 
// here we have additional div tag in DOM when we can call this component into App.js 
//Fregment comes into picture for that so to avoid that we can write code above