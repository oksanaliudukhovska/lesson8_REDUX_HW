import { useDispatch, useSelector } from "react-redux" // automaticly
import { increment, decrement, reload, addValue } from "./store/counterSlice"; // надо его импортировать почему то автоматически не получилось
import { useState } from "react";
import { addItem } from "./store/notesSlice";


function App() {
  const [value, setValue] = useState('');
  const [item, setItem] = useState('');

 //чтобы получить count надо сделать:

 const count = useSelector((state) => state.counterValue.count);
 const items = useSelector((state) => state.listValue.items);
 const dispatch = useDispatch();

const inc = () => {
   dispatch(increment())
}

const dec = () => {
  dispatch(decrement())
}

const reset = () => {
  dispatch(reload())
}



  return (
    <>
    <h3>{count}</h3>
    <button onClick={inc}>Inc + </button>
    <button onClick={dec}>Dec - </button>
    <button onClick={reset}>Reset</button>
    <br />
    <button onClick={() => dispatch(addValue(value))}>Add value</button>
    <br />
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    <br />
    <br />
    <p>task 4: arrays</p>
    <input type="text" value={item} onChange={(e)=> setItem(e.target.value) } />
    <button onClick={() => dispatch(addItem(item))}>Add item</button>
    <ul>
     {items.map((el, index) => <li key={index}>{el}</li>)}
    </ul>
    </>
  )
}

export default App
