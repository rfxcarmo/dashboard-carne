import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Views/Dashboard/Dashboard'
import Fornecedores from '../components/Views/Fornecedores/Fornecedores'
import Produtos from '../components/Views/Produtos/Produtos'
import Acougue from '../components/Views/Acougue/Acougue'
import Login from '../components/Views/Login/Login'


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
                <Route path="/fornecedores">
                    <Fornecedores />
                </Route>                
                <Route path="/acougues">
                    <Acougue />
                </Route>
                <Route path="/pedidos">
                    <h1>Pedidos</h1>
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}