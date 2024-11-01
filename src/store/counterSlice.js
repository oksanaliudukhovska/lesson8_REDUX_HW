import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counterValue',
    initialState, // или  count: 0 если только 1 параметр
    reducers: {
        // сюда пишем actions по которым будет изменяться count
       // increment: (state) под стэйтом мы понимаем initialState
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reload: (state) => {
            state.count = 0;
        },
        addValue: (state, action) => {
             state.count += +action.payload;
        }
    }
})

export const {increment, decrement, reload, addValue} = counterSlice.actions; //actions так надо просписать

export default counterSlice.reducer; //тоже так надо