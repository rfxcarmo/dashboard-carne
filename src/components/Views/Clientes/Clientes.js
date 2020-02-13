import React from 'react'
import Typography from '@material-ui/core/Typography';
import ListagemClientes from './ListagemClientes';
import Cadastro from './Cadastro';
import { Switch, Route , useRouteMatch, useHistory } from "react-router-dom"

export default function Clientes(){
    let { path } = useRouteMatch()
    let history = useHistory()
    const [title, setTitle] = React.useState("CLIENTES")

    console.log(history)
    return(
        <div style={{padding : '50px'}}>
            
            <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
            <br />
            <div>
                <Switch>
                    <Route exact path={path}>
                        <ListagemClientes set={setTitle}/>
                    </Route>         
                    <Route path={`${path}/cadastro`}>
                        <Cadastro set={setTitle}/>
                    </Route>               
                </Switch>                               
            </div> 
        </div>
    )
}