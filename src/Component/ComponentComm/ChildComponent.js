import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.ClickHandler('child')}>Click Parent method</button>
        </div>
    )
}
