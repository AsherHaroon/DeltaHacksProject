import React from 'react';

<title>Rinvest</title>
document.body.style = 'background: #F1F1F!'

const InvestingGuide = () => {
  return (
    <div>
      <h1 style={{ color: "#0050a5ff", fontSize: "60px"}}>How to Invest</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#000", fontSize: "20px"}}>
          <p>Sign Up</p>
          <p style={{ color: "grey" }}>Create a secure account on Rinvest</p>
        </div>
        <div style={{ color: "#000", fontSize: "20px", marginLeft: "24px"}}>
          <p>Browse Investments</p>
          <p style={{ color: "grey" }}>Examine a wide variety of investment options, including startups and collectibles, by reviewing hundreds of opportunities</p>
        </div>
        <div style={{ color: "#000", fontSize: "20px", marginLeft: "24px"}}>
          <p>Make an Investment</p>
          <p style={{ color: "grey" }}>Acquire a financial interest in a startup or collectible by submitting payment</p>
        </div>
        <div style={{ color: "#000", fontSize: "20px", marginLeft: "24px" }}>
          <p>Hold or Sell</p>
          <p style={{ color: "grey" }}>On Rinvest's trading platform, you can choose to participate in future funding rounds, hold onto your current investment, or sell eligible securities.</p>
        </div>
      </div>
    </div>
  );
};

export default InvestingGuide;