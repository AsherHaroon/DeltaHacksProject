import React, { useState } from 'react';
import './CreatePostScreen.css';

const CreatePostScreen = () => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");

    return (
        <div style={{marginLeft:"10px"}} className="form-container">
            <form>
                <label>
                    <span className="header-font">Company Name:</span>
                    <br />
                    <textarea wrap="soft" name="CompanyName:" className="small-chat-input" onChange={e => setCompanyName(e.target.value)} />
                </label>
                <br />
                <label>
                    <span className="header-font">Email Address:</span>
                    <br />
                    <textarea wrap="soft" name=":" className="small-chat-input" onChange={e => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    <span className="header-font">Title:</span>
                    <br />
                    <textarea wrap="soft" name="Title:" className="small-chat-input" onChange={e => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    <span className="header-font">Description:</span>
                    <br />
                    <textarea wrap="soft" name="Description:" className="large-chat-input" onChange={e => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                    <span className="header-font">Link to youtube video pitch:</span>
                    <br />
                    <textarea wrap="soft" name="YoutubeLink:" className="small-chat-input" onChange={e => setYoutubeLink(e.target.value)} />
                </label>
                <br />
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    )
}

export default CreatePostScreen