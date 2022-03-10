import { Button, ButtonGroup, Input, Flex } from "@chakra-ui/react";
import React from "react";
import useIncrementInput from "../../hooks/useIncrementInput";

function TimeIncrement() {
    const {
        value,
        onIncrementHandler,
        onDecrementHandler,
        resetHandler,
        decrementDisabled,
        incrementDisabled,
    } = useIncrementInput(1, 1, 10,1);
    return (
        <Flex flexDir={"column"} alignItems="center" color={"secondary"} fontSize={"0.9rem"} fontFamily={"mono"} fontStyle={"italic"}>
            <ButtonGroup isAttached>
                <Button
                    bgColor="teal.700"
                    color="secondary"
                    _active={{
                        bgColor: "secondary",
                        color: "teal.800",
                    }}
                    _focus={{ outline: "none" }}
                    _hover={{
                        bgColor: "yellow.100",
                        color: "teal.700",
                    }}
                    fontSize="2xl"
                    onClick={onDecrementHandler}
                    disabled={decrementDisabled}
                >
                    -
                </Button>
                <Input
                    borderRadius={0}
                    outline="none"
                    bgColor="secondary"
                    textAlign={"center"}
                    fontSize="2xl"
                    w="4rem"
                    readOnly
                    value={value}
                    type="number"
                    color="black"
                />

                <Button
                    bgColor="teal.700"
                    color="secondary"
                    _active={{
                        bgColor: "secondary",
                        color: "teal.800",
                    }}
                    _focus={{ outline: "none" }}
                    _hover={{
                        bgColor: "yellow.100",
                        color: "teal.700",
                    }}
                    fontSize="2xl"
                    onClick={onIncrementHandler}
                    disabled={incrementDisabled}
                >
                    +
                </Button>
            </ButtonGroup>
            (mins)
        </Flex>
    );
}

export default TimeIncrement;
