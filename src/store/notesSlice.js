import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const notesSlice = createSlice({
    name: 'listValue',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log(action);
            state.items.push(action.payload)
        }
    }
})
export const {addItem} = notesSlice.actions;

export default notesSlice.reducer