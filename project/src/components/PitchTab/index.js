import React, { useState } from "react";
import './PitchTab.css';
import { AiFillHeart } from 'react-icons/ai'

function PitchTab (props) {

    const [isFavourited, setIsFavourited] = useState(false);

    return (
        <div className="container">
            <img className="image-container" src={props.image} alt="Image"/>
            <div className="text-container">
                <div className="name-container">{props.name}</div>
                <div className="stats-container">
                    <div className="numbers-container">
                        <div className="raised-container">
                            <div className="money-raised-container">{props.money}</div>
                            <div className="raised-text-container">Raised</div>
                        </div>
                        <div className="investor-container">
                            <div className="investor-number-container">{props.investors}</div>
                            <div className="investor-text-container">Investors</div>
                        </div>
                    </div>
                    <AiFillHeart
                        onClick={() => setIsFavourited(!isFavourited)}
                        color={isFavourited ? "red" : "gray"}
                        size={35}
                        className="favourite-icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default PitchTab;