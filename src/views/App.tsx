import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./home";

const App = () => {
    return (
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
    );
};

export default App;
