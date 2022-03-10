// accuracy, timeRemaining / sentencesRemaining - TimeBased , SentencesBased
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { correctCountState, wrongCountState } from "../../atoms/ScoreAtoms";
import { gameModeState, typingState } from "../../atoms/UtilBarAtoms";

const scoreBox = {
    // border: "1px solid blue",
    h: " 10rem",
    w: "10rem",
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
                    <Text color="teal.400" fontSize="1.7rem">
                        Correct
                    </Text>
                    <Text color="teal.100" fontSize="3.5rem">
                        {correctCount}
                    </Text>
                    <Text color="teal.400" fontSize="1.2rem">
                        Characters
                    </Text>
                </Box>
                <Box sx={scoreBox}>
                    <Text color="teal.400" fontSize="1.7rem">
                        Wrong
                    </Text>
                    <Text color="teal.100" fontSize="3.5rem">
                        {wrongCount}
                    </Text>
                    <Text color="teal.400" fontSize="1.2rem">
                        characters
                    </Text>
                </Box>
                <Box sx={scoreBox}>
                    <Text color="teal.400" fontSize="1.7rem">
                        Accuracy
                    </Text>
                    <Text color="teal.100" fontSize="3rem">
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
