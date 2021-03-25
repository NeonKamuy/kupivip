import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useCategories } from "../controllers/categories/hooks";
import HeaderActions from "../redux/header/actions";
import { HeaderActionType, ILoadCategoriesAction } from "../redux/header/interfaces";
import { Category } from "./category";
import { Home } from "./home";
import { Product } from "./product";

const App = () => {
    // Retrieving All Categories
    const categories = useCategories();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(HeaderActions.loadCategories(categories));
    }, [categories]);

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
