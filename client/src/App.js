import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'
import Container from "./components/UI/Container/Container";
import Header from "./components/UI/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
            <Container>
                <Header>
                    Header
                </Header>
                <AppRouter />
            </Container>
    </BrowserRouter>
  );
}

export default App;
