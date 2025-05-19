import { useState } from 'react'

export function Button (){
    const [count, setCount] = useState(100)

    return(
    <div>
        <button onClick={() => setCount((count) => count + 100)}>
            count is {count}
        </button>
        </div>
    )
}