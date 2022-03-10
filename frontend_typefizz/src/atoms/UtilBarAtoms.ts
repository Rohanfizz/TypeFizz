import { atom } from "recoil";

export const typingState = atom({
    key: "typingState",
    default: false,
});

export const gameModeState = atom({
    //1-> timeBased 2-> sentenceBased 3-> words based
    key: "gameModeState",
    default: 1,
});

export const timeCountState = atom({
    key:"timeCountState",
    default: 1,
})
export const sentenceCountState = atom({
    key:"sentenceCountState",
    default: 1,
})
export const wordCountState = atom({
    key:"wordCountState",
    default: 0,
})