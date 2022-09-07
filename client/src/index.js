import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import UserStore from "./store/UserStore";
import BallStore from "./store/BallStore";
import Parameters from "./store/Parameters";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        ballStore: new BallStore(),
        params: new Parameters()
    }}>
        <App/>
    </Context.Provider>
)