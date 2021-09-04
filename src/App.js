import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Productos" exact>
          <Products/>
        </Route>
        <Route path="/Contacto" exact>
          <Contact/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
