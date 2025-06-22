import React, { useEffect, useState } from 'react';
import '../Css/Greeting.css';
import morning from "../Images/goodmorning.png";
import afternoon from "../Images/afternoon.png";
import evening from "../Images/evening.png";

const Greeting = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const currentHour = time.getHours();
    const currentTime = time.toLocaleTimeString();
    const isAm = time.getHours() < 12;

    let greetingMessage = '';
    let imageSource = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning';
        imageSource = morning;
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon';
        imageSource = evening;
    } else {
        greetingMessage = 'Good Evening';
        imageSource = afternoon;
    }


    return (
        <div className="greeting">
            <h2>Greeting Website</h2>
            <h1>{currentTime} <span className="ampm">{isAm ? 'AM' : 'PM'}</span></h1>
            <p>{greetingMessage}</p>
            <img src={imageSource} alt="Time of Day" className="sun" />
        </div>
    );
};

export default Greeting;
