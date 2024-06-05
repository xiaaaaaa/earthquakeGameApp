import { configureStore, createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const initialState = { Answer1: 2, Answer2: 2, Answer3: 2, Answer4: 2 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    // 1是對，2是錯
    reducers: {
        correct1Counter: (state) => {
            state.Answer1 = 1;
        },
        wrong1Counter: (state) => {
            state.Answer1 = 2;
        },
        correct2Counter: (state) => {
            state.Answer2 = 1;
        },
        wrong2Counter: (state) => {
            state.Answer2 = 2;
        },
        correct3Counter: (state) => {
            state.Answer3 = 1;
        },
        wrong3Counter: (state) => {
            state.Answer3 = 2;
        },
        correct4Counter: (state) => {
            state.Answer4 = 1;
        },
        wrong4Counter: (state) => {
            state.Answer4 = 2;
        },
    },
});

export const selectAnswer1 = (state) => state.counter.Answer1;
export const selectAnswer2 = (state) => state.counter.Answer2;
export const selectAnswer3 = (state) => state.counter.Answer3;
export const selectAnswer4 = (state) => state.counter.Answer4;
export const { correct1Counter, wrong1Counter, correct2Counter, wrong2Counter,correct3Counter, wrong3Counter,correct4Counter, wrong4Counter } = counterSlice.actions;
export default counterSlice.reducer;