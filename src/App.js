import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Carousel  from "./components/Carousel/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Title } from "./components/Title/Title";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Carousel/>
      <Title text="Destacado"/>
    </BrowserRouter>

  );
}

export default App;
