import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Signin } from "./pages/Signin";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container container-body">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Productos" exact>
          <Products title="Productos"/>
        </Route>
        <Route path="/Productos/:idCategory" exact>
          <Products title="Productos"/>
        </Route>
        <Route path="/Productos/:idCategory/:idSubCategory" exact>
          <Products/>
        </Route>
        <Route path="/detalle/:idProduct" exact>
          <Detail />
        </Route>
        <Route path="/Login" exact>
          <Signin/>
        </Route>
        <Route path="/Contacto" exact>
          <Contact/>
        </Route>
      </Switch>
      </div>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;