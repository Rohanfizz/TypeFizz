import { atom, selector } from "recoil";

export const timerState = atom({
    key: "timerState",
    default: "00:00:00",
});

export const keyTextState = atom({
    key: "keyTextState",
    default: "",
});

export const prevSentenceIdxState = atom({
    key: "prevSentenceIdxState",
    default: -1,
});
export const currSentenceIdxState = atom({
    key: "currSentenceIdxState",
    default: 0,
});
export const nextSentenceIdxState = atom({
    key: "nextSentenceIdxState",
    default: 1,
});
export const isLoadingSentence = atom({
    key: "isLoadingSentence",
    default: true,
});

// export const sentencesArrayState = atom<string[]>({
//     key:"sentencesArrayState",
//     default: ['']
// })

export const colorArrayState = atom<string[]>({
    key: "colorArray",
    default: [""],
});

export const sentencesArrayState = selector({
    key: "sentencesArrayState",
    get: ({ get }) => {
        const keyText = get(keyTextState);
        return keyText.split(".");
    },
});

export const currCharIdxState = atom({
    key: "currCharIdxState",
    default: 0,
});

// export const colorArrayState = selector({
//     key:'colorArrayState',
//     get: ({get})=>{
//         const sentencesArray= get(sentencesArrayState);
//         const currSentenceIdx = get(currSentenceIdxState);
//         return Array(sentencesArray[currSentenceIdx].length).fill("blue");
//     }
// })

export const startDateState = atom<number | null>({
    key: "startDateState",
    default: null,
});

// export const totalWordsState = atom({
//     key: "totalWordsState",
//     default: 0,
// });
