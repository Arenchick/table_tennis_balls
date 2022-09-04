import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './App.css'
import Container from "./components/UI/Container/Container";

const App = () => {
  return (
    <BrowserRouter>
        <Container>
            <AppRouter />
        </Container>
    </BrowserRouter>
  );
}

export default App;
