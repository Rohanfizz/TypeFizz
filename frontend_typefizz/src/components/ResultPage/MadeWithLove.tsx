import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function MadeWithLove() {
    return (
        <Flex
            alignItems={"center"}
            justifyContent="center"
            fontSize={"100%"}
            // border="1px solid white"
            w="100%"
        >
            <Text
                // position="absolute"
                bottom="1rem"
                // bgColor="teal.800"
                // left="calc((100% - 18rem)/2)"
                fontFamily={"mono"}
                color="secondary"
                // fontSize="3rem"
                textAlign={"center"}
            >
                Made with ❤️ by{" "}
                <a href={"https://github.com/Rohanfizz"}>Rohanfizz</a>
            </Text>
        </Flex>
    );
}

export default MadeWithLove;
