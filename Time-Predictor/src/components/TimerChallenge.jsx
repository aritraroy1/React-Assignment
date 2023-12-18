import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeremaining, setTimeremaining] = useState(targetTime * 1000);
    const timerIsActive = timeremaining > 0 && timeremaining < targetTime * 1000;

    if (timeremaining <= 0) {

        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {

        setTimeremaining(targetTime * 1000);

    }

    function handleStart() {

        timer.current = setInterval(() => {

            setTimeremaining(prevTimeRmaining => prevTimeRmaining - 10);

        }, 10);
    }

    function handleStop() {

        dialog.current.open();
        clearInterval(timer.current);

    }

    return (
        <>
            <ResultModal
                targetTime={targetTime}
                result="lost"
                ref={dialog}
                remainingTime={timeremaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Timer is running" : "Timer inactive"}
                </p>
            </section >
        </>
    );

}