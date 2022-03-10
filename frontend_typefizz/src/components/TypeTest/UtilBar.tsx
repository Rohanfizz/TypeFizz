// accuracy, timeRemaining / sentencesRemaining - TimeBased , SentencesBased
import { Box, Button, ButtonGroup, Flex, Input } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useRecoilState } from "recoil";
import { gameModeState, typingState } from "../../atoms/UtilBarAtoms";

import { enterFromLeft, enterFromRight } from "../../Variants/motionVariants";
import ModeSelector from "./ModeSelector";
import RemainingBar from "./RemainingBar";
import SentenceIncrement from "./SentenceIncrement";
import TimeIncrement from "./TimeIncrement";

const UtilBar = () => {
    const [typing, setTyping] = useRecoilState(typingState);
    const [gameMode, setGamemode] = useRecoilState(gameModeState);

    return (
        <Box
            // border="1px solid red"
            h="205"
            w="100%"
            overflow="hidden"
            paddingTop="1rem"
            
        >
            <AnimatePresence exitBeforeEnter>
            {!typing && <Flex
                flexDir={"column"}
                h="100%"
                // position="relative"
                // top="3rem"
                // bgColor="red"
                justifyContent={"center"}
                alignItems="center"
            >
                <AnimatePresence>
                    {!typing && (
                        <motion.div
                            variants={enterFromLeft}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ModeSelector />{" "}
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence exitBeforeEnter>
                    {gameMode === 1 && !typing && (
                        <motion.div
                            key="timeIncrement"
                            variants={enterFromRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <TimeIncrement />
                        </motion.div>
                    )}
                    {gameMode === 2 && !typing && (
                        <motion.div
                            key="sentenceIncrement"
                            variants={enterFromRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <SentenceIncrement />
                        </motion.div>
                    )}
                    {gameMode === 3 && !typing && (
                        <motion.div
                            key="wordIncrement"
                            variants={enterFromRight}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <TimeIncrement />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Flex>}
            {typing && <Flex
                flexDir={"column"}
                h="100%"
                // position="relative"
                // top="3rem"
                // bgColor="red"
                justifyContent={"center"}
                alignItems="center"
            ><RemainingBar/></Flex>}
            </AnimatePresence>
        </Box>
    );
};

export default UtilBar;
