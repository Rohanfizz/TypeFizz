import { atom } from "recoil";

export const correctCountState = atom({
    key : 'correctCountState',
    default : 0
})

export const wrongCountState = atom({
    key : 'wrongCountState',
    default : 0
})

export const timeElapsedState = atom({
    key:'timeElapsedState',
    default:0
})