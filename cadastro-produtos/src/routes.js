import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CreateProduct from './views/products/create'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro-produtos" component={CreateProduct} />
            </Switch>
        </HashRouter>
    )
}