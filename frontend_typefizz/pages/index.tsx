import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Intro from "../src/components/Frontpage/Intro";
import Start from "../src/components/Frontpage/Start";
import { logoGoToTop } from "../src/Variants/motionVariants";

const Home: NextPage = () => {
    return (
        <>
            <Box h="100vh" w="100%">
                <Intro />
                <Start />
            </Box>
        </>
    );
};

export default Home;

