import React from 'react'

import { HashRouter, Switch, Route } from 'react-from-dom'

import Home from './views/home'
import CreateProduct from './views/products/create'

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/cadastro-produtos" component={CreateProduct} />
            </Switch>
        </HashRouter>
    )
}