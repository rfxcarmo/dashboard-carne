import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Views/Dashboard/Dashboard'
import Frigorificos from '../components/Views/Frigorificos/Frigorificos'
import Produtos from '../components/Views/Produtos/Produtos'
import Acougue from '../components/Views/Acougue/Acougue'


export default function RouterMain(){
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Dashboard  />
                </Route>
                <Route path="/produtos">
                    <Produtos />
                </Route>
                <Route path="/frigorificos">
                    <Frigorificos />
                </Route>                
                <Route path="/acougues">
                    <Acougue />
                </Route>
                <Route path="/pedidos">
                    <h1>Pedidos</h1>
                </Route>
            </Switch>
        </div>
    )
}