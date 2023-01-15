import React from 'react'
import './PortfolioScreen.css';

const PortfolioScreen = () => {

    return (
        <div className='portfolio-wrapper'>
          <div className="portfolio-container">
            <h1 className="welcome-text">Welcome {localStorage.getItem('name')}</h1>
            <div className="balance-container">
                <p className="balance-text" style={{ fontSize: '20px' }}>Your balance:</p>
                <p className="balance-amount" style={{ fontSize: '30px', color: 'green' }}>$54,613.54</p>
            </div>
            <div className="investment-text">
                <p>Your Investments:</p>
            </div>
            <div className="rounded-rectangle">
                <p className="left-text">Company 1</p>
                <p className="right-text">You invested $10,500</p>
            </div>
            <div className="investment-text">
                <p>Your Watchlist:</p>
            </div>
            <div className="rounded-rectangle">
                <p className="left-text">Company 1</p>
                <p className="right-text">Raised $12,000</p>
            </div>
            </div>
        </div>
        
    )
}

export default PortfolioScreen