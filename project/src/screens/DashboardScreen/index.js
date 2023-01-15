import React from 'react'
import './DashboardScreen.css';
import hammad from '../../assets/hammad.png';
import PitchTab from '../../components/PitchTab'
import InvestingGuide from '../../components/InvestingGuide/InvestingGuide'
import FooterBar from '../../components/FooterBar'
import boxabl from '../../assets/boxabl.jpg';
import fanbase from '../../assets/Fanbase.png';
import jettoken from '../../assets/jettoken.jpg';
import rentberry from '../../assets/rentberry.png';
import startengine from '../../assets/startengine.jpg';
import weatherflow from '../../assets/weatherflowcom.jpg';


const DashboardScreen = () => {

    return (
        <div>
            <div className="header-wrapper">
                <div className="header-container">
                    <header className="header">
                        <div className="header-text">
                            <div className="header-top-text">The Future of Venture Capital</div>
                            <div className="header-bottom-text">
                                Starting a new venture in your entrepreneurship journey?
                                Looking for startups with high potential to invest in?
                                Look no further, RBC has the tools you need to get started!
                                Come build your brand or help someone build theirs today!           
                            </div>
                            <div className="button-container">
                                <button className="join-button-container">
                                    Pitch Your Idea
                                </button>
                            </div>
                        </div>
                        <div className="logo-container">
                            <img src={hammad} alt="Logo"/>
                        </div>
                    </header>
                </div>
            </div>
            <div className="main-wrapper">
                <main className="main">
                    <div className="main-text-container">
                        <div className="main-header-text">
                            Companies
                        </div>
                        <div className="main-header-bottom-text">
                            Invest in the following:
                        </div>
                        <div className="pitch-container">
                            {COMPANY_LIST.map((company, index) => (
                                <PitchTab 
                                    key={index}
                                    image={company.image}
                                    name={company.name}
                                    money={company.money}
                                    investors={company.investors}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <div className="guide-wrapper">
                <div className="guide-container">
                    <InvestingGuide/>
                </div>
            </div>
            <FooterBar/>
        </div>
    )
}

export default DashboardScreen

const COMPANY_LIST = [
        {
            name: "WeatherFlow-Tempect, Inc",
            image: weatherflow,
            money: "$714k",
            investors: "433"
        },
        {
            name: "Jet Token Inc.",
            image: jettoken,
            money: "$6.12M",
            investors: "6409"
        },
        {
            name: "Rentberry",
            image: rentberry,
            money: "$1.02M",
            investors: "238"
        },
        {
            name: "StartEngine",
            image: startengine,
            money: "$10.81M",
            investors: "6150"
        },
        {
            name: "Boxabl",
            image: boxabl,
            money: "$4.96M",
            investors: "2338"
        },
        {
            name: "Fanbase",
            image: fanbase,
            money: "$2.48M",
            investors: "3246"
        }
]