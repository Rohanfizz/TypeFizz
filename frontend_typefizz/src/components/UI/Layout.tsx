import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Layout: React.FC = ({ children }) => {
    return (
        <Flex justifyContent={"center"} bgColor="back">
            <Box w="70%"  >
                {children}
            </Box>
        </Flex>
    );
};

export default Layout;
