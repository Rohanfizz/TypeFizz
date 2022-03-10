import { useState } from "react";
import { useRecoilState } from "recoil";
import { sentenceCountState, timeCountState, wordCountState } from "../atoms/UtilBarAtoms";

function useIncrementInput(
    defaultValue: number,
    minValue: number,
    maxValue: number,
    type:number
) {
    const [value, setValue] = useState(defaultValue);
    const [timeCount,setTimeCount] = useRecoilState(timeCountState);
    const [sentenceCount,setSentenceCount] = useRecoilState(sentenceCountState);
    const [wordCount,setWordCount] = useRecoilState(wordCountState);

    const onIncrementHandler = () => {
        setValue((p) => p + 1);
        if(type === 1) setTimeCount(p=>p+1);
        else if(type === 2) setSentenceCount(p=>p+1);
        else setWordCount(p=>p+1);
    };
    const onDecrementHandler = () => {
        setValue((p) => p - 1);
        if(type === 1) setTimeCount(p=>p-1);
        else if(type === 2) setSentenceCount(p=>p-1);
        else setWordCount(p=>p-1);
    };
    const resetHandler = () => {
        setValue(defaultValue);
        if(type === 1) setTimeCount(defaultValue);
        else if(type === 2) setSentenceCount(defaultValue);
        else setWordCount(defaultValue);
    };
    const decrementDisabled = value === minValue;
    const incrementDisabled = value === maxValue;
    return {
        value,
        onIncrementHandler,
        onDecrementHandler,
        resetHandler,
        decrementDisabled,
        incrementDisabled,
    };
}

export default useIncrementInput;
