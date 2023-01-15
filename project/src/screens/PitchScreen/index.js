import React, { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import YouTubeVideo from '../../components/YouTubeVideo.js'
import { getPitchById } from '../../utils/getPitchbyId'
import { getVideoId } from '../../utils/getVideoId'

const PitchScreen = ({ pitchid = 'naoqoylPEbZ8ZNtWqENS' }) => {

    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        getPitchById(pitchid).then((data) => {
            setData(data)
            setLoaded(true)
        }).catch((e) => console.log(e))
    }, [pitchid])

    if (loaded) {
        return (
            <div className='portfolio-container'>
                <div className='portfolio-title'>
                    {data.name}
                </div>
                <div className='portfolio-embedded-video-container'>
                    <YouTubeVideo videoId={getVideoId(data['pitch-video-url'])}/>
                </div>
                <div>
                    {data.description}
                </div>
                <div className='portfolio-funds-raised-container'>
                    <div>
                        {data['funds-raised']} / {data['funds-goal']}
                    </div>
                    <ProgressBar progress={data['funds-raised']} total={data['funds-goal']}/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                LOADING
            </div>
        )
    }
}

const PITCH_OBJ = {
    'name': '',
    'contact-info': {
        'email': '',
        'collaborators': ''
    },
    'pitch-video-url': '',
    'description': '',
    'funds-raised': 0,
    'funds-goal': 10000
}

export default PitchScreen