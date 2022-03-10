import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <Flex justifyContent={"center"} bgColor="back">
            <Box w="60%" minW={"50rem"} >
                {children}
            </Box>
        </Flex>
    );
};

export default Layout;
