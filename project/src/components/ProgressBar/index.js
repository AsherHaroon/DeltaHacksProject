import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({progress = 40, total = 100}) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        let done = progress / total

        if (done > 1) done = 1

        const newStyle = {
            opacity: 1,
            width: `${done * 100}%`
        }

        setStyle(newStyle);
    }, 200);
    

    return (
        <div className='progress-bar-body'>
            <div className='progress-bar-progress'>
                <div className='progress-bar-progress-done' style={style}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar