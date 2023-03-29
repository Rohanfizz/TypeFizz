import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { enterFromRight } from "../../Variants/motionVariants";
import Link from "next/link";
import Logo from "./Logo";
import MadeWithLove from "../ResultPage/MadeWithLove";

const Intro: React.FC = () => {
    return (
        <>
            <Flex
                // border="1px"
                // borderColor={"white"}
                h="94%"
                w="100%"
                m="0"
                p="0"
                alignItems={"center"}
                justifyContent={"center"}
                overflowX="hidden"
            >
                <Box>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Logo />
                        <motion.p
                            layoutId="intro"
                            variants={enterFromRight}
                            initial="hidden"
                            animate="visible"
                        >
                            <Text
                                color="secondary"
                                fontFamily={"mono"}
                                fontSize={"1xl"}
                            >
                                Get Your Hands On That Keyboard!🙌
                            </Text>
                        </motion.p>
                    </motion.div>
                    <Flex justifyContent="center" p="1rem">
                        <motion.button
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            // whileHover={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"}}
                        >
                            <Link href="/type" passHref>
                                <Button bgColor="secondary">Start!</Button>
                            </Link>
                        </motion.button>
                    </Flex>
                </Box>
            </Flex>
            <MadeWithLove />
        </>
    );
};

export default Intro;
