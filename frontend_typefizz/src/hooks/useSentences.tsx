import { stringify } from "querystring";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import {
    gameModeState,
    sentenceCountState,
    timeCountState,
    wordCountState,
} from "../atoms/UtilBarAtoms";

function useSentences() {
    const gameMode = useRecoilValue(gameModeState);
    const timeCount = useRecoilValue(timeCountState);
    const sentenceCount = useRecoilValue(sentenceCountState);
    const wordCount = useRecoilValue(wordCountState);
    const queryURL = `http://metaphorpsum.com/sentences/${
        gameMode === 1 ? "5" : sentenceCount.toString()
    }`;

    const fetchText = async () => {
        const response = await fetch(queryURL);
        return (await response.text()).toString();
    };

    const { isLoading, error, data } = useQuery("textData", fetchText);
    
    console.log(data);
    return { isLoading, error, data:data?"":data };
}
export default useSentences;
