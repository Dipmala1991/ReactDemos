import React from 'react'
import Child from './Child'

export default function Parent() {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <Child></Child>
                </tr>
            </table>   
        </React.Fragment>
    )
}
