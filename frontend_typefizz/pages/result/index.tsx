import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Intro from "../../src/components/Frontpage/Intro";
import Logo from "../../src/components/Frontpage/Logo";
import ProgressGraph from "../../src/components/ResultPage/ProgressGraph";
import ResultCard from "../../src/components/ResultPage/ResultCard";


const Result: NextPage = () => {
    return (
        <>
            <Box h="100vh" w="100%" paddingTop="1rem">
                <Logo />
                <ResultCard/>
                <ProgressGraph/>
            </Box>
        </>
    );
};

export default Result;
