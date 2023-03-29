import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Intro from "../src/components/Frontpage/Intro";
import Start from "../src/components/Frontpage/Start";

const Home: NextPage = () => {
    return (
        <>
            <Box h="100vh" w="100%" p="0" m="0">
                <Intro />
                {/* <Start /> */}
            </Box>
        </>
    );
};

export default Home;
