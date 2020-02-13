import React from 'react'
import Typography from '@material-ui/core/Typography';
import ListagemClientes from './ListagemClientes';
import Cadastro from './Cadastro';
import { Switch, Route , useRouteMatch } from "react-router-dom"

export default function Clientes(){
    let { path } = useRouteMatch()

    return(
        <div style={{padding : '50px'}}>
            <Typography gutterBottom variant="h5" component="h2">CLIENTES</Typography>
            <br />
            <div>
                <Switch>
                    <Route exact path={path}>
                        <ListagemClientes />
                    </Route>                
                    <Route path={`${path}/cadastro`}>
                        <Cadastro />
                    </Route>                
                </Switch>                               
            </div> 
        </div>
    )
}