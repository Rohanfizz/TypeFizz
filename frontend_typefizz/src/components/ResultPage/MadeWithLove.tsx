import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function MadeWithLove() {
    return (
        <Text
            position="absolute"
            bottom="1rem"
            // bgColor="teal.800"
            left="calc((100% - 18rem)/2)"
            fontFamily={"mono"}
            color="secondary"
            fontSize="1.2rem"
            textAlign={"center"}
        >
            Made with ❤️ by{" "}
            <a href={"https://github.com/Rohanfizz"}>Rohanfizz</a>
        </Text>
    );
}

export default MadeWithLove;
