// import { configureStore } from '@reduxjs/toolkit' //это первое что делаем

import { configureStore } from "@reduxjs/toolkit"; // оно автоматически экспортируется
import counterReducer from "./counterSlice"; // оно автоматически экспортируется
import notesReducer from "./notesSlice";

// export const store = configureStore({
//   reducer: {
//     // сюда передаем actions это фукнции что нужно сделать с данными в store надо еще вызвать dispatch(action)

//   },
// })

export const store = configureStore({
    reducer:{
        counterValue: counterReducer,
        listValue: notesReducer
      //counterValue: counterSlice 1 из counterSlice name, 2е сounterSlice
    }
})