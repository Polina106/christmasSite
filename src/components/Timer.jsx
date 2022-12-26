import React from 'react';
import classes from "../styles/Timer.module.css"
import { useState, useEffect } from 'react';

export default function Timer() {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);
  
    const deadline = "December, 31, 2022";
  
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();    
  
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };
  
    React.useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);  
        return () => clearInterval(interval);
    }, []);
  
    return (
        <div className={classes.container}>
            <div className={classes.timer} role="timer">
                <div className={classes.col4}>
                <div className={classes.box}>
                    <p id={classes.day}>{days < 10 ? "0" + days : days}</p>
                    <span className={classes.text}>Days</span>
                </div>
                </div>
                <div className={classes.col4}>
                <div className={classes.box}>
                    <p id={classes.hour}>{hours < 10 ? "0" + hours : hours}</p>
                    <span className={classes.text}>Hours</span>
                </div>
                </div>
                <div className={classes.col4}>
                <div className={classes.box}>
                    <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
                    <span className={classes.text}>Minutes</span>
                </div>
                </div>
                <div className={classes.col4}>
                <div className={classes.box}>
                    <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
                    <span className={classes.text}>Seconds</span>
                </div>
                </div>
            </div> 
        </div>
    );
}
