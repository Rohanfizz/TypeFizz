import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { resetRecoil } from "recoil-nexus";
import { currCharIdxState, startDateState, timerState } from "../atoms/KayboardAreaStates";
import { correctCountState, wrongCountState } from "../atoms/ScoreAtoms";
import { typingState, wordCountState } from "../atoms/UtilBarAtoms";

function useReset() {

    const [currCharIdx,setcurrCharIdx] = useRecoilState(currCharIdxState);
    const [correctCount,setcorrectCountState] = useRecoilState(correctCountState);
    const [wrongCount,setwrongCountState] = useRecoilState(wrongCountState);
    const [typing,setTyping] = useRecoilState(typingState);

    useEffect(() => {
        setcurrCharIdx(0);
        setcorrectCountState(0);
        setwrongCountState(0);
        setTyping(false);
        resetRecoil(timerState)
        resetRecoil(wordCountState);
        resetRecoil(startDateState);
        
    }, []);

    // return <></>;
}

export default useReset;
