import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Ncordenadas from './pages/Ncordenadas'



import Home from "./pages/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/jogo1" exact component={Ncordenadas} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;