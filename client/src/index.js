import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import UserStore from "./store/UserStore";
import BallStore from "./store/BallStore";
import Parameters from "./store/Parameters";
import FilterStore from "./store/FilterStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        ball: new BallStore(),
        params: new Parameters(),
        filter: new FilterStore()
    }}>
        <App/>
    </Context.Provider>
)