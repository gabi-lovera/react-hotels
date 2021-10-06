import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Favoritos from "./pages/Favoritos";
import Registro from "./pages/Registro";
import Hotel from "./components/Hotel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FavContext } from "./helpers/FavContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [favoriteState, setFavoriteState] = useState([]);

  return (
    <div className="app-bg">
      <ChakraProvider>
        <FavContext.Provider value={{ favoriteState, setFavoriteState }}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Inicio />
                <Footer />
              </Route>
              <Route exact path="/hotel/:id">
                <Hotel />
                <Footer />
              </Route>
              <Route path="/favoritos">
                <Favoritos />
              </Route>
              <Route path="/sesion">
                <InicioSesion />
                <Footer />
              </Route>
              <Route path="/registro">
                <Registro />
                <Footer />
              </Route>
              <Route path="*">
                <Inicio />
              </Route>
            </Switch>
          </Router>
        </FavContext.Provider>
      </ChakraProvider>
    </div>
  );
}

export default App;
