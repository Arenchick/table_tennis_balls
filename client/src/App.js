import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'
import Container from "./components/UI/Container/Container";
import Header from "./components/UI/Header/Header";
import {Context} from "./index";
import {check} from "./http/userApi";
import Footer from "./components/UI/Footer/footer";

const App = () => {

    const {user}= useContext(Context)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            setIsLoaded(true)
        })
    }, [])

  return (
    <BrowserRouter>
            <Container>
                <Header/>
                        <AppRouter/>
            </Container>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
