import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Intro from "../../src/components/Frontpage/Intro";
import Logo from "../../src/components/Frontpage/Logo";
import MadeWithLove from "../../src/components/ResultPage/MadeWithLove";
import ScoreCard from "../../src/components/TypeTest/ScoreCard";
import SentenceBox from "../../src/components/TypeTest/SentenceBox";
import UtilBar from "../../src/components/TypeTest/UtilBar";
import useReset from "../../src/hooks/useReset";
import { logoGoToTop } from "../../src/Variants/motionVariants";

const Home: NextPage = () => {
    useReset();
    return (
        <>
            <Box h="100vh" w="100%" paddingTop="1rem">
                <Logo />
                <UtilBar />
                <SentenceBox />
                <ScoreCard />
                <MadeWithLove/>
            </Box>
        </>
    );
};

export default Home;
