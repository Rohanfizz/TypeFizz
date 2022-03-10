import { useRecoilState } from "recoil";
import { gameModeState, typingState } from "../../atoms/UtilBarAtoms";
import { Button, ButtonGroup } from "@chakra-ui/react";
import useIncrementInput from "../../hooks/useIncrementInput";
import React from "react";

function ModeSelector() {
    
    const [typing, setTyping] = useRecoilState(typingState);
    const [gameMode, setGamemode] = useRecoilState(gameModeState);
    const onTimeBasedClickHandler = (e: React.MouseEvent) => {
        setGamemode(1);
    };
    const onSentenceBasedClickHandler = (e: React.MouseEvent) => {
        setGamemode(2);
    };
    const onWordBasedClickHandler = (e: React.MouseEvent) => {
        setGamemode(3);
    };

    return (
        <ButtonGroup isAttached marginBottom="2rem">
            <Button
                isActive={gameMode === 1}
                onClick={onTimeBasedClickHandler}
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
            >
                TimeBased
            </Button>
            <Button
                isActive={gameMode === 2}
                onClick={onSentenceBasedClickHandler}
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
            >
                SentenceBased
            </Button>
            {/* <Button
                isActive={gameMode === 3}
                onClick={onWordBasedClickHandler}
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
            >
                WordBased
            </Button> */}
        </ButtonGroup>
    );
}

export default ModeSelector;
