import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import YouTubeVideo from '../../components/YouTubeVideo.js'
import { getPitchById } from '../../utils/getPitchbyId'
import { getVideoId } from '../../utils/getVideoId'
import './PitchScreen.css'

const PitchScreen = () => {

    const location = useLocation()

    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        console.log(location.href)
    }, [])

    const { pitchid } = useParams()

    useEffect(() => {
        getPitchById(pitchid).then((data) => {
            setData(data)
            setLoaded(true)
        }).catch((e) => console.log(e))
    }, [pitchid])

    if (loaded) {
        return (
            <div className='pitch-wrapper'>
                <div className='pitch-container'>
                    <div className='column-containers'>
                        <div className='pitch-column-1'>
                            <div className='pitch-title'>
                                <div>{data['company-name']}</div>
                            </div>
                            <hr className='pitch-header-line'/>
                            <div className='pitch-description-container'>
                                <div className='pitch-description-header'>
                                    Description
                                </div>
                                <div className='pitch-description-text'>
                                    {data.description}
                                </div>
                            </div>
                            <div className='pitch-funds-raised-container'>
                                <div className='pitch-funds-raised-info'>
                                    ${data['funds-raised']} / ${data['funds-goal']}
                                </div>
                                <ProgressBar progress={data['funds-raised']} total={data['funds-goal']}/>
                            </div>
                        </div>
                        <div className='pitch-column-2'>
                            <div className='pitch-embedded-video-container'>
                                <YouTubeVideo videoId={getVideoId(data['pitch-video-url'])}/>
                            </div>
                            <div className='pitch-invest-container'>
                                <button className='pitch-invest-button'>Invest Now</button>
                            </div>
                            <div className='pitch-contact-container'>
                                <div className='pitch-contact-header'>
                                    Contact Info
                                </div>
                                <div className='pitch-contact-contents'>
                                    <div className='pitch-contact-email'>
                                        Email: {data['contact-info'].email}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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