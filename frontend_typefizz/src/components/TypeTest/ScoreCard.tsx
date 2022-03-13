// accuracy, timeRemaining / sentencesRemaining - TimeBased , SentencesBased
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { correctCountState, wrongCountState } from "../../atoms/ScoreAtoms";
import { gameModeState, typingState } from "../../atoms/UtilBarAtoms";

const scoreBox = {
    // border: "1px solid blue",
    h: " 70%",
    w: "70%",
    fontFace: "mono",
    bgColor: "teal.700",
    textAlign: "center",
    margin: "2rem",
    borderRadius: "0.3rem",
};

const ScoreCard = () => {
    const [typing, setTyping] = useRecoilState(typingState);
    const gameMode = useRecoilValue(gameModeState);
    const [correctCount, setCorrectCount] = useRecoilState(correctCountState);
    const [wrongCount, setWrongCount] = useRecoilState(wrongCountState);

    return (
        <Box h="20%" w="100%">
            <Flex
                h="100%"
                w="100%"
                alignItems={"center"}
                justifyContent="center"
            >
                <Box sx={scoreBox}>
                    <Text color="teal.400" fontSize="100%">
                        Correct
                    </Text>
                    <Text color="teal.100" fontSize="210%">
                        {correctCount}
                    </Text>
                    <Text color="teal.400" fontSize="100%">
                        Characters
                    </Text>
                </Box>
                <Box sx={scoreBox}>
                    <Text color="teal.400" fontSize="100%">
                        Wrong
                    </Text>
                    <Text color="teal.100" fontSize="210%">
                        {wrongCount}
                    </Text>
                    <Text color="teal.400" fontSize="100%">
                        characters
                    </Text>
                </Box>
                <Box sx={scoreBox}>
                    <Text color="teal.400" fontSize="100%">
                        Accuracy
                    </Text>
                    <Text color="teal.100" fontSize="210%">
                        {(
                            (correctCount / (correctCount + wrongCount)) *
                            100
                        ).toFixed(1)}
                        %
                    </Text>
                    {/* <Text>s</Text> */}
                </Box>
                {/* {gameMode === 1 && (
                    <Box sx={scoreBox}>
                        <Text>s</Text>
                        <Text>
                            {(correctCount / (correctCount + wrongCount)) * 100}
                        </Text>
                        <Text>s</Text>
                    </Box>
                )}
                {gameMode === 2 && (
                    <Box sx={scoreBox}>
                        <Text>s</Text>
                        <Text>
                            {(correctCount / (correctCount + wrongCount)) * 100}
                        </Text>
                        <Text>s</Text>
                    </Box>
                )}
                {gameMode === 3 && (
                    <Box sx={scoreBox}>
                        <Text>s</Text>
                        <Text>
                            {(correctCount / (correctCount + wrongCount)) * 100}
                        </Text>
                        <Text>s</Text>
                    </Box>
                )} */}
            </Flex>
        </Box>
    );
};

export default ScoreCard;
// correct , wrong, accuracy, remaining time/sentences
