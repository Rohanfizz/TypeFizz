import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
    colorArrayState,
    currCharIdxState,
    currSentenceIdxState,
    sentencesArrayState,
    prevSentenceIdxState,
    nextSentenceIdxState,
    // totalWordsState
    startDateState,
} from "../atoms/KayboardAreaStates";
import { typingState, wordCountState } from "../atoms/UtilBarAtoms";
import { getRecoil, setRecoil } from "recoil-nexus";
import { correctCountState, timeElapsedState, wrongCountState } from "../atoms/ScoreAtoms";

export const firstLetterPressed = (e: any) => {
    if (e.key === " ") {
        setRecoil(wordCountState, (p) => p + 1);
        // console.log(getRecoil(wordCountState));
    }   

    if (
        ["CapsLock", "Tab", "Control", "Shift", "Alt"].find(
            (ele) => ele === e.key
        )
    )
        return;
    const colorArray = getRecoil(colorArrayState);
    const currCharIdx = getRecoil(currCharIdxState);    
    const sentencesArray = getRecoil(sentencesArrayState);
    const currSentenceIdx = getRecoil(currSentenceIdxState);
    const prevSentenceIdx = getRecoil(prevSentenceIdxState);
    const nextSentenceIdx = getRecoil(nextSentenceIdxState);

    const typing = getRecoil(typingState);
    if (!typing){
        setRecoil(typingState, true);
        setRecoil(startDateState,Date.now());
        // console.log(getRecoil(startDateState));
    }

    if (e.key === "Backspace") {
        const newColorArray = [...colorArray];
        const wasCorrect = newColorArray[currCharIdx];
        newColorArray[currCharIdx] = "untouchedChar";
        setRecoil(colorArrayState, newColorArray);
        setRecoil(currCharIdxState, currCharIdx === 0 ? 0 : currCharIdx - 1);

        if (wasCorrect === "rightChar")
            setRecoil(correctCountState, (p) => p - 1);
        else if (wasCorrect === "wrongChar")
            setRecoil(wrongCountState, (p) => p - 1);
        return;
    }
    if (e.key === sentencesArray[currSentenceIdx].charAt(currCharIdx)) {
        const newColorArray = [...colorArray];
        const wasCorrect = newColorArray[currCharIdx];
        newColorArray[currCharIdx] = "rightChar";
        setRecoil(colorArrayState, newColorArray);
        setRecoil(correctCountState, (p) => p + 1);

        if (wasCorrect === "wrongChar") {
            setRecoil(wrongCountState, (p) => p - 1);
        }
    } else {
        const newColorArray = [...colorArray];
        newColorArray[currCharIdx] = "wrongChar";
        const wasCorrect = newColorArray[currCharIdx];
        setRecoil(colorArrayState, newColorArray);
        setRecoil(wrongCountState, (p) => p + 1);

        if (wasCorrect === "rightChar") {
            setRecoil(correctCountState, (p) => p - 1);
            // setRecoil(wrongCountState,(p)=>p+1);
        }
    }
    setRecoil(currCharIdxState, currCharIdx + 1);
    if (currCharIdx === sentencesArray[currSentenceIdx].length - 1) {
        setRecoil(prevSentenceIdxState, prevSentenceIdx + 1);
        setRecoil(currSentenceIdxState, currSentenceIdx + 1);
        setRecoil(nextSentenceIdxState, nextSentenceIdx + 1);
        setRecoil(currCharIdxState, 1);
        setRecoil(wordCountState, p=>p+1);
    }
    
    // console.log(e.key);
};

// export const calculateScore
