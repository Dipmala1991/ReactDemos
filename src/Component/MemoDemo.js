import React from 'react'

function MemoDemo({name}) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default React.memo(MemoDemo)



//As PureComponent not suppoeted for functional component then Memo comes into pucture to do that