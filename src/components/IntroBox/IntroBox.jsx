import React from "react";
import '/src/index.css';

const IntroBox = ({unit, title, link}) => {
    return (
        <div className="introBox">
            <p>{unit}</p>
            <p>{title}</p>
            <button onClick={() => window.open(link, '_blank')}>COMING SOON</button>
        </div>
    )
}

export default IntroBox; 
