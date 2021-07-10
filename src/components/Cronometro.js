import React from 'react'
import '../style/Cronometro.scss'
import { useEffect, useState } from "react";




const Cronometro = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [minutos, setMinutos] = useState(0)

    useEffect(() => {
        let interval = null;
        if (seconds >= 60) {
            setMinutos(minutos + 1)
            setSeconds(0)
        }
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <main>
            <div className="Timer" >
                {minutos}:{seconds}
            </div>
        </main>
    );
};
export default Cronometro