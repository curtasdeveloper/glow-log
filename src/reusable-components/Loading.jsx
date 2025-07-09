import '../style/index.css'
import { useState } from 'react'

function Loading({timeDuration = 3000}) {
    const [ isTimesUp, setIsTimesUP ] = useState(false)
    setTimeout(() => {
        const newIsTimesUp = !isTimesUp
        setIsTimesUP(newIsTimesUp)
    }, timeDuration);
    return (
        <>
            {isTimesUp && 
                <div id='loading'></div>
            }
        </>
    )
}

export default Loading