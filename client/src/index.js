import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import UserStore from "./store/UserStore";
import BallStore from "./store/BallStore";
import FiltersStore from "./store/FiltersStore";
import BasketStore from "./store/BacketStore";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App/>
)