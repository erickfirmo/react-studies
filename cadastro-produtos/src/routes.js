import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CreateProduct from './views/products/create'
import ListProduct from './views/products/list'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" component={CreateProduct} />
                <Route exact path="/consulta-produtos" component={ListProduct} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}