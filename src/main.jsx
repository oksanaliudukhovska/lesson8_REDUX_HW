import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
// надо импортировать store  (из того что мы сами сделаем )and provider (из библиотерки редакс) и потом App обвернуть в Провайдер а потом надо будет сделать Slice в которых мы будем описывать экшины и станы


createRoot(document.getElementById('root')).render(
  <StrictMode>
   < Provider store={store}> 
    <App />
    </Provider>
  </StrictMode>,
)
