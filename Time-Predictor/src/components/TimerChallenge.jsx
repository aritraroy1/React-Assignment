import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimeExpired] = useState(false);

    function handleStart() {

        timer.current = setTimeout(() => {
            setTimeExpired(true);
        },
            targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        setTimerStarted(false);
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Timer is running" : "Timer inactive"}
            </p>
        </section>
    );

}