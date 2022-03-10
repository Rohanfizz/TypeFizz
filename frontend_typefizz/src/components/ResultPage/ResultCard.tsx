import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getRecoil, getRecoilPromise, setRecoil } from "recoil-nexus";
import { startDateState } from "../../atoms/KayboardAreaStates";
import { correctCountState, timeElapsedState } from "../../atoms/ScoreAtoms";
import {
    gameModeState,
    timeCountState,
    wordCountState,
} from "../../atoms/UtilBarAtoms";
import { enterFromLeft, enterFromRight } from "../../Variants/motionVariants";

const containerBox = {
    // border: "1px solid pink",
    h: "60%",
    w: "30%",
    bgColor: "teal.700",
    textAlign: "center",
    borderRadius: "0.3rem",
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
};
const headingTextArea = {
    color: "teal.400",
    fontSize: "3xl",
};
const mainTextArea = {
    color: "teal.100",
    fontSize: "8xl",
};

function ResultCard() {
    const totalWords = getRecoil(wordCountState);
    const startDate = getRecoil(startDateState);
    const timeElapsed = getRecoil(timeElapsedState);
    const correctCount = getRecoil(correctCountState);
    const wrongCount = getRecoil(wordCountState);
    const gameMode = getRecoil(gameModeState);
    const timeCount = getRecoil(timeCountState);

    useEffect(() => {
        if (gameMode !== 1)
            setRecoil(timeElapsedState, (Date.now() - startDate) / 60000);
        else setRecoil(timeElapsedState, timeCount);
    }, [startDate]);

    console.log(totalWords, timeElapsed);
    return (
        <Flex
            w="100%"
            h="40%"
            gap="2rem"
            alignItems={"center"}
            justifyContent="center"
        >
            <Box sx={containerBox}>
                <motion.div
                    variants={enterFromLeft}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Text sx={mainTextArea}>
                        {(totalWords / timeElapsed).toFixed(1)}
                    </Text>
                    <Text sx={headingTextArea}>WPM</Text>
                </motion.div>
            </Box>
            <Box sx={containerBox}>
                <motion.div
                    variants={enterFromRight}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Text sx={mainTextArea}>
                        {(
                            (correctCount / (correctCount + wrongCount)) *
                            100
                        ).toFixed(1)}
                    </Text>
                    <Text sx={headingTextArea}>ACCURACY</Text>
                </motion.div>
            </Box>
        </Flex>
    );
}

export default ResultCard;
