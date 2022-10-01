import React, {useContext, useEffect, useState, createContext} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'
import Container from "./components/UI/Container/Container";
import Header from "./components/UI/Header/Header";
import {check} from "./http/userApi";
import Footer from "./components/UI/Footer/Footer";
import UserStore from "./store/UserStore";
import BallStore from "./store/BallStore";
import FiltersStore from "./store/FiltersStore";

export const Context = createContext(null)

const App = () => {

    const [userStore, setUserStore] = useState(new UserStore())
    const [load,setLoad] = useState(false)

    useEffect(() => {
        check().then(data => {
            if (data){
                userStore.setUser(data)
                userStore.setIsAuth(true)
            }
        }).finally(()=>{setLoad(true)})
    }, [])


  return (
      <Context.Provider value={{
          user: userStore,
          setUser: setUserStore,
          ballStore: new BallStore(),
          filterStore: new FiltersStore()
      }}>
          <BrowserRouter>
              <Container>
                  <Header/>
                  {load ?
                      <AppRouter/> :
                      <div/>
                  }
                  <Footer/>
              </Container>
          </BrowserRouter>
      </Context.Provider>

  );
}

export default App;
