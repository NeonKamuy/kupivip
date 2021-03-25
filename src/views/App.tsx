import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./home";
import { Product } from "./product";

const App = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/product/:slug" exact>
                        <Product />
                    </Route>
                </Switch>
            </Router>
    );
};

export default App;
