import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './input.css'
import { Provider } from "react-redux";
import store from '../src/Components/store.js'
createRoot(document.getElementById('root')).render( 
    <Provider store={store}>
         <App /> 
    </Provider>
   
)