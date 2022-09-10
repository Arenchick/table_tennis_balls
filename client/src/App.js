import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'
import Container from "./components/UI/Container/Container";
import Header from "./components/UI/Header/Header";
import {Context} from "./index";
import {check} from "./http/userApi";


const App = () => {
    const {user}= useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])
  return (
    <BrowserRouter>
            <Container>
                <Header>
                </Header>
                <AppRouter />
            </Container>
    </BrowserRouter>
  );
}

export default App;
