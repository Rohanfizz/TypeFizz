import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { currCharIdxState, currSentenceIdxState, timerState } from "../../atoms/KayboardAreaStates";
import { gameModeState, sentenceCountState } from "../../atoms/UtilBarAtoms";

const containerBox = {
    // border: "1px solid pink",
    h: "70%",
    w: "40%",
    bgColor: "teal.700",
    textAlign: "center",
    borderRadius: "0.3rem",
};
const headingTextArea = {
    color: "teal.400",
    fontSize: "2xl",
};
const mainTextArea = {
    color: "teal.100",
    fontSize: "6xl",
};

const RemainingBar: React.FC = () => {
    const gameMode = useRecoilValue(gameModeState);
    const timer = useRecoilValue(timerState);
    const sentenceCount = useRecoilValue(sentenceCountState);
    const currSentenceIdx = useRecoilValue(currSentenceIdxState);


    if (gameMode === 1) {
        return (
            <Box sx={containerBox}>
                <Text sx={headingTextArea}>Remaining Time</Text>
                <Text sx={mainTextArea}>{timer}</Text>
            </Box>
        );
    } else if (gameMode === 2) {
        return (
            <Box sx={containerBox}>
                <Text sx={headingTextArea}>Remaining Sentences</Text>
                <Text sx={mainTextArea}>{sentenceCount - currSentenceIdx}</Text>
            </Box>
        );
    }
    return (
        <Box sx={containerBox}>
            <Text sx={headingTextArea}>Remaining Words</Text>
            <Text sx={mainTextArea}></Text>
        </Box>
    );
};

export default RemainingBar;
