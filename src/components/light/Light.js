import { useState } from 'react';
import './Light.css';
import red from './red.png'
import red_and_amber from './red and amber.png'
import amber from './amber.png'
import green from './green.png'

function Light() {
    const [light, setLight] = useState(red);
    
    const handleClick = (newLight) => {
        setLight(newLight);
        document.getElementById("lightValue").src = newLight;
    }

    const changeTrafficLight = () => {
        switch (light) {
            case red:
                handleClick(red_and_amber);
                break;
            case red_and_amber:
                handleClick(green);
                break;
            case green:
                handleClick(amber);
                break;
            case amber:
            default:
                handleClick(red);
        }
    }

    return (
        <div className="lights">
            <img src={light} id="lightValue" alt={light}/>
            <br />
            <button onClick={changeTrafficLight}>Update</button>
        </div>
    )
}

export default Light;