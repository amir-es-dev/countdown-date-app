import React, {useEffect, useState} from "react";
import "./Counter.css"

const Counter = () => {
    const nowDate = new Date();
    const [difference, setDifference] = useState(0)
    const [inputDate, setInputDate] = useState()
    const taragetDate =  new Date(inputDate);
    
    useEffect( ()=> {
        const timer = setTimeout(() => {
            setDifference(taragetDate - nowDate)
        }, 1000);
        return () => clearTimeout(timer);
    }, [difference, inputDate])

    const days = Math.floor(difference / (1000 * 24 * 60 * 60))
    const hours = Math.floor((difference/(1000 * 60 *60) % 24))
    const minutes = Math.floor((difference/(1000*60) % 60))
    const seconds = Math.floor((difference/(1000) % 60))


    const exactTime = (e) => {
        setInputDate(e.target.value)
    }


    return (
        <div className="container">
            <div>
                <input type="date" onChange={(e) => exactTime(e)} />
            </div>
            <div className="header">
                <h1>COMING <span>SOON</span></h1>
            </div>
            <div className={`content ${difference > 0 && "visible"}`}>
                <div>
                    <h3>{days}</h3>
                    <span>Days</span>
                </div>
                <div>
                    <h3>{hours}</h3>
                    <span>Hours</span>
                </div>
                <div>
                    <h3>{minutes}</h3>
                    <span>Minutes</span>
                </div>
                <div>
                    <h3>{seconds}</h3>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    )
}

export default Counter;