import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { logoGoToTop } from "../../Variants/motionVariants";

function Logo() {
    return (
        <AnimatePresence>
            <motion.div
                variants={logoGoToTop}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Text>
                    <Flex
                        paddingBottom={"1rem"}
                        flexDir={"row"}
                        marginTop="1rem"
                        // position={"absolute"}
                        // top="calc( (100% - 15.25rem)/2 )"
                        // left="calc( (100% - 10rem)/2 )"
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <Heading
                            variant={"h1"}
                            fontFamily={"mono"}
                            fontSize={"4xl"}
                            // bgColor="secondary"
                            color="primary"
                            textAlign={"center"}
                            h="2.5rem"

                            // bgColor="red"
                        >
                            <Link href="/">TypeFizz</Link>
                        </Heading>
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{
                                opacity: 0,
                                // repeatCount: "Infinity",
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                            }}
                        >
                            <Box bgColor="secondary" h="2.5rem" w="0.5rem" />
                        </motion.div>
                    </Flex>
                </Text>
            </motion.div>
        </AnimatePresence>
    );
}

export default Logo;
