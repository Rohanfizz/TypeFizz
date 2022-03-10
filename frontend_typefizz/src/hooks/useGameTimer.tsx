import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currSentenceIdxState, timerState } from "../atoms/KayboardAreaStates";
import {
    gameModeState,
    sentenceCountState,
    timeCountState,
    typingState,
} from "../atoms/UtilBarAtoms";

function useGameTimer() {
    const router = useRouter();
    const Ref = useRef(null);
    const timeCount = useRecoilValue(timeCountState);
    const [timer, setTimer] = useRecoilState(timerState);
    const [typing, setTyping] = useRecoilState(typingState);
    const gameMode = useRecoilValue(gameModeState);
    const sentenceCount = useRecoilValue(sentenceCountState);
    const currSentenceIdx = useRecoilValue(currSentenceIdxState);

    useEffect(() => {
        if (gameMode === 1 && timer === "00:00:00" && typing) {
            setTyping(false);
            router.push("/result");
        } else if (
            gameMode === 2 &&
            sentenceCount - currSentenceIdx === 0 &&
            typing
        ) {
            setTyping(false);
            router.push("/result");
        }
    }, [timer]);

    const getTimeRemaining = (e:any) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: any) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the begining of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9 ? minutes : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e: any) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        setTimer(`00:${timeCount === 10 ? "10" : "0" + timeCount}:00`);

        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);

        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if
        // you entend to add more time
        console.log(timeCount);
        deadline.setMinutes(deadline.getMinutes() + timeCount);
        return deadline;
    };

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only

    // useEffect(() => {
    //     clearTimer(getDeadTime());
    // }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onStartTimer = () => {
        clearTimer(getDeadTime());
    };

    return { onStartTimer };
}

export default useGameTimer;
