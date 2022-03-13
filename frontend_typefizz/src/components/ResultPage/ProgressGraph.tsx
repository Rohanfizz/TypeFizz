import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import MadeWithLove from "./MadeWithLove";

function ProgressGraph() {
    return (
        <Flex
            w="100%"
            h="45%"
            alignItems="center"
            flexDir="column"
            justifyContent={"center"}
        >
            <motion.button
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, repeat: Infinity }}
                // whileHover={{boxShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073"}}
            >
                <Link href="/type" passHref>
                    <Button bgColor="secondary">Start Again!</Button>
                </Link>
            </motion.button>
            
        </Flex>
    );
}

export default ProgressGraph;
