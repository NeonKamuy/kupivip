import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Category } from "./category";
import { Home } from "./home";
import { Product } from "./product";

const App = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/products/:slug" exact>
                        <Product />
                    </Route>
                    <Route path="/categories/:slug" exact>
                        <Category />
                    </Route>
                </Switch>
            </Router>
    );
};

export default App;
