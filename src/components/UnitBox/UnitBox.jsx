import React from "react";
import '/src/index.css';

const UnitBox = ({unit, title, description, link}) => {
    return (

        <div className="unitBox">
            <p>{unit}</p>
            <p>{title}</p>
            <p>{description}</p>
            <button onClick={() => window.open(link, '_blank')}>Click</button>
        </div>
       
    )
}

export default UnitBox;