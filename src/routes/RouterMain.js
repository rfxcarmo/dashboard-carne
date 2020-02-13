import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Views/Dashboard/Dashboard'
import Clientes from '../components/Views/Clientes/Clientes'


export default function RouterMain(){
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Dashboard  />
                </Route>
                <Route exact path="/clientes">
                    <Clientes />
                </Route>
                <Route exact path="/produtos">
                    <h1>Produtos</h1>
                </Route>
            </Switch>
        </div>
    )
}