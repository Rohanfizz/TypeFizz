// accuracy, timeRemaining / sentencesRemaining - TimeBased , SentencesBased
import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    colorArrayState,
    currCharIdxState,
    currSentenceIdxState,
    isLoadingSentence,
    keyTextState,
    nextSentenceIdxState,
    prevSentenceIdxState,
    sentencesArrayState,
} from "../../atoms/KayboardAreaStates";
import {
    gameModeState,
    sentenceCountState,
    timeCountState,
    typingState,
} from "../../atoms/UtilBarAtoms";
import useGameTimer from "../../hooks/useGameTimer";
import useSentences from "../../hooks/useSentences";
import { firstLetterPressed } from "../../Utils/game";
import axios from "axios";
import { motion } from "framer-motion";
import { blinking } from "../../Variants/motionVariants";
import getConfig from "next/config";

const prevNextSentenceCss = {
    height: "3rem",
    width: "60%",
    bgColor: "teal.800",
    borderRadius: "0.5rem",
    fontFace: "mono",
    fontSize: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "teal.400",
    textAlign: "center",
};

const currentSentenceCss = {
    // height: "4rem",
    // width: "80%",
    p: "1rem",
    bgColor: "teal.700",
    borderRadius: "0.5rem",
    fontFace: "mono",
    fontSize: "200%",
    // fontSize: "3.5vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "teal.100",
    textAlign: "center",
    maxWidth: "100%",
    flexWrap: "wrap",
};

const SentenceBox = () => {
    const gameMode = useRecoilValue(gameModeState);
    const timeCount = useRecoilValue(timeCountState);
    const sentenceCount = useRecoilValue(sentenceCountState);
    const currCharIdx = useRecoilValue(currCharIdxState);
    const [typing, setTyping] = useRecoilState(typingState);
    const [keyText, setKeyText] = useRecoilState(keyTextState);
    const [isLoading, setisLoading] = useRecoilState(isLoadingSentence);
    const [prevSentenceIdx, setPrevSentenceIdx] =
        useRecoilState(prevSentenceIdxState);
    const [currSentenceIdx, setCurrSentenceIdx] =
        useRecoilState(currSentenceIdxState);
    const [nextSentenceIdx, setNextSentenceIdx] =
        useRecoilState(nextSentenceIdxState);
    // const colorArray = useRecoilValue(colorArrayState);
    const [colorArray, setColorArray] = useRecoilState(colorArrayState);
    const sentencesArray = useRecoilValue(sentencesArrayState);
    const { onStartTimer } = useGameTimer();

    useEffect(() => {
        if (typing) onStartTimer();
    }, [typing]);

    useEffect(() => {
        const textFetcher = async () => {
            const queryURL = `//metaphorpsum.com/sentences/${
                gameMode === 1 ? "50" : sentenceCount.toString()
            }`;
            // const queryURL = `${
            //     process.env.NODE_ENV === "production"
            //         ? "https://typefizzbackend.netlify.app/sentences/"
            //         : "http://localhost:8000/sentences/"
            // }${gameMode === 1 ? "50" : sentenceCount.toString()}`;
            const response = await axios.get(queryURL);
            // console.log(responses);
            // const response = await fetch(queryURL,{mode: 'cors'});
            const str = await response.data;
            setKeyText((p) => str);
            setPrevSentenceIdx(-1);
            setCurrSentenceIdx(0);
            setNextSentenceIdx(1);
        };

        setisLoading(true);
        textFetcher();

        // return () => {};
    }, [gameMode, sentenceCount, timeCount]);

    useEffect(() => {
        // setsentencesArray((p) => keyText.split("."));
        setColorArray((p) =>
            Array(sentencesArray[currSentenceIdx].length).fill("untouchedChar")
        );

        document.addEventListener("keydown", firstLetterPressed);
        setisLoading(false);
        return () => {
            document.removeEventListener("keydown", firstLetterPressed);
        };
    }, [keyText, currSentenceIdx]);

    // const sentencesArray = keyText.split(".");
    // console.log(keyText, sentencesArray[currSentenceIdx].length);

    return (
        <Box
            // border="1px solid blue"
            h="40%"
            w="100%"
            paddingBottom={"2rem"}
        >
            <Flex
                h="100%"
                flexDir={"column"}
                alignItems="center"
                gap="1rem"
                justifyContent="center"
            >
                {
                    <Skeleton
                        key="prev"
                        sx={prevNextSentenceCss}
                        isLoaded={!isLoading}
                    >
                        {/* <Skeleton isLoaded={!isLoading}> */}
                        {sentencesArray[prevSentenceIdx]}
                        {/* </Skeleton> */}
                    </Skeleton>
                }
                <Skeleton
                    key="curr"
                    sx={currentSentenceCss}
                    isLoaded={!isLoading}
                >
                    {" "}
                    {/* {console.log(colorArray.length, sentencesArray.length)} */}
                    {sentencesArray[currSentenceIdx]
                        .split("")
                        .map((cc, idx) => (
                            <Text
                                textDecoration={
                                    idx === currCharIdx ? "underline" : "none"
                                }
                                color={
                                    idx === currCharIdx
                                        ? "blue.100"
                                        : colorArray[idx]
                                }
                                marginLeft={cc === " " ? "0rem" : 0}
                                key={idx}
                            >
                                {idx === currCharIdx && (
                                    <motion.div
                                        variants={blinking}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {cc === " " ? "\u00A0" : cc}
                                    </motion.div>
                                )}
                                {idx != currCharIdx && (
                                    <>{cc === " " ? "\u00A0" : cc}</>
                                )}
                            </Text>
                        ))}
                </Skeleton>
                <Skeleton
                    key="next"
                    sx={prevNextSentenceCss}
                    isLoaded={!isLoading}
                >
                    {sentencesArray[nextSentenceIdx]}
                </Skeleton>
            </Flex>
        </Box>
    );
};

export default SentenceBox;
