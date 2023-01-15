import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { postPitch } from '../../utils/postPitch';
import './CreatePostScreen.css';

const CreatePostScreen = () => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [fundsGoal, setFundsGoal] = useState(0)
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    const [submitted, setSubmitted] = useState(false)
    
    const[pitchid, setPitchid] = useState("")

    const handlePress = () => {
        if (companyName == "" || email == "" || title == "" || description == "" || youtubeLink == "" || fundsGoal == ""
        || isNaN(fundsGoal)) {
            if (!showErrorMsg) {
                setShowErrorMsg(true)
                setTimeout(() => {
                    setShowErrorMsg(false)
                }, 5000)
            }
        }
        else {
            let data = {
                'company-name': companyName,
                'contact-info': {
                    'email': email,
                    'collaborators': ''
                },
                'title': title,
                'pitch-video-url': youtubeLink,
                'description': description,
                'funds-goal': fundsGoal,
                'funds-raised': fundsGoal * 0.6,
                'investors': 0,
            }
    
            postPitch(data).then((id) => {
                setPitchid(id)
                setSubmitted(true)
            })
        }
    }

    const viewPost = () => {
        
    }

    if (!submitted) {
        return (
            <div className="create-post-container">
                <div className='create-post-form-container'>
                    <div className='create-post-top-container'>
                        <div className='create-post-header'>
                            Pitch Your Idea
                        </div>
                    </div>
                    <label className='create-post-label-container'>
                        <span className="header-font">Company Name:</span>
                        <textarea wrap="soft" name="CompanyName:" className="small-chat-input" onChange={e => setCompanyName(e.target.value)} />
                    </label>
                    <label className='create-post-label-container'>
                        <span className="header-font">Email Address:</span>
                        <textarea wrap="soft" name=":" className="small-chat-input" onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label className='create-post-label-container'>
                        <span className="header-font">Title:</span>
                        <textarea wrap="soft" name="Title:" className="small-chat-input" onChange={e => setTitle(e.target.value)} />
                    </label>
                    <label className='create-post-label-container'>
                        <span className="header-font">Description:</span>
                        <textarea wrap="soft" name="Description:" className="large-chat-input" onChange={e => setDescription(e.target.value)} />
                    </label>
                    <label className='create-post-label-container'>
                        <span className="header-font">YouTube Link for Video Pitch:</span>
                        <textarea wrap="soft" name="YoutubeLink:" className="small-chat-input" onChange={e => setYoutubeLink(e.target.value)} />
                    </label>
                    <label className='create-post-label-container'>
                        <span className="header-font">Funding Goal:</span>
                        <textarea wrap="soft" name="YoutubeLink:" className="small-chat-input" onChange={e => setFundsGoal(e.target.value)} />
                    </label>
                    <button type="submit" value="Submit" className="submit-button" onClick={() => handlePress()}>Post Pitch</button>
                    {showErrorMsg ? (
                        <div className='user-input-error-msg'>
                            Error: Make sure all text fields are properly filled.
                        </div>
                    ) : []}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="create-post-container">
                <div className="create-post-form-container">
                    <div>
                        <div className='create-post-success-container'>
                            <div className='create-post-check-container'>
                                <div className='check-container'>
                                    <div className='check'>
                                    </div>
                                </div>
                            </div>
                            <div className='create-post-success-msg'>
                                Your pitch has been successfully posted.
                            </div>
                        </div>
                        <div className='create-post-button-container'>
                            <button className="submit-button" onClick={() => viewPost()}>
                                <Link className="create-post-button-link" to={`../pitch/${pitchid}`}>
                                    View Your Post
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePostScreen